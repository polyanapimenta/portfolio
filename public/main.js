window.onscroll = function() {
  var topo = window.pageYOffset || document.documentElement.scrollTop
  var referencia = document.querySelector('#AppHeader').offsetHeight
  var menu = document.querySelector('.App-menu')
  
  if (topo > referencia) {
    document.querySelector('#AppMenuContainer').classList.remove("container")
    menu.classList.add("App-menu-fixed")
  }
  if (topo < referencia) {
    document.querySelector('#AppMenuContainer').classList.add("container")
    menu.classList.remove("App-menu-fixed")
  }
}