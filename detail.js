document.querySelectorAll('.case-image-frame').forEach((frame) => {
  const image = frame.querySelector('img');
  const update = () => frame.classList.toggle('is-empty', !image.naturalWidth);
  image.addEventListener('load', update);
  image.addEventListener('error', update);
  if (image.complete) update();
});
