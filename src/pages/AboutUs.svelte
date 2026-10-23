<script>
  import Layout from '../components/Layout.svelte';
  import PageHero from '../components/PageHero.svelte';
  import CtaBand from '../components/CtaBand.svelte';
  import { SITE_URL } from '../data.js';
</script>

<svelte:head>
  <title>About Us | Septic Tank Pros</title>
  <meta
    name="description"
    content="About Septic Tank Pros: a straightforward local resource for septic tank pumping, inspections, repairs, and installs across Ocala and Marion County, Florida."
  />
  <link rel="canonical" href={SITE_URL + '/about-us'} />
</svelte:head>

<Layout>
  <PageHero
    title="About Us"
    intro="Septic Tank Pros is a straightforward local resource for homeowners across Ocala and Marion County, Florida: clear explanations of septic services, honest cost factors, and help knowing what to ask before you hire."
  />

  <section class="py-14 md:py-18">
    <div class="mx-auto w-[92%] max-w-[1180px]">
      <div class="max-w-[780px] space-y-4 text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] leading-relaxed text-slate-600">
        <h2 class="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight text-slate-800">What this site is</h2>
        <p>
          Most septic websites either say nothing useful or bury you in jargon. This one does neither.
          Every page here explains a real service in plain English: what it is, when you need it,
          what happens during the visit, and what affects the cost. No invented claims, no fake
          reviews, no scare tactics.
        </p>
        <p>
          The local details matter. Marion County's sandy soil, seasonal water table, and permit
          rules shape every septic decision here, so the guides are written for this county,
          not copied from a national template.
        </p>
      </div>
    </div>
  </section>

  <section class="bg-cream py-14 md:py-18">
    <div class="mx-auto w-[92%] max-w-[1180px]">
      <div class="max-w-[780px] space-y-4 text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] leading-relaxed text-slate-600">
        <h2 class="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight text-slate-800">How it works</h2>
        <ol class="list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-brand-600">
          <li><strong class="text-slate-800">Browse or call.</strong> Read the guide for your situation, or skip straight to the phone.</li>
          <li><strong class="text-slate-800">Describe what you are seeing.</strong> Slow drains, odors, soggy ground, an alarm, or just that it has been years.</li>
          <li><strong class="text-slate-800">Get an evaluation.</strong> Findings explained in plain English before any work starts.</li>
          <li><strong class="text-slate-800">Approve with the facts.</strong> Clear scope, clear pricing factors, your decision.</li>
        </ol>
      </div>
    </div>
  </section>

  <section class="py-14 md:py-18">
    <div class="mx-auto w-[92%] max-w-[1180px]">
      <div class="max-w-[780px] space-y-4 text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] leading-relaxed text-slate-600">
        <h2 class="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight text-slate-800">Where we help</h2>
        <p>
          Ocala and the surrounding Marion County communities, including Silver Springs Shores,
          Marion Oaks, Belleview, Dunnellon, and Summerfield. Septic permits across the county
          go through the Marion County Health Department.
        </p>
      </div>
    </div>
  </section>

  <CtaBand
    heading="Questions About Your Septic System?"
    text="Call, describe what you are seeing, and get a straight answer about what comes next."
  />
</Layout>
