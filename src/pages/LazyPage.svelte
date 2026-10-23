<!-- LazyPage — loads one page module on demand so the first visit
     downloads only the current page's content (code-split). -->
<script>
  import ContentPage from './ContentPage.svelte';
  import ComingSoon from './ComingSoon.svelte';
  import { pageLoaders } from '../content/manifest.js';

  let { pageSlug } = $props();
  const loader = $derived(pageLoaders[pageSlug]);
</script>

{#if loader}
  {#key pageSlug}
    {#await loader() then mod}
      <ContentPage page={mod.page} />
    {:catch}
      <ComingSoon />
    {/await}
  {/key}
{:else}
  <ComingSoon />
{/if}
