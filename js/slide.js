'use strict';

  var i = 0;

  //↓使用する画像のURL（任意の数）
  var bg = ["img/fv-bgi_01@2x.jpg", "img/fv-bgi_02@2x.jpg", "img/fv-bgi_03@2x.jpg"];

  var timer = window.setInterval(function () {
    i = (i === bg.length - 1) ? 0 : i + 1;
    document.getElementById('fv').style.backgroundImage = "url(" + bg[i] + ")";
  }, 3000); //←時間（3000＝3秒）
