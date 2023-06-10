// idがfooの要素（オブジェクト）を取得
let elem = document.getElementById(sample);
// 取得したelemを起点にクラスがbarの要素の集合を取得
let bar = elem.getElementsByClassName("aaa")[0];
alert(bar.textContent); // Blue
