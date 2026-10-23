<script>
  import { PHONE_DISPLAY, PHONE_TEL } from '../data.js';
</script>

<div class="bg-red-700 py-6 text-white">
  <div class="mx-auto flex w-[92%] max-w-[1180px] flex-wrap items-center gap-5">
    <div class="min-w-[260px] flex-1">
      <strong class="font-display text-[1.15rem]">Sewage backing up right now?</strong>
      <p class="mt-1 max-w-[640px] text-[0.98rem] text-red-100">
        Stop running water and call now. We will talk you through the next ten minutes and get help moving.
      </p>
    </div>
    <!-- REPLACE WITH YOUR TRACKING NUMBER (see src/data.js) -->
    <a
      href={PHONE_TEL}
      class="inline-flex min-h-[52px] items-center rounded-full bg-white px-7 py-3.5 font-display font-bold text-red-700 no-underline transition-transform hover:-translate-y-0.5 sm:ml-auto"
    >
      Call {PHONE_DISPLAY}
    </a>
  </div>
</div>
