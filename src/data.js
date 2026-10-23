// ============================================================
// SITE CONTENT: single source of truth for phone, services, FAQs.
// REPLACE WITH YOUR TRACKING NUMBER before publishing.
// ============================================================

export const PHONE_DISPLAY = '(352) 555-0100';
export const SITE_URL = 'https://example.com'; // TODO: replace with your real domain before publishing

export const PHONE_TEL = 'tel:+13525550100';

export const services = [
  {
    slug: 'septic-tank-repair-birmingham',
    image: '/images/cards/septic-system-repair.webp',
    title: 'Septic Tank Repair',
    desc: 'Honest diagnosis first. Baffles, filters, lines, lids, and components fixed without selling you a new system.',
    icon: 'wrench'
  },
  {
    slug: 'septic-tank-installation-birmingham',
    image: '/images/cards/septic-tank-installation.webp',
    title: 'Septic Tank Installation',
    desc: 'New systems designed for your lot, permitted through the Jefferson County Department of Health, built to last.',
    icon: 'tank'
  },
  {
    slug: 'septic-tank-replacement-birmingham',
    image: '/images/cards/septic-tank-replacement.webp',
    title: 'Septic Tank Replacement',
    desc: 'When repair stops making sense. Full replacement with proper abandonment of the old system.',
    icon: 'grid'
  },
  {
    slug: 'septic-risers-lids-birmingham',
    image: '/images/services/risers-lids-locating.webp',
    title: 'Septic Risers and Lids',
    desc: 'Bring buried lids to the surface. Every future pump-out gets faster and cheaper.',
    icon: 'grid'
  },
  {
    slug: 'septic-tank-locating-birmingham',
    image: '/images/headers/septic-tank-locating.webp',
    title: 'Septic Tank Locating',
    desc: 'Do not know where your tank is? We find it with probes and electronic locating, no random digging.',
    icon: 'pin'
  },
  {
    slug: 'septic-pump-alarm-birmingham',
    image: '/images/services/pumps-and-alarms.webp',
    title: 'Septic Pump and Alarm',
    desc: 'Alarm sounding? Pumps, floats, and control panels diagnosed and fixed, usually same visit.',
    icon: 'alert'
  },
  {
    slug: 'emergency-septic-service-birmingham',
    image: '/images/cards/emergency-septic-service.webp',
    title: 'Emergency Septic Service',
    desc: 'Backups and overflows handled fast, with straight answers about after-hours rates.',
    icon: 'alert'
  },
  {
    slug: 'septic-tank-abandonment-birmingham',
    image: '/images/services/abandonment-and-removal.webp',
    title: 'Septic Tank Abandonment / Removal',
    desc: 'Old tanks pumped, crushed or removed, and documented by the book.',
    icon: 'shield'
  },
  {
    slug: 'holding-tank-service-birmingham',
    image: '/images/services/holding-tank-service.webp',
    title: 'Holding Tank Service',
    desc: 'Scheduled pumping for holding tanks with no drain field. A service almost nobody else here advertises.',
    icon: 'drop'
  }
];

export const moreServices = [
  {
    slug: 'septic-tank-pumping-birmingham',
    image: '/images/cards/septic-tank-pumping.webp',
    title: 'Septic Tank Pumping & Cleaning',
    desc: 'Removes the sludge and scum layers before they reach your drain field. The single most important maintenance your system gets.',
    icon: 'drop'
  },
  {
    slug: 'septic-tank-inspection-birmingham',
    image: '/images/cards/septic-tank-inspection.webp',
    title: 'Septic Inspections',
    desc: 'Tank condition, baffles, sludge levels, and drain field health, documented clearly. Essential before buying a home with a septic system.',
    icon: 'search'
  },
  {
    slug: 'drain-field-services-birmingham',
    image: '/images/cards/drain-field-services.webp',
    title: 'Drain Field / Leach Field',
    desc: 'Diagnosis of soggy or failing fields, resting and rejuvenation options where appropriate, and full replacement when the soil is done.',
    icon: 'waves'
  },
  {
    slug: 'septic-system-maintenance-birmingham',
    image: '/images/cards/septic-system-maintenance.webp',
    title: 'Maintenance Plans',
    desc: 'Scheduled pump-outs, filter cleanings, and checkups so small issues get caught years before they become drain field replacements.',
    icon: 'shield'
  }
];

export const warningQuestions = [
  { q: 'Why are all my drains slow at once?', a: 'When every drain in the house slows together, the problem is past any single pipe. It is the tank, the outlet, or the drain field. One slow sink is plumbing. The whole house slowing down is septic.' },
  { q: 'Why are my drains gurgling?', a: 'Gurgling means air is trapped where water should flow freely. It is often the first sound a struggling system makes, weeks before a backup.' },
  { q: 'Why does my yard smell like sewage?', a: 'Odor near the tank or over the drain field means wastewater is surfacing or venting wrong. After a pump-out it should clear; if it does not, the cause is deeper.' },
  { q: 'Why is the grass greener over my septic system?', a: 'A suspiciously lush stripe over the drain field is the field leaking nutrients upward. It looks healthy. It is not.' },
  { q: 'Standing water or an alarm going off?', a: 'Do not wait on either one. Cut water use and call. These are the two symptoms where hours matter.' }
];

export const routineSigns = [
  { t: 'Slow drains or gurgling plumbing.', d: 'One slow drain is usually a clog. Several slow drains across the house can point to the tank or the line leaving it.' },
  { t: 'Occasional odors near the tank or drain field.', d: 'A faint smell after heavy rain can be the water table pressing up. A steady smell deserves a look.' },
  { t: 'Patchy, extra-green grass over the drain field.', d: 'Grass loves nitrogen. A stripe of lush grass where the field runs can mean effluent is surfacing.' },
  { t: 'It has been 3 to 5 years since the last pump-out.', d: 'The EPA recommends pumping on that cycle for a typical household. Waiting much longer lets solids creep toward the drain field.' }
];

export const urgentSigns = [
  { t: 'Sewage backing up into tubs, showers, or floor drains.', d: 'The lowest drain floods first. Stop using water and call.' },
  { t: 'Standing wastewater or soggy ground over the system.', d: 'Surfacing effluent is a health hazard. Keep people and pets away from it.' },
  { t: 'Strong sewage smell inside the house.', d: 'This can indicate a backup in progress or a venting problem. Do not ignore it.' },
  { t: 'A septic alarm sounding.', d: 'On systems with a pump, the alarm means the tank level is high. Silence it if you can, cut water use, and call.' }
];

export const steps = [
  { t: 'Call and describe what is happening', d: 'Slow drains, odors, an alarm, a backup. We will tell you on the phone whether it sounds urgent.' },
  { t: 'We diagnose before we quote', d: 'Tank opened, levels read, components checked. You get the actual problem, not a guess.' },
  { t: 'Upfront price, in writing', d: 'You approve the number before any work starts. No surprises after.' },
  { t: 'The fix, done clean', d: 'Repairs, pumping, installs, all of it. We clean up like we were never there, minus the problem.' },
  { t: 'Records for your files', d: 'What was found, what was done, when to schedule next. Paperwork you can hand a future buyer.' }
];

export const diagramPoints = [
  { t: 'Wastewater leaves the house', d: 'through one main line into the septic tank.' },
  { t: 'The tank separates.', d: 'Heavy solids sink as sludge, oils float as scum, and the clearer liquid in the middle flows on. Baffles at the inlet and outlet keep the layers where they belong.' },
  { t: 'An effluent filter', d: 'at the outlet catches what the baffles miss, protecting the drain field. It needs periodic cleaning.' },
  { t: 'The distribution box', d: 'splits the liquid evenly across the drain field lines.' },
  { t: 'The drain field', d: 'lets the liquid seep into the soil, where soil bacteria finish treating it. This is the part that fails when it gets overloaded with solids, which is why pumping on schedule matters.' }
];

export const groundFacts = [
  { t: 'Much of Jefferson County sits on porous limestone', d: 'with sandy soil above it. Water moves through fast, which is good for drainage and bad for filtering.' },
  { t: 'The water table climbs from June through October.', d: 'When it rises into the drain field, the soil has less room to treat wastewater, and soggy yards and slow drains follow.' },
  { t: 'Storms matter.', d: 'After major flooding, the City of Ocala advises waiting until floodwater recedes and having the system inspected before normal use resumes.' },
  { t: 'Horse properties are their own case.', d: 'Around the Horse Capital, a farm can run several systems: house, barn, and living quarters. Wash-rack water usually should not go into a septic system at all.' }
];

export const permitFacts = [
  { t: 'Permits go through the Jefferson County Department of Health.', d: 'That is the office that handles septic permitting and inspections locally.' },
  { t: 'Statewide rules are enforced by FDEP', d: '(Florida Department of Environmental Protection), which took over enforcement on July 1, 2021.' },
  { t: 'There is no mandatory pump-out law in Florida.', d: 'Nobody can fine you for skipping a pump-out, but the repair bill for a ruined drain field is the real enforcement.' },
  { t: 'New and replacement systems near springs face stricter standards.', d: 'Properties in the Silver Springs basin may need enhanced nitrogen-reducing systems. Check with the Health Department before planning a replacement.' }
];

export const costFactors = [
  { t: 'Tank size and access', d: 'A 1,000-gallon tank with risers at the surface is a quick job. A buried lid that has to be located and dug up adds time and cost.' },
  { t: 'What is in the tank', d: 'Normal sludge is routine. Years of neglect, grease, or non-septic waste can mean extra volume and extra disposal fees.' },
  { t: 'System condition', d: 'Pumping a healthy tank is the cheapest visit you will ever have. Cracked baffles, broken lids, or a struggling field change the math.' },
  { t: 'Excavation and repairs', d: 'Anything below ground that needs digging, from a crushed line to a full drain field replacement, is priced by scope, not by the visit.' },
  { t: 'Permits and fees', d: 'Repairs and replacements need permits through the county, and disposal facilities charge their own fees. Both get passed through.' },
  { t: 'Urgency', d: 'A scheduled pump-out costs less than a Sunday-night backup call. Maintenance is always the cheaper path.' }
];

export const costRanges = [
  { label: 'Septic tank pump-out', range: '$250 to $500' },
  { label: 'Septic inspection', range: '$100 to $300' },
  { label: 'Drain field repair', range: '$500 to $4,000' },
  { label: 'Conventional new system', range: '$3,000 to $10,000' },
  { label: 'Mound / raised system', range: '$8,000 to $18,000' },
  { label: 'Full system replacement', range: '$15,000 to $30,000+' }
];

export const askQuestions = [
  'What exactly did you find, and can you show me?',
  'Is this a repair that will hold, or am I buying time?',
  'What is included in the price, and what would cost extra?',
  'Do I need a permit for this, and who pulls it?',
  'Is any part of this work covered by a written warranty? Ask for the terms in writing.',
  'When should this system be serviced next?'
];

export const locations = [
  { name: 'Birmingham Neighborhoods', slug: 'birmingham-neighborhoods' },
  { name: 'Downtown Birmingham', slug: 'septic-tank-service-downtown-birmingham-al' },
  { name: 'East Thomas', slug: 'septic-tank-service-east-thomas-birmingham-al' },
  { name: 'Five Points South', slug: 'septic-tank-service-five-points-south-birmingham-al' },
  { name: 'East Lake', slug: 'septic-tank-service-east-lake-birmingham-al' },
  { name: 'Ensley', slug: 'septic-tank-service-ensley-birmingham-al' },
  { name: 'Woodlawn', slug: 'septic-tank-service-woodlawn-birmingham-al' },
  { name: 'Crestline', slug: 'septic-tank-service-crestline-birmingham-al' },
  { name: 'Forestdale', slug: 'septic-tank-service-forestdale-birmingham-al' },
  { name: 'Huffman', slug: 'septic-tank-service-huffman-birmingham-al' },
  { name: 'Sand Ridge', slug: 'septic-tank-service-sand-ridge-birmingham-al' },
  { name: 'Jefferson Park', slug: 'septic-tank-service-jefferson-park-birmingham-al' },
  { name: 'Wenonah', slug: 'septic-tank-service-wenonah-birmingham-al' },
  { name: 'Bluff Park', slug: 'septic-tank-service-bluff-park-birmingham-al' },
  { name: 'Homewood', slug: 'septic-tank-service-homewood-al' },
  { name: 'Vestavia Hills', slug: 'septic-tank-service-vestavia-hills-al' },
  { name: 'Mountain Brook', slug: 'septic-tank-service-mountain-brook-al' },
  { name: 'Hoover', slug: 'septic-tank-service-hoover-al' },
  { name: 'Trussville', slug: 'septic-tank-service-trussville-al' },
  { name: 'Irondale', slug: 'septic-tank-service-irondale-al' },
  { name: 'Center Point', slug: 'septic-tank-service-center-point-al' },
  { name: 'Fultondale', slug: 'septic-tank-service-fultondale-al' },
  { name: 'Tarrant', slug: 'septic-tank-service-tarrant-al' },
  { name: 'Midfield', slug: 'septic-tank-service-midfield-al' },
  { name: 'Grayson Valley', slug: 'septic-tank-service-grayson-valley-al' },
  { name: 'Cahaba Heights', slug: 'septic-tank-service-cahaba-heights-al' },
  { name: 'Meadowbrook', slug: 'septic-tank-service-meadowbrook-al' },
  { name: 'Shoal Creek', slug: 'septic-tank-service-shoal-creek-al' },
  { name: 'Riverchase', slug: 'septic-tank-service-riverchase-al' }
];

export const faqs = [
  { q: 'How much does a septic pump-out cost?', a: 'In Florida, $275 to $450 for a standard 1,000-gallon tank covers most jobs in 2026. Access, tank size, and how full it is move the number. Always ask what the price includes: full pump-out, lid locating and digging, filter cleaning, and disposal.' },
  { q: 'How often should I pump my septic tank in Florida?', a: 'Every 3 to 5 years for a typical household, per U.S. EPA guidance. Pump sooner with a garbage disposal, a large household, or a small tank. Florida does not mandate it by law, so the schedule is on you.' },
  { q: 'Why are all my drains slow at once?', a: 'That pattern points past individual pipes to the tank, outlet, or drain field. It is the most common reason people call us, and it deserves a diagnosis, not a drain cleaner.' },
  { q: 'Do I really need a full drain-field replacement, or could it be the filter?', a: 'Sometimes it really is just the filter. A clogged effluent filter mimics a dead drain field perfectly. Any company that quotes replacement without checking the filter first has not finished diagnosing.' },
  { q: 'Should I use Rid-X or other additives?', a: 'No product removes settled sludge; only the truck does that. Additives do not replace pumping, and one homeowner\u2019s whole-box-of-tablets experiment ended with crud pushed up into the cleanout. Save the money for the pump-out.' },
  { q: 'Why is my septic alarm going off?', a: 'The water level in the pump tank is too high. Check the breaker, cut water use to a minimum, and call. Common causes are a stuck float, a worn-out pump, or heavy rain overwhelming the system.' },
  { q: 'Can I install a riser so nobody has to dig again?', a: 'Yes, and it is one of the smartest upgrades you can buy. Risers bring the lids to the surface, so every future pump-out and inspection takes minutes instead of an hour of digging.' },
  { q: 'Is septic repair covered by homeowners insurance?', a: 'Usually not for wear, neglect, or age. Sudden damage from a covered event is different. Check your policy before assuming either way.' },
  { q: 'Is a septic tank a deal killer when buying a house?', a: 'Not if it is inspected. Get the tank pumped and inspected before closing, read the sludge levels and component condition, and factor any needed work into the offer. An unknown system is the risk, not the system itself.' },
  { q: 'How do I find my septic tank if I do not know where it is?', a: 'Start with county records, then a probe rod, then electronic locating equipment that traces the line from the house. We do all three, and we mark and photograph the lids for your records.' },
  { q: 'Is there really a county subsidy for septic upgrades?', a: 'Some Florida counties run cost-share programs for upgrades, with amounts varying by county and year. Ask us what is currently available for Jefferson County before assuming anything.' },
  { q: 'What should a quote include?', a: 'Diagnosis in writing, line-item pricing (not one lump sum), permit handling, and what happens to the old components. If a quote skips any of that, get a second one.' }
];
