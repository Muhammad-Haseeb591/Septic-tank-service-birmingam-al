<script>
  import { services } from '../data.js';
</script>

<section class="bg-navy-900 py-16 md:py-24" id="services">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <div class="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div class="max-w-[600px]">
        <span class="mb-3 inline-block rounded-full bg-gold-400/15 px-4 py-1.5 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-gold-400">Our Services</span>
        <h2 class="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold tracking-tight text-white">Complete septic care, from pumping to full replacement.</h2>
      </div>
      <p class="max-w-[380px] text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] text-slate-300">Thirteen specialized services. One call. Every job backed by upfront pricing and Jefferson County permit expertise.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each services as s, i}
        <a
          href={`/${s.slug}`}
          class="group flex items-start gap-5 rounded-2xl bg-navy-800 p-6 no-underline transition-all duration-200 hover:-translate-y-1 hover:bg-navy-700"
        >
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 font-display text-lg font-extrabold text-gold-400">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span class="flex flex-1 flex-col gap-1.5">
            <h3 class="font-display text-[clamp(0.92rem,1vw+0.68rem,1.05rem)] font-bold text-white group-hover:text-gold-400">{s.title}</h3>
            <p class="text-[0.9rem] leading-relaxed text-slate-300">{s.desc}</p>
            <span class="mt-2 inline-flex items-center gap-1.5 text-[0.88rem] font-bold text-gold-400">
              Get service
              <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>
