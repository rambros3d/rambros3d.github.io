// Theme initialization script - included in <head> to prevent flash of wrong theme
// Reads from localStorage and sets data-theme before body renders
(function() {
  var stored = localStorage.getItem('theme');
  var resolved;
  
  if (stored === 'rambros-dark' || stored === 'rambros-light') {
    resolved = stored;
  } else {
    // Default to 'system' - check OS preference
    resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'rambros-light' : 'rambros-dark';
  }
  
  document.documentElement.setAttribute('data-theme', resolved);
  document.documentElement.classList.add(resolved);
})();
