'use strict';

const menu = document.getElementById('js-menu'); 
const nav = document.getElementById('js-nav');
const body = document.getElementById('js-body');

menu.addEventListener('click', () => {
  nav.classList.toggle('active'), menu.classList.toggle('active');
  addStyleForBody();
});

nav.addEventListener('click', () => {
  nav.classList.remove('active'), menu.classList.remove('active');
  addStyleForBody();
});

function addStyleForBody() {
  if (menu.classList.contains('active')) {
    body.style.height = '100%';
    body.style.overflow = 'hidden';
  } else {
    body.style.height = 'auto';
    body.style.overflow = 'scroll';
  }
}
