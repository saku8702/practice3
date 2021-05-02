'use strict';

  const slides = {
    images: ["img/fv-bgi_01@2x.jpg", "img/fv-bgi_02@2x.jpg", "img/fv-bgi_03@2x.jpg"],
    target: document.getElementById('fv')
  }
  
  function changeSlide() {
    let currentNumber = 0
    return () => {
      currentNumber = (currentNumber === slides.images.length - 1) ? 0 : currentNumber + 1;
      slides.target.style.backgroundImage = "url(" + slides.images[currentNumber] + ")";
    }
  }
  
  setInterval(changeSlide(), 3000);