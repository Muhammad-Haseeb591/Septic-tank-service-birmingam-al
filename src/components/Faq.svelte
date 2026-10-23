<script>
  import { faqs } from '../data.js';

  let openIndex = $state(-1);
  const toggle = (i) => (openIndex = openIndex === i ? -1 : i);
</script>

<section class="bg-cream py-16 md:py-21" id="faq">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <span class="mb-3 inline-block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-600">Straight answers</span>
    <h2 class="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold tracking-tight">Septic Questions Ocala Homeowners Ask Most</h2>
    <p class="mt-3.5 max-w-[720px] text-[clamp(0.98rem,1vw+0.72rem,1.12rem)] text-slate-600">
      The questions below come from real homeowner searches. Short answers, no filler.
    </p>

    <div class="mt-9 max-w-[860px]">
      {#each faqs as f, i}
        <div class="mb-3.5 overflow-hidden rounded-xl border border-cream-dark bg-white">
          <button
            class="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-semibold text-slate-800 sm:px-6"
            aria-expanded={openIndex === i}
            onclick={() => toggle(i)}
          >
            <span>{f.q}</span>
            <span
              class="grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-brand-50 text-[1.3rem] leading-none text-brand-600 transition-transform duration-200 {openIndex === i ? 'rotate-45' : ''}"
              aria-hidden="true"
            >+</span>
          </button>
          <div class="faq-a {openIndex === i ? 'open' : ''}">
            <div>
              <p class="px-5 pb-6 text-[0.99rem] text-slate-600 sm:px-6">{f.a}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
