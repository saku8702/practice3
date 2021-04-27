'use strict';

const jsHam = document.getElementById('jsham');
const jsNav = document.getElementById('jsnav');
const jsBody = document.getElementById('body');

jsham.addEventListener('click', () => {
  jsnav.classList.toggle('active'), jsham.classList.toggle('active');

  if (jsham.classList.contains('active')) {
    jsBody.style.height = '100%';
    jsBody.style.overflow = 'hidden';
  } else {
    jsBody.style.height = 'auto';
    jsBody.style.overflow = 'scroll';
  }
});

jsnav.addEventListener('click', () => {
  jsnav.classList.remove('active'), jsham.classList.remove('active');

  if (jsham.classList.contains('active')) {
    jsBody.style.height = '100%';
    jsBody.style.overflow = 'hidden';
  } else {
    jsBody.style.height = 'auto';
    jsBody.style.overflow = 'scroll';
  }
});
