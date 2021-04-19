'use strict';

// ハンバーガー
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

// ヘッダー色変更
// スクロールイベント
window.addEventListener("scroll", function () {

  var headerElement = document.getElementById("header"); // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect(); // 
  var y = rect.top + window.pageYOffset; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 753) { // 変数yの値が0よりも
    headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
  }
});


// 画像の切り替え
(function () {
  var i = 0;

  //↓使用する画像のURL（任意の数）
  var bg = ["img/fv-bgi_01@2x.jpg", "img/fv-bgi_02@2x.jpg", "img/fv-bgi_03@2x.jpg"];

  var timer = window.setInterval(function () {
    i = (i === bg.length - 1) ? 0 : i + 1;
    document.getElementById('fv').style.backgroundImage = "url(" + bg[i] + ")";
  }, 3000); //←時間（3000＝3秒）
})();