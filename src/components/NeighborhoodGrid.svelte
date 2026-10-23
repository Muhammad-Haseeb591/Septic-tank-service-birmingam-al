<!-- Neighborhood photo grid — rendered inside location pages right after the
     "Neighborhoods Served" section. Same design language as the rest of the site. -->
<script>
  let { items } = $props();
</script>

<div class="mt-10">
  <h3 class="font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-bold tracking-tight text-slate-800">
    A look around the neighborhoods
  </h3>
  <p class="mt-2 max-w-[640px] text-[0.98rem] text-slate-600">
    Real streets we drive every week. If your block is here, we already know the lots, the soil, and the systems.
  </p>
  <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {#each items as n}
      <figure class="group overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-[0_12px_30px_-14px_rgba(10,30,51,0.25)]">
        <div class="aspect-[4/3] overflow-hidden">
          <img
            src={n.img}
            alt={n.name}
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <figcaption class="px-3.5 py-3 text-[0.92rem] font-semibold text-slate-700">
          {n.name}
        </figcaption>
      </figure>
    {/each}
  </div>
</div>
