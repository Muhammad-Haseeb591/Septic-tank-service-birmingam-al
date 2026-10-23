<script>
  import { PHONE_DISPLAY, PHONE_TEL } from '../data.js';
  import { icons } from '../icons.js';
</script>

<svelte:head>
  <link
    rel="preload"
    as="image"
    href="/hero.webp"
    imagesrcset="/hero-mobile.webp 800w, /hero.webp 1200w"
    imagesizes="50vw"
    fetchpriority="high"
  />
</svelte:head>

<section class="relative overflow-hidden bg-cream pb-16 pt-28 sm:pt-32 md:pb-20 md:pt-36" id="top">
  <div class="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-100 blur-3xl" aria-hidden="true"></div>
  <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold-400/20 blur-3xl" aria-hidden="true"></div>

  <div class="relative mx-auto w-[92%] max-w-[1180px]">
    <div class="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div>
        <div class="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-1.5 text-[0.85rem] font-semibold text-brand-700">
          {@html icons.check}
          Jefferson County's Trusted Septic Experts
        </div>
        <h1 class="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.12] tracking-tight text-navy-900">
          Septic Tank Service Birmingham
        </h1>
        <p class="mt-5 max-w-[520px] text-[clamp(0.95rem,1vw+0.7rem,1.08rem)] leading-relaxed text-slate-600">
          Septic tank service Birmingham homeowners call when they want it done right the first time: pumping, repairs, new installations, drain field work, and emergency help across Jefferson County.
        </p>

        <div class="mb-8 mt-7 flex flex-wrap gap-3.5">
          <a
            href={PHONE_TEL}
            class="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-white no-underline shadow-[0_12px_28px_-8px_rgba(26,122,74,0.5)] transition-transform hover:-translate-y-0.5"
          >
            {@html icons.phone}
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_TEL}
            class="inline-flex min-h-[52px] items-center rounded-xl border-2 border-navy-900 px-7 py-4 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-navy-900 no-underline transition-colors hover:bg-navy-900 hover:text-white"
          >
            Get Free Quote
          </a>
        </div>

        <div class="flex flex-wrap gap-x-8 gap-y-3 text-[0.92rem] text-slate-600">
          <span class="inline-flex items-center gap-2">{@html icons.star} 4.9 Rated Service</span>
          <span class="inline-flex items-center gap-2">{@html icons.clock} Same-Day Available</span>
          <span class="inline-flex items-center gap-2">{@html icons.shield} Upfront Pricing</span>
        </div>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/hero.webp"
            srcset="/hero-mobile.webp 800w, /hero.webp 1200w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Septic tank service technician at work in Birmingham AL"
            width="1200"
            height="800"
            class="aspect-[4/3] w-full object-cover"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div class="absolute -bottom-6 -left-4 rounded-2xl bg-navy-900 px-6 py-4 text-white shadow-xl sm:-left-6">
          <div class="font-display text-2xl font-extrabold text-gold-400">$250+</div>
          <div class="text-[0.85rem] text-slate-300">Pump-outs starting at</div>
        </div>
      </div>
    </div>

    <p class="mt-10 max-w-[700px] text-[0.94rem] italic text-slate-500">
      Serving Birmingham, Homewood, Vestavia Hills, Hoover, Mountain Brook, and all of Jefferson County.
    </p>
  </div>
</section>
