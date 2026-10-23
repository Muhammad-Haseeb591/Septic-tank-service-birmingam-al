<script>
  import { PHONE_DISPLAY, PHONE_TEL, services, locations } from '../data.js';

  const year = new Date().getFullYear();
  const mainServices = services.slice(0, 8);
  const mainLocations = locations.slice(1, 9);
  const mainCommunities = locations.slice(12, 20);
</script>

<footer class="bg-navy-950 text-[clamp(0.83rem,0.8vw+0.63rem,0.93rem)] text-slate-400">
  <div class="border-b border-white/10 bg-navy-900">
    <div class="mx-auto flex w-[92%] max-w-[1180px] flex-wrap items-center justify-between gap-6 py-8">
      <div class="flex items-center gap-4">
        <img src="/images/brand/logo.png" alt="Birmingham Septic Pros" class="h-[52px] w-auto rounded-full" />
        <div>
          <p class="font-display text-[1.15rem] font-bold text-white">Birmingham Septic Pros</p>
          <p class="text-[0.88rem] text-slate-400">Septic Tank Service Birmingham, AL</p>
        </div>
      </div>
      <a href={PHONE_TEL} class="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl bg-gold-500 px-7 py-3.5 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-navy-950 no-underline transition-transform hover:-translate-y-0.5">
        Call {PHONE_DISPLAY}
      </a>
    </div>
  </div>

  <div class="mx-auto w-[92%] max-w-[1180px] py-12">
    <div class="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
      <div>
        <p class="mb-3 text-slate-300">Professional septic tank services across Birmingham and Jefferson County, Alabama. Pumping, repairs, installations, drain field work, and 24/7 emergency response.</p>
        <p class="mt-3">For septic tank service Birmingham homeowners trust, call <a href={PHONE_TEL} class="text-gold-400 no-underline hover:text-gold-500">{PHONE_DISPLAY}</a>.</p>
      </div>
      <div>
        <h4 class="mb-3.5 font-display text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] font-bold text-white">Services</h4>
        <ul>
          {#each mainServices as s}
            <li class="mb-2.5"><a href={`/${s.slug}`} class="text-slate-300 no-underline hover:text-gold-400">{s.title}</a></li>
          {/each}
        </ul>
      </div>
      <div>
        <h4 class="mb-3.5 font-display text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] font-bold text-white"><a href="/locations/birmingham-neighborhoods" class="text-white no-underline hover:text-gold-400">Birmingham Areas</a></h4>
        <ul>
          {#each mainLocations as l}
            <li class="mb-2.5"><a href={`/locations/${l.slug}`} class="text-slate-300 no-underline hover:text-gold-400">{l.name}</a></li>
          {/each}
        </ul>
      </div>
      <div>
        <h4 class="mb-3.5 font-display text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] font-bold text-white">Nearby Communities</h4>
        <ul>
          {#each mainCommunities as l}
            <li class="mb-2.5"><a href={`/locations/${l.slug}`} class="text-slate-300 no-underline hover:text-gold-400">{l.name}</a></li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-[0.85rem]">
      <p>© {year} Birmingham Septic Pros. All rights reserved.</p>
      <p><a href="/about" class="text-slate-300 no-underline hover:text-gold-400">About Us</a></p>
    </div>
  </div>
</footer>
