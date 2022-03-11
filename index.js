const hamburger = document.querySelector('.moile-menu-hamburger');
const menu = document.querySelector('.nav');

function toggle() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}

hamburger.addEventListener('click', toggle);

menu.addEventListener('mouseup', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
});
