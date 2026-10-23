// Simple inline SVG icon set (stroke style, 24x24).
// Used with {@html} inside components.

const wrap = (inner) =>
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">${inner}</svg>`;

const S = 'stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

export const icons = {
  drop: wrap(`<path d="M12 2C12 2 5.5 10.5 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.5 12 2 12 2z" ${S}/>`),
  search: wrap(`<circle cx="11" cy="11" r="7" ${S}/><path d="M21 21l-4.3-4.3" ${S}/>`),
  wrench: wrap(`<path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z" ${S}/>`),
  waves: wrap(`<path d="M4 18c2-1 4-1 6 0s4 1 6 0 3-1 4 0" ${S}/><path d="M4 13c2-1 4-1 6 0s4 1 6 0 3-1 4 0" ${S}/><path d="M4 8c2-1 4-1 6 0s4 1 6 0 3-1 4 0" ${S}/>`),
  tank: wrap(`<rect x="4" y="10" width="16" height="10" rx="2" ${S}/><path d="M12 10V4M8 4h8" ${S}/>`),
  grid: wrap(`<path d="M4 9h16M4 15h16M10 4v16M14 4v16" ${S}/>`),
  shield: wrap(`<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" ${S}/><path d="M9 12l2 2 4-4" ${S}/>`),
  alert: wrap(`<path d="M12 3l10 18H2L12 3z" ${S}/><path d="M12 10v5" ${S}/><circle cx="12" cy="18" r="1.2" fill="#ea580c"/>`),
  pin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" ${S}/><circle cx="12" cy="10" r="2.5" ${S}/></svg>`,
  doc: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2" ${S}/><path d="M9 9h6M9 13h6M9 17h4" ${S}/></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#15803d"/><path d="M8 12.5l2.7 2.7L16 9.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#fffbeb" stroke="#b45309" stroke-width="2"/><path d="M12 7v5l3 3" stroke="#b45309" stroke-width="2" stroke-linecap="round"/></svg>`,
  warn: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l10 18H2L12 3z" fill="#fef2f2" stroke="#b91c1c" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v5" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="18" r="1.2" fill="#b91c1c"/></svg>`
};
