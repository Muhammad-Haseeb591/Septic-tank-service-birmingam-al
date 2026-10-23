<script>
  import { diagramPoints } from '../data.js';
</script>

<section class="py-12 md:py-21">
  <div class="mx-auto grid w-[92%] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
    <div>
      <span class="mb-3 inline-block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-600">Sixty-second education</span>
      <h2 class="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold tracking-tight">How Your Septic System Actually Works</h2>
      <p class="mt-3.5 max-w-[720px] text-[clamp(0.98rem,1vw+0.72rem,1.12rem)] text-slate-600">
        Understanding the parts makes every decision easier, from pumping schedules to repair quotes.
      </p>
      <ul class="mt-6">
        {#each diagramPoints as p}
          <li class="border-t border-cream-dark py-3.5 text-[0.98rem] text-slate-600 first:border-t-0">
            <strong class="font-display font-semibold text-slate-800">{p.t}</strong> {p.d}
          </li>
        {/each}
      </ul>
    </div>

    <figure class="rounded-2xl border border-cream-dark bg-cream p-5 sm:p-6">
      <svg viewBox="0 0 520 340" role="img" aria-label="Diagram of a septic system: house, septic tank, distribution box, and drain field" class="w-full">
        <rect x="20" y="40" width="120" height="90" rx="8" fill="#dbe7f3" stroke="#0a1e33" stroke-width="2"/>
        <path d="M20 62 L80 22 L140 62" fill="none" stroke="#0a1e33" stroke-width="2"/>
        <text x="80" y="105" text-anchor="middle" font-size="15" font-weight="600" fill="#0a1e33">House</text>
        <line x1="140" y1="95" x2="185" y2="95" stroke="#0a1e33" stroke-width="4"/>
        <rect x="185" y="70" width="130" height="80" rx="10" fill="#cfe3d4" stroke="#0a1e33" stroke-width="2"/>
        <line x1="205" y1="70" x2="205" y2="150" stroke="#0a1e33" stroke-width="3"/>
        <line x1="295" y1="70" x2="295" y2="150" stroke="#0a1e33" stroke-width="3"/>
        <text x="250" y="115" text-anchor="middle" font-size="15" font-weight="600" fill="#0a1e33">Septic tank</text>
        <text x="250" y="138" text-anchor="middle" font-size="12" fill="#475569">baffles + filter</text>
        <line x1="315" y1="110" x2="350" y2="110" stroke="#0a1e33" stroke-width="4"/>
        <rect x="350" y="92" width="46" height="36" rx="6" fill="#fde9d3" stroke="#0a1e33" stroke-width="2"/>
        <text x="373" y="115" text-anchor="middle" font-size="11" font-weight="600" fill="#0a1e33">D-box</text>
        <g stroke="#0a1e33" stroke-width="4" stroke-linecap="round">
          <line x1="396" y1="100" x2="500" y2="100"/>
          <line x1="396" y1="120" x2="500" y2="120"/>
          <line x1="396" y1="140" x2="500" y2="140"/>
        </g>
        <text x="448" y="170" text-anchor="middle" font-size="15" font-weight="600" fill="#0a1e33">Drain field</text>
        <g fill="#7fb069" opacity="0.55">
          <ellipse cx="420" cy="200" rx="10" ry="22"/><ellipse cx="448" cy="200" rx="10" ry="22"/><ellipse cx="476" cy="200" rx="10" ry="22"/>
        </g>
        <text x="448" y="245" text-anchor="middle" font-size="12" fill="#475569">soil bacteria finish treatment here</text>
        <line x1="80" y1="270" x2="440" y2="270" stroke="#b45309" stroke-width="2" stroke-dasharray="6 5"/>
        <text x="260" y="295" text-anchor="middle" font-size="12" fill="#b45309">sandy soil, high water table in wet season</text>
        <text x="260" y="320" text-anchor="middle" font-size="12" fill="#475569">Marion County: limestone below, sand above</text>
      </svg>
      <figcaption class="mt-3 text-center text-[0.85rem] text-slate-500">Simplified layout. Real systems vary by age, size, and site.</figcaption>
    </figure>
  </div>
</section>
