$(function(){
  resize()
  $('#ypy-outer').animate({right: -235},300)
  $(window).on('resize',function(){
    resize()
  })

})
function resize(){
  var windowHeight = $(window).height()          //浏览器时下窗口可视区域高度
  var muYpyBar = $('#Muypybar');          //总DIV
  var ypyOuter = $('#ypy-outer');
  var ypyTabs = $('#ypy-tabs');
  var ypyTabsMask = $('#ypy-tabs-mask');
  muYpyBar.css('height',windowHeight+ 'px')
  ypyOuter.css('height',windowHeight+ 'px')
  ypyTabs.css('height',windowHeight+ 'px')
  ypyTabsMask.css('height',windowHeight+ 'px')
}
