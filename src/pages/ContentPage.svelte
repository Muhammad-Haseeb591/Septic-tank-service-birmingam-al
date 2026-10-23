<!-- ============================================================
  CONTENT PAGE — one renderer for every service and location page.
  Page content comes from src/content/pages/ (generated per-page modules from
  the MD files in content/). Design comes from here, so every
  page looks identical automatically.
============================================================ -->
<script>
  import Layout from '../components/Layout.svelte';
  import PageHero from '../components/PageHero.svelte';
  import CtaBand from '../components/CtaBand.svelte';
  import NeighborhoodGrid from '../components/NeighborhoodGrid.svelte';
  import FaqJsonLd from '../components/FaqJsonLd.svelte';
  import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from '../data.js';
  import { NEIGHBORHOODS } from '../data/neighborhoods.js';

  let { page } = $props();

  const hoods = NEIGHBORHOODS[page.slug];

  const ogImage = page.image ? SITE_URL + page.image.src : SITE_URL + '/images/brand/logo.png';

  const phoneLink = `<a href="${PHONE_TEL}" class="font-semibold text-brand-600 no-underline hover:underline">${PHONE_DISPLAY}</a>`;
  const withPhone = (html) => html.split('__PHONE__').join(phoneLink);

  let openFaq = $state(-1);

  const isLocation = page.slug.startsWith('/locations/');
  const crumbParent = isLocation ? { href: '/locations/birmingham-neighborhoods', label: 'Locations' } : { href: '/#services', label: 'Services' };
</script>

<svelte:head>
  <title>{page.title}</title>
  <meta name="description" content={page.meta} />
  <link rel="canonical" href={SITE_URL + page.slug} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Septic Tank Pros" />
  <meta property="og:title" content={page.title} />
  <meta property="og:description" content={page.meta} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={page.title} />
  <meta name="twitter:description" content={page.meta} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<Layout>
  <nav aria-label="Breadcrumb" class="border-b border-cream-dark bg-cream/60">
    <ol class="mx-auto flex w-[92%] max-w-[1180px] flex-wrap items-center gap-1.5 py-3 text-[0.88rem] text-slate-500">
      <li><a href="/" class="font-medium text-brand-700 no-underline hover:underline">Home</a></li>
      <li aria-hidden="true" class="text-slate-400">/</li>
      <li><a href={crumbParent.href} class="font-medium text-brand-700 no-underline hover:underline">{crumbParent.label}</a></li>
      <li aria-hidden="true" class="text-slate-400">/</li>
      <li aria-current="page" class="max-w-[60vw] truncate font-medium text-slate-700">{page.h1}</li>
    </ol>
  </nav>

  <PageHero title={page.h1} intro={page.intro} />

  {#if page.image}
    <div class="mx-auto w-[92%] max-w-[1180px] pt-10">
      <figure class="overflow-hidden rounded-2xl border border-cream-dark shadow-[0_18px_45px_-18px_rgba(10,30,51,0.25)]">
        <img src={page.image.src} alt={page.image.alt} class="aspect-[3/2] w-full object-cover" loading="eager" fetchpriority="high" />
      </figure>
    </div>
  {/if}

  {#each page.sections as s, i}
    <section class={`py-14 md:py-18 ${i % 2 === 1 ? 'bg-cream' : ''}`}>
      <div class="mx-auto w-[92%] max-w-[1180px]">
        <h2 class="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight">{s.heading}</h2>
        <div class="mt-5 max-w-[780px] space-y-4 text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] leading-relaxed text-slate-600">
          {#each s.blocks as b}
            {#if b.type === 'p'}
              <p>{@html withPhone(b.html)}</p>
            {:else if b.type === 'ul'}
              <ul class="list-disc space-y-2.5 pl-6 marker:text-brand-600">
                {#each b.items as it}<li>{@html withPhone(it)}</li>{/each}
              </ul>
            {:else if b.type === 'ol'}
              <ol class="list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-brand-600">
                {#each b.items as it}<li>{@html withPhone(it)}</li>{/each}
              </ol>
            {/if}
          {/each}
        </div>
        {#if hoods && /neighborhood/i.test(s.heading)}
          <NeighborhoodGrid items={hoods} />
        {/if}
      </div>
    </section>
  {/each}

  {#if page.faqs.length}
    <FaqJsonLd faqs={page.faqs} />
    <section class="bg-cream py-14 md:py-18">
      <div class="mx-auto w-[92%] max-w-[860px]">
        <h2 class="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight">{page.faqHeading}</h2>
        <div class="mt-7">
          {#each page.faqs as f, i}
            <div class="mb-3.5 overflow-hidden rounded-xl border border-cream-dark bg-white">
              <button
                class="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-semibold text-slate-800 sm:px-6"
                aria-expanded={openFaq === i}
                onclick={() => (openFaq = openFaq === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span
                  class={`grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-brand-50 text-[1.3rem] leading-none text-brand-600 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >+</span>
              </button>
              <div class={`faq-a ${openFaq === i ? 'open' : ''}`}>
                <div><p class="px-5 pb-6 text-[0.99rem] text-slate-600 sm:px-6">{@html withPhone(f.a)}</p></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <CtaBand heading={page.ctaHeading} text={page.ctaText.split('__PHONE__').join(PHONE_DISPLAY)} />
  {#if page.closing}
    <p class="bg-navy-800 py-5 text-center text-[0.9rem] text-slate-400"><em>{page.closing}</em></p>
  {/if}
</Layout>
