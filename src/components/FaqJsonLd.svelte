<!-- Renders FAQPage JSON-LD for the given faqs [{q, a}].
     Answers may contain HTML and __PHONE__ tokens; both are cleaned for schema. -->
<script>
  import { PHONE_DISPLAY } from '../data.js';

  let { faqs } = $props();

  const clean = (html) =>
    html.split('__PHONE__').join(PHONE_DISPLAY).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: clean(f.a) }
    }))
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>
