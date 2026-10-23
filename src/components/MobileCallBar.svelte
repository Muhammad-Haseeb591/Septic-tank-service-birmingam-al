<script>
  import { PHONE_DISPLAY, PHONE_TEL } from '../data.js';
  import { icons } from '../icons.js';
</script>

<!-- Sticky mobile call bar: high-intent pattern, phones only -->
<div class="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-900/97 px-[4%] py-3 backdrop-blur-md md:hidden">
  <div class="flex gap-3">
    <!-- REPLACE WITH YOUR TRACKING NUMBER (see src/data.js) -->
    <a
      href={PHONE_TEL}
      class="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 font-display text-[clamp(0.92rem,1vw+0.68rem,1.05rem)] font-bold text-white no-underline"
    >
      {@html icons.phone}
      Call {PHONE_DISPLAY}
    </a>
    <a
      href={PHONE_TEL}
      class="flex min-h-[52px] items-center justify-center rounded-full border border-white/30 px-6 font-display text-[clamp(0.9rem,1vw+0.65rem,1.02rem)] font-bold text-white no-underline"
    >
      Free Quote
    </a>
  </div>
</div>
