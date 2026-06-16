const ORDER = ['system', 'dark', 'light'];
const IDS = { system: ['icon-sys', 'icon-sys-m'], dark: ['icon-drk', 'icon-drk-m'], light: ['icon-lgt', 'icon-lgt-m'] };

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
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : id;
  document.documentElement.setAttribute('data-theme', resolved);

  // Toggle html.light / html.dark for blog theme (chiri-based)
  const isDark = resolved === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.classList.toggle('light', !isDark);

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
