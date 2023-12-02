const news = document.getElementById('nav')
const navi = document.getElementById('nav-linkN')
news.onclick = function(){
    navi.className = 'nav-linkN2'
    navi2.className = 'navd2'
}
const x = document.getElementById('navbutton')
const navi2 = document.getElementById('navd')
x.onclick = function () {
    navi.className = 'nav-linkN'
    navi2.className = 'navButton2'
}