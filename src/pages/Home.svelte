<!-- Homepage, assembled from the shared building blocks.
     Service/location pages render through ContentPage.svelte
     from the MD files in content/. -->
<script>
  import Layout from '../components/Layout.svelte';
  import Hero from '../components/Hero.svelte';
  import Emergency from '../components/Emergency.svelte';
  import WarningSigns from '../components/WarningSigns.svelte';
  import Services from '../components/Services.svelte';
  import Eeat from '../components/Eeat.svelte';
  import Process from '../components/Process.svelte';
  import Diagram from '../components/Diagram.svelte';
  import Local from '../components/Local.svelte';
  import Costs from '../components/Costs.svelte';
  import Faq from '../components/Faq.svelte';
  import FinalCta from '../components/FinalCta.svelte';
  import FaqJsonLd from '../components/FaqJsonLd.svelte';
  import { faqs, SITE_URL } from '../data.js';
</script>

<svelte:head>
  <link rel="canonical" href={SITE_URL + '/'} />
</svelte:head>

<FaqJsonLd faqs={faqs} />

<Layout>
  <Hero />
  <Emergency />
  <WarningSigns />
  <Services />
  <Eeat />
  <Process />
  <Diagram />
  <Local />
  <Costs />
  <Faq />
  <FinalCta />
</Layout>
