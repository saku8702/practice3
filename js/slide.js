'use strict';

  var i = 0;
  
  var bg = ["img/fv-bgi_01@2x.jpg", "img/fv-bgi_02@2x.jpg", "img/fv-bgi_03@2x.jpg"];
  
  function slide_time() {
  i = (i === bg.length - 1) ? 0 : i + 1;
  document.getElementById('fv').style.backgroundImage = "url(" + bg[i] + ")";
  }

  setInterval(slide_time, 3000);
