<!-- ============================================================
  LAYOUT — the single shell every page on this site uses.
  Header, footer, and the mobile call bar live here, so any new
  page wrapped in <Layout> automatically looks identical to the
  rest of the site. Never copy the header/footer into a page;
  always use this component.
============================================================ -->
<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import MobileCallBar from './MobileCallBar.svelte';
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
<MobileCallBar />
