// ============================================================
// Builds src/content/pages.js from src/content/**/*.md
// Run: node scripts/build-content.mjs   (or: npm run content:build)
// The MD files are the source of truth. Edit them, re-run this,
// then `npm run build`. Page design comes from ContentPage.svelte,
// so new pages always match the site automatically.
// ============================================================
import { readdirSync, readFileSync, writeFileSync, mkdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src/content');
const pagesDir = join(contentDir, 'pages');
const manifestFile = join(contentDir, 'manifest.js');

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Minimal inline markdown: **bold**, *italic*, [text](url). [PHONE] is
// left as the __PHONE__ token; ContentPage swaps in the real number.
function inline(s) {
  let t = esc(s);
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 underline">$1</a>');
  t = t.replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  t = t.replace(/\[PHONE\]/g, '__PHONE__');
  return t;
}

function parseFM(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) throw new Error('missing frontmatter');
  const fm = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^([A-Za-z_]+):\s*"?(.*?)"?\s*$/);
    if (mm) fm[mm[1]] = mm[2];
  }
  return [fm, text.slice(m[0].length)];
}

// Split body lines into typed blocks: p | ul | ol | img
function parseBlocks(lines) {
  const blocks = [];
  let para = [];
  let list = null;
  const flush = () => {
    if (para.length) {
      blocks.push({ type: 'p', html: inline(para.join(' ')) });
      para = [];
    }
    if (list) {
      blocks.push(list);
      list = null;
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      flush();
      blocks.push({ type: 'img', alt: img[1], src: img[2].replace('../images/', '/images/') });
      continue;
    }
    const ul = line.match(/^-\s+(.*)/);
    if (ul) {
      if (!list || list.type !== 'ul') {
        flush();
        list = { type: 'ul', items: [] };
      }
      list.items.push(inline(ul[1]));
      continue;
    }
    const ol = line.match(/^\d+\.\s+(.*)/);
    if (ol) {
      if (!list || list.type !== 'ol') {
        flush();
        list = { type: 'ol', items: [] };
      }
      list.items.push(inline(ol[1]));
      continue;
    }
    para.push(line);
  }
  flush();
  return blocks;
}

function parseFaq(lines) {
  const faqs = [];
  let q = null;
  let a = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const qm = line.match(/^\*\*(.+)\*\*$/);
    if (qm) {
      if (q) faqs.push({ q, a: inline(a.join(' ')) });
      q = qm[1];
      a = [];
    } else if (q) {
      a.push(line);
    }
  }
  if (q) faqs.push({ q, a: inline(a.join(' ')) });
  return faqs;
}

function parseFile(path, kind) {
  const [fm, bodyRaw] = parseFM(readFileSync(path, 'utf8'));
  const body = bodyRaw.replace(/<!--[\s\S]*?-->/g, '');
  const lines = body.split('\n');

  let h1 = '';
  const rest = [];
  for (const line of lines) {
    if (!h1 && line.startsWith('# ')) {
      h1 = line.slice(2).trim();
      continue;
    }
    rest.push(line);
  }

  // Split into intro (before first ##) + sections
  const chunks = [];
  let cur = { heading: null, lines: [] };
  for (const line of rest) {
    const hm = line.match(/^##\s+(.*)/);
    if (hm) {
      chunks.push(cur);
      cur = { heading: hm[1].trim(), lines: [] };
    } else {
      cur.lines.push(line);
    }
  }
  chunks.push(cur);
  const introChunk = chunks.shift();

  const introBlocks = parseBlocks(introChunk.lines);
  const introParas = introBlocks.filter((b) => b.type === 'p').map((b) => b.html);
  const introImg = introBlocks.find((b) => b.type === 'img') || null;

  // Last section becomes the CTA band
  const last = chunks.pop();
  const ctaBlocks = parseBlocks(last.lines);
  const ctaTextBlock = ctaBlocks.find((b) => b.type === 'p');
  const closingBlock = [...ctaBlocks].reverse().find((b) => b.type === 'p' && /<em>.*<\/em>/.test(b.html) && b !== ctaTextBlock);

  const sections = [];
  let faqs = [];
  let faqHeading = '';
  for (const c of chunks) {
    if (/faq/i.test(c.heading)) {
      faqs = parseFaq(c.lines);
      faqHeading = c.heading;
    } else {
      sections.push({ heading: c.heading, blocks: parseBlocks(c.lines) });
    }
  }

  // Strip the italic closing line out of CTA text if it got merged
  let ctaText = ctaTextBlock ? ctaTextBlock.html : '';
  let closing = closingBlock ? closingBlock.html.replace(/<\/?em>/g, '') : null;

  return {
    kind,
    slug: fm.slug,
    title: fm.title,
    meta: fm.meta_description,
    h1,
    intro: introParas.length ? introParas[0].replace(/<[^>]+>/g, '') : '',
    image: introImg,
    sections,
    faqs,
    faqHeading,
    ctaHeading: last.heading,
    ctaText,
    closing,
  };
}

const pages = [];
for (const f of readdirSync(join(contentDir, 'services')).filter((f) => f.endsWith('.md'))) {
  pages.push(parseFile(join(contentDir, 'services', f), 'service'));
}
for (const f of readdirSync(join(contentDir, 'locations')).filter((f) => f.endsWith('.md'))) {
  pages.push(parseFile(join(contentDir, 'locations', f), 'location'));
}
for (const f of readdirSync(join(contentDir, 'nano')).filter((f) => f.endsWith('.md'))) {
  pages.push(parseFile(join(contentDir, 'nano', f), 'nano'));
}

// One JS module per page (code-split: each route loads only its own page data).
// manifest.js maps every route slug to a lazy import via import.meta.glob.
mkdirSync(pagesDir, { recursive: true });
for (const f of readdirSync(pagesDir)) {
  if (f.endsWith('.js')) unlinkSync(join(pagesDir, f));
}
try { unlinkSync(join(contentDir, 'pages.js')); } catch { /* old single-file bundle */ }
const manifest = {};
for (const p of pages) {
  const fname = p.slug.replace(/^\//, '').replace(/\//g, '--') + '.js';
  writeFileSync(
    join(pagesDir, fname),
    '// AUTO-GENERATED by scripts/build-content.mjs — do not edit by hand.\n' +
      `export const page = ${JSON.stringify(p, null, 2)};\n`
  );
  manifest[p.slug] = './pages/' + fname;
}
const mlines = [
  '// AUTO-GENERATED by scripts/build-content.mjs — do not edit by hand.',
  'const mods = import.meta.glob("./pages/*.js");',
  'export const pageLoaders = {',
];
for (const [slug, rel] of Object.entries(manifest)) {
  mlines.push(`  ${JSON.stringify(slug)}: mods[${JSON.stringify(rel)}],`);
}
mlines.push('};');
writeFileSync(manifestFile, mlines.join('\n') + '\n');
console.log(`built ${pages.length} page modules -> src/content/pages/`);
for (const p of pages) {
  const nFaq = p.faqs.length;
  const nSec = p.sections.length;
  console.log(`  ${p.slug}  sections=${nSec} faqs=${nFaq} img=${p.image ? 'yes' : 'no'} cta=${p.ctaHeading ? 'yes' : 'no'}`);
}
