<!-- ============================================================
  APP — Svelte 5 native SPA router (no external dependency).
  Routes: / -> Home, /about-us -> AboutUs, /<slug> -> LazyPage,
  anything else -> ComingSoon.
  Same-origin <a> clicks are intercepted for instant client-side
  navigation; external links, tel:, mailto: and #hashes behave natively.
============================================================ -->
<script>
  import { onMount } from 'svelte';
  import Home from './pages/Home.svelte';
  import AboutUs from './pages/AboutUs.svelte';
  import LazyPage from './pages/LazyPage.svelte';
  import ComingSoon from './pages/ComingSoon.svelte';
  import { pageLoaders } from './content/manifest.js';

  const slugs = new Set(Object.keys(pageLoaders));

  const norm = (p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p || '/');

  let path = $state(typeof window !== 'undefined' ? norm(window.location.pathname) : '/');

  onMount(() => {
    const onPopState = () => {
      path = norm(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);

    // Turn same-origin link clicks into SPA navigations.
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const t = e.target;
      const a = t instanceof Element ? t.closest('a') : null;
      if (!a) return;
      if (a.target && a.target !== '_self') return;
      const href = a.getAttribute('href');
      if (!href || /^(tel:|mailto:|#)/i.test(href)) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      e.preventDefault();
      const next = norm(url.pathname);
      if (next !== path) {
        window.history.pushState({}, '', next + url.search + url.hash);
        path = next;
      } else {
        window.history.replaceState({}, '', next + url.search + url.hash);
      }
      window.scrollTo(0, 0);
    };
    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onClick);
    };
  });

  // NOTE: pageLoaders keys include the leading slash (e.g. "/septic-tank-repair-ocala"),
  // so `path` is used as-is for lookup.
  const route = $derived.by(() => {
    if (path === '/') return { view: 'home', slug: '' };
    if (path === '/about-us') return { view: 'about', slug: '' };
    if (slugs.has(path)) return { view: 'page', slug: path };
    return { view: 'soon', slug: '' };
  });
</script>

{#if route.view === 'home'}
  <Home />
{:else if route.view === 'about'}
  <AboutUs />
{:else if route.view === 'page'}
  {#key route.slug}
    <LazyPage pageSlug={route.slug} />
  {/key}
{:else}
  <ComingSoon />
{/if}
