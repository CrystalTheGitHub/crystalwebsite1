const news = document.getElementById('nav')
const navi = document.getElementById('nav-linkN')
news.onclick = function(){
    navi.className = 'nav-linkN2'
    x.className = 'navButton2'
}
const x = document.getElementById('navbutton')
x.onclick = function () {
    navi.className = 'nav-linkN'
    x.className = 'navButton'
}