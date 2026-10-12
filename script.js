const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    toggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.textContent = '☰';
    });
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Project screenshot sliders: one image at a time with previous/next controls.
document.querySelectorAll('[data-slider]').forEach(slider => {
  const figures = Array.from(slider.querySelectorAll('.project-gallery figure'));
  const count = slider.querySelector('.slider-count');
  if (!figures.length) return;
  let active = 0;
  function show(index) {
    active = (index + figures.length) % figures.length;
    figures.forEach((figure, i) => {
      figure.classList.toggle('is-active', i === active);
      figure.setAttribute('aria-hidden', String(i !== active));
    });
    if (count) count.textContent = `${active + 1} / ${figures.length}`;
  }
  slider.querySelectorAll('.slider-btn').forEach(button => {
    button.addEventListener('click', () => show(active + (button.dataset.direction === 'next' ? 1 : -1)));
  });
  show(0);
});
