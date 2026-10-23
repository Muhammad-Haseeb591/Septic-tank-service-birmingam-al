<!-- ============================================================
  PAGE HERO — the standard top band for every inner page
  (service pages, location pages, guides). Same navy band,
  same H1 style, same call button on every page, forever.
  Usage: <PageHero title="..." intro="..." />
============================================================ -->
<script>
  import { PHONE_DISPLAY, PHONE_TEL } from '../data.js';
  import { icons } from '../icons.js';

  let { title, intro = '' } = $props();
</script>

<section class="bg-navy-900 pb-14 pt-32 text-white sm:pt-36">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <h1 class="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight">{title}</h1>
    {#if intro}
      <p class="mt-4 max-w-[640px] text-[clamp(0.96rem,1vw+0.7rem,1.1rem)] leading-relaxed text-slate-300">{intro}</p>
    {/if}
    <!-- REPLACE WITH YOUR TRACKING NUMBER (see src/data.js) -->
    <a
      href={PHONE_TEL}
      class="mt-6 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-7 py-4 font-display font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
    >
      {@html icons.phone}
      Call {PHONE_DISPLAY}
    </a>
  </div>
</section>
