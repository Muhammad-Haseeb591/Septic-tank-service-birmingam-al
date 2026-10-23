<!-- Fallback page: shown only if a URL has no matching page yet.
     Once all planned pages are built, visitors should never see this. -->
<script>
  import Layout from '../components/Layout.svelte';
  import PageHero from '../components/PageHero.svelte';
  import CtaBand from '../components/CtaBand.svelte';
</script>

<svelte:head>
  <title>Coming Soon | Septic Tank Pros</title>
  <meta name="description" content="This page is being built and will be live shortly." />
</svelte:head>

<Layout>
  <PageHero
    title="Coming Soon"
    intro="This page is being built and will be live shortly. If you need help right now, skip the wait and call."
  />
  <CtaBand
    heading="Need Help Right Now?"
    text="Call, describe what you are seeing, and get a straight answer about what comes next."
  />
</Layout>
