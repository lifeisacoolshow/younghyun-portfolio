(() => {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cursor = document.createElement('span');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.append(cursor);

  let visible = false;
  window.addEventListener('pointermove', (event) => {
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    if (!visible) {
      cursor.classList.add('is-visible');
      visible = true;
    }
    const isInteractive = Boolean(event.target.closest('a, button, [role="button"], input, select, textarea, label'));
    cursor.classList.toggle('is-active', isInteractive);
    cursor.classList.toggle('is-arrow', isInteractive && !event.target.closest('.name-trigger'));
    cursor.classList.toggle('is-light', Boolean(event.target.closest('.profile-panel')));
    cursor.classList.toggle('is-accent', Boolean(event.target.closest('.intro')));
  }, { passive: true });

  document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
  document.addEventListener('pointerenter', () => cursor.classList.add('is-visible'));
})();
