<!-- ============================================================
  CTA BAND — the standard closing call-to-action used at the
  bottom of every page. Same look everywhere, automatically.
  Usage: <CtaBand heading="..." text="..." />
============================================================ -->
<script>
  import { PHONE_DISPLAY, PHONE_TEL } from '../data.js';
  import { icons } from '../icons.js';

  let { heading, text = '' } = $props();
</script>

<section class="bg-gradient-to-br from-navy-900 to-navy-800 py-16 text-center text-white md:py-20">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <h2 class="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold tracking-tight text-white">{heading}</h2>
    {#if text}
      <p class="mx-auto mt-3.5 max-w-[620px] text-[clamp(0.92rem,1vw+0.68rem,1.05rem)] text-slate-300">{text}</p>
    {/if}
    <div class="mt-8">
      <!-- REPLACE WITH YOUR TRACKING NUMBER (see src/data.js) -->
      <a
        href={PHONE_TEL}
        class="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-7 py-4 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-white no-underline shadow-[0_14px_30px_-10px_rgba(249,115,22,0.6)] transition-transform hover:-translate-y-0.5"
      >
        {@html icons.phone}
        Call {PHONE_DISPLAY}
      </a>
    </div>
    <a
      href={PHONE_TEL}
      class="mt-6 inline-block font-display text-[1.4rem] font-extrabold tracking-wide text-white no-underline hover:text-brand-400"
    >
      {PHONE_DISPLAY}
    </a>
  </div>
</section>
