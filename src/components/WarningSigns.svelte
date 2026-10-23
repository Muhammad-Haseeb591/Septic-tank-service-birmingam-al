<script>
  import { warningQuestions } from '../data.js';
</script>

<section class="bg-cream py-16 md:py-21" id="signs">
  <div class="mx-auto w-[92%] max-w-[1180px]">
    <span class="mb-3 inline-block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-600">Know what you are looking at</span>
    <h2 class="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold tracking-tight">Your system is asking for help. Here is how it asks.</h2>
    <p class="mt-3.5 max-w-[720px] text-[clamp(0.98rem,1vw+0.72rem,1.12rem)] text-slate-600">
      Most septic trouble announces itself before it becomes an emergency. Here is how to read the symptoms, and which ones should not wait.
    </p>

    <div class="mt-9 grid gap-5 md:grid-cols-2">
      {#each warningQuestions as s}
        <div class="rounded-2xl border border-cream-dark bg-white p-7">
          <h3 class="mb-2 font-display text-[clamp(0.95rem,1vw+0.7rem,1.08rem)] font-bold">{s.q}</h3>
          <p class="text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] text-slate-600">{s.a}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
