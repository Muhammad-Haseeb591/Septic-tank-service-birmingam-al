<script>
  import { PHONE_DISPLAY, PHONE_TEL } from '../data.js';
  import { icons } from '../icons.js';
</script>

<section class="bg-gradient-to-br from-navy-900 to-navy-800 py-16 text-center text-white md:py-21">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <h2 class="font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold tracking-tight text-white">Call for Septic Tank Service Ocala</h2>
    <p class="mx-auto mt-3.5 max-w-[620px] text-[clamp(0.96rem,1vw+0.7rem,1.1rem)] text-slate-300">
      One call handles it: pumping, repairs, installs, emergencies, and straight answers about all of them. Call today.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-3.5">
      <!-- REPLACE WITH YOUR TRACKING NUMBER (see src/data.js) -->
      <a
        href={PHONE_TEL}
        class="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-7 py-4 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-white no-underline shadow-[0_14px_30px_-10px_rgba(249,115,22,0.6)] transition-transform hover:-translate-y-0.5"
      >
        {@html icons.phone}
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={PHONE_TEL}
        class="inline-flex min-h-[52px] items-center rounded-full border border-white/40 bg-white/10 px-7 py-4 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
      >
        Get Free Quote
      </a>
    </div>
    <a
      href={PHONE_TEL}
      class="mt-7 inline-block font-display text-[1.5rem] font-extrabold tracking-wide text-white no-underline hover:text-brand-400 sm:text-[1.6rem]"
    >
      {PHONE_DISPLAY}
    </a>
    <p class="mx-auto mt-5 max-w-[620px] text-[0.97rem] italic text-slate-400">
      Ocala owned and operated. Honest diagnosis, upfront pricing, work we stand behind.
    </p>
  </div>
</section>
