<script>
  import { PHONE_DISPLAY, PHONE_TEL, services, moreServices, locations } from '../data.js';
  import { icons } from '../icons.js';

  let menuOpen = $state(false);
  let mobileSub = $state(null); // 'services' | 'locations' | null

  const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (!menuOpen) mobileSub = null;
  };
  const closeMenu = () => {
    menuOpen = false;
    mobileSub = null;
  };
  const toggleSub = (name) => {
    mobileSub = mobileSub === name ? null : name;
  };

  const chevron = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const linkCls = 'text-[0.94rem] font-medium text-slate-200 no-underline hover:text-white';
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur-md">
  <div class="mx-auto flex w-[92%] max-w-[1180px] items-center gap-7 py-3.5">
    <a href="/" class="flex items-center gap-3 text-white no-underline" aria-label="Birmingham Septic Pros home">
      <img src="/images/brand/logo.png" alt="Birmingham Septic Pros logo" class="h-[46px] w-auto rounded-lg bg-white p-1 shadow-md" />
      <span class="leading-tight">
        <span class="block font-display text-[clamp(0.95rem,1vw+0.7rem,1.08rem)] font-extrabold tracking-tight text-white">Birmingham <span class="text-gold-400">Septic Pros</span></span>
        <span class="block text-[0.72rem] font-medium uppercase tracking-[0.18em] text-slate-300">Septic Tank Service AL</span>
      </span>
    </a>

    <!-- Desktop nav -->
    <nav class="ml-auto hidden items-center gap-7 md:flex" aria-label="Main navigation">
      <a href="/" class={linkCls}>Home</a>

      <!-- Services dropdown (hover, no redirect on the parent) -->
      <div class="group relative">
        <button
          type="button"
          class={`flex items-center gap-1.5 py-2 ${linkCls}`}
          aria-haspopup="true"
        >
          Services
          <span class="transition-transform duration-200 group-hover:rotate-180" aria-hidden="true">{@html chevron}</span>
        </button>
        <div class="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div class="max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-navy-800 py-2 shadow-2xl">
            {#each services as s}
              <a href={`/${s.slug}`} class="block px-5 py-2.5 text-[clamp(0.83rem,0.8vw+0.63rem,0.93rem)] text-slate-200 no-underline transition-colors hover:bg-white/5 hover:text-white">{s.title}</a>
            {/each}
            <div class="mx-5 my-1.5 border-t border-white/10"></div>
            {#each moreServices as s}
              <a href={`/${s.slug}`} class="block px-5 py-2.5 text-[clamp(0.83rem,0.8vw+0.63rem,0.93rem)] text-slate-200 no-underline transition-colors hover:bg-white/5 hover:text-white">{s.title}</a>
            {/each}
          </div>
        </div>
      </div>

      <!-- Locations dropdown (hover, no redirect on the parent) -->
      <div class="group relative">
        <button
          type="button"
          class={`flex items-center gap-1.5 py-2 ${linkCls}`}
          aria-haspopup="true"
        >
          Locations
          <span class="transition-transform duration-200 group-hover:rotate-180" aria-hidden="true">{@html chevron}</span>
        </button>
        <div class="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div class="max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-navy-800 py-2 shadow-2xl">
            {#each locations as l}
              <a href={`/locations/${l.slug}`} class="block px-5 py-2.5 text-[clamp(0.83rem,0.8vw+0.63rem,0.93rem)] text-slate-200 no-underline transition-colors hover:bg-white/5 hover:text-white">{l.name}</a>
            {/each}
          </div>
        </div>
      </div>

      <a href="/about-us" class={linkCls}>About Us</a>
    </nav>

    <button
      class="ml-auto flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 md:hidden"
      aria-label="Open menu"
      aria-expanded={menuOpen}
      onclick={toggleMenu}
    >
      <span class="block h-[3px] w-6 rounded bg-white"></span>
      <span class="block h-[3px] w-6 rounded bg-white"></span>
      <span class="block h-[3px] w-6 rounded bg-white"></span>
    </button>

    <!-- REPLACE WITH YOUR TRACKING NUMBER (see src/data.js) -->
    <a
      href={PHONE_TEL}
      class="hidden min-h-[48px] items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-3 font-display text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] font-bold text-white no-underline shadow-[0_14px_30px_-10px_rgba(249,115,22,0.6)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
    >
      {@html icons.phone}
      {PHONE_DISPLAY}
    </a>
  </div>

  <!-- Mobile nav -->
  {#if menuOpen}
    <nav class="border-t border-white/10 bg-navy-900 px-[4%] py-4 md:hidden" aria-label="Mobile navigation">
      <a href="/" onclick={closeMenu} class="block border-b border-white/10 py-3 text-[1rem] font-medium text-slate-200 no-underline hover:text-white">Home</a>

      <button
        onclick={() => toggleSub('services')}
        aria-expanded={mobileSub === 'services'}
        class="flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-[1rem] font-medium text-slate-200 hover:text-white"
      >
        Services
        <span class={`transition-transform duration-200 ${mobileSub === 'services' ? 'rotate-180' : ''}`} aria-hidden="true">{@html chevron}</span>
      </button>
      {#if mobileSub === 'services'}
        <div class="border-b border-white/10 py-1 pl-4">
          {#each services as s}
            <a href={`/${s.slug}`} onclick={closeMenu} class="block py-2.5 text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] text-slate-300 no-underline hover:text-white">{s.title}</a>
          {/each}
          {#each moreServices as s}
            <a href={`/${s.slug}`} onclick={closeMenu} class="block py-2.5 text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] text-slate-300 no-underline hover:text-white">{s.title}</a>
          {/each}
        </div>
      {/if}

      <button
        onclick={() => toggleSub('locations')}
        aria-expanded={mobileSub === 'locations'}
        class="flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-[1rem] font-medium text-slate-200 hover:text-white"
      >
        Locations
        <span class={`transition-transform duration-200 ${mobileSub === 'locations' ? 'rotate-180' : ''}`} aria-hidden="true">{@html chevron}</span>
      </button>
      {#if mobileSub === 'locations'}
        <div class="border-b border-white/10 py-1 pl-4">
          {#each locations as l}
            <a href={`/locations/${l.slug}`} onclick={closeMenu} class="block py-2.5 text-[clamp(0.85rem,0.8vw+0.65rem,0.95rem)] text-slate-300 no-underline hover:text-white">{l.name}</a>
          {/each}
        </div>
      {/if}

      <a href="/about-us" onclick={closeMenu} class="block border-b border-white/10 py-3 text-[1rem] font-medium text-slate-200 no-underline hover:text-white">About Us</a>

      <a
        href={PHONE_TEL}
        class="mt-3 flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 font-display text-[clamp(0.92rem,1vw+0.68rem,1.05rem)] font-bold text-white no-underline"
      >
        {@html icons.phone}
        Call {PHONE_DISPLAY}
      </a>
    </nav>
  {/if}
</header>
