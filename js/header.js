'use strict';

const headerElement = document.getElementById("header"); // `#header`セレクタを取得
const rect = headerElement.getBoundingClientRect(); // 

window.addEventListener("scroll", function () {
  const y = rect.top + window.pageYOffset; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 753) { // 変数yの値が0よりも
    headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
  }
});
