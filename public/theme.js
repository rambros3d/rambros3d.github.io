const ORDER = ['system', 'rambros-dark', 'rambros-light'];
const IDS = { system: ['icon-sys', 'icon-sys-m'], 'rambros-dark': ['icon-drk', 'icon-drk-m'], 'rambros-light': ['icon-lgt', 'icon-lgt-m'] };

function show(id) {
  Object.values(IDS).forEach(pairs => pairs.forEach(elId => {
    const el = document.getElementById(elId);
    if (el) el.classList.add('hidden');
  }));
  IDS[id].forEach(elId => {
    const el = document.getElementById(elId);
    if (el) el.classList.remove('hidden');
  });
}

function apply(id) {
  const resolved = id === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'rambros-dark' : 'rambros-light')
    : id;
  document.documentElement.setAttribute('data-theme', resolved);

  const isDark = resolved === 'rambros-dark';
  document.documentElement.classList.toggle('rambros-dark', isDark);
  document.documentElement.classList.toggle('rambros-light', !isDark);

  localStorage.setItem('theme', id);
  show(id);
}

function nextTheme() {
  const current = localStorage.getItem('theme') || 'system';
  return ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
}

document.getElementById('theme-toggle')?.addEventListener('click', () => apply(nextTheme()));
document.getElementById('theme-toggle-m')?.addEventListener('click', () => apply(nextTheme()));

apply(localStorage.getItem('theme') || 'system');
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if ((localStorage.getItem('theme') || 'system') === 'system') apply('system');
});

// Intercept Starlight's theme writes so they don't clobber our custom theme names.
const THEME_MAP = { dark: 'rambros-dark', light: 'rambros-light' };
if (!window.__rambrosThemeInterceptorInstalled) {
  window.__rambrosThemeInterceptorInstalled = true;
  const applyMapped = (mapped) => {
    if (mapped === 'rambros-dark' || mapped === 'rambros-light') {
      apply(mapped);
    }
  };
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === 'data-theme') {
        const raw = document.documentElement.getAttribute('data-theme');
        if (raw && THEME_MAP[raw]) {
          applyMapped(THEME_MAP[raw]);
        }
      }
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}
