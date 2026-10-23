<script>
  import { steps } from '../data.js';
</script>

<section class="bg-navy-900 py-16 text-white md:py-21" id="process">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <span class="mb-3 inline-block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-400">How it works</span>
    <h2 class="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold tracking-tight">What a Septic Tank Service Visit Looks Like</h2>
    <p class="mt-3.5 max-w-[720px] text-[clamp(0.98rem,1vw+0.72rem,1.12rem)] text-slate-300">
      No surprises. This is the general flow of a standard service visit, so you know what to expect before anyone pulls into your driveway.
    </p>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {#each steps as s}
        <div class="rounded-2xl border border-white/10 bg-white/5 p-7">
          <span class="step-num mb-3 block" aria-hidden="true">{steps.indexOf(s) + 1}</span>
          <h3 class="mb-2 font-display text-[clamp(0.96rem,1vw+0.7rem,1.1rem)] font-bold text-white">{s.t}</h3>
          <p class="text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] text-slate-300">{s.d}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
