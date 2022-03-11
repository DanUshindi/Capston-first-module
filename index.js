const hamburger = document.querySelector('.moile-menu-hamburger');
const menu = document.querySelector('.nav');
// const html = document.querySelector('html');

function toggle() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  // if (menu.style.display !== 'block') {
  //   html.style.overflow = 'scroll';
  // } else {
  //   html.style.overflow = 'hidden';
  // }
}

hamburger.addEventListener('click', toggle);

menu.addEventListener('mouseup', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
});
