$(function(){
  resize()
  $('#ypy-outer').animate({right: -235},300)
  $(window).on('resize',function(){
    resize()
  })
    /*右侧*/
  $('.ypy-mbar-tab-prof').on('mouseenter',function(){
    $(this).children('.ypy-mbar-tab-tip').stop(true,false).fadeIn(0).animate({opacity: 1,right: 35},300)
  })
  $('.ypy-mbar-tab-prof').on('mouseleave',function(){
    $(this).children('.ypy-mbar-tab-tip').stop(true,false).animate({opacity: 0,right: 70},300).fadeOut(0)
  })
  //showQuickPop
  var
  quickShell = $('#Muypybar'),
  quickPop = quickShell.find('#ypy-outer');

  var
  prevPopType,
  prevTrigger,
  prevRih,
  index,
  doc = $(document),
  popDisplayed = false,
  hideQuickPop = function(){
    if(prevTrigger){
      prevTrigger.removeClass('current');
      $('.mui-mbar-plugin').eq(index).css({'z-index':'999996','top':'0'}).addClass('mui-mbar-plugin-scaleDown');
    }
    popDisplayed = false;
    prevPopType = '';
    quickPop.animate({right:-235});
  },
  showQuickPop = function(type){

/*    if(type !== prevPopType){
      var fn = quickDataFns[type];
      quickPop.html(ds.tmpl(popTmpl, fn));
    }
*/
    doc.unbind('click.ypy-position').one('click.ypy-position', hideQuickPop);
    // alert(quickPop[0].innerHTML)
    // quickPop[0].className = 'quick_links_pop quick_' + type;
    popDisplayed = true;
    prevPopType = type;
    quickPop.animate({right:0});

  };
  quickShell.bind('click.ypy-position', function(e){   //阻止冒泡
    e.stopPropagation();
  });

  quickPop.delegate('.mui-mbar-plugin-hd-close','click',function(){
    quickPop.animate({right:-235});
    if(prevTrigger){
      prevTrigger.removeClass('current');
      $('.mui-mbar-plugin').eq(index).css({'z-index':'999996','top':'0'}).addClass('mui-mbar-plugin-scaleDown');
    }
  });


  //通用事件处理
  var
  view = $(window),
  // quickLinkCollapsed = !!ds.getCookie('ql_collapse'),
  getHandlerType = function(className){
    return className.replace(/current/g, '').replace(/\s+/, '');
  },
  showPopFn = function(){
    var type = getHandlerType(this.id);
    if(popDisplayed && type === prevPopType){
      return hideQuickPop();
    }
    showQuickPop(this.id);
    if(prevTrigger){
      prevTrigger.removeClass('current');
      $('.mui-mbar-plugin').eq(index).css({'z-index':'999996','top':'0'}).addClass('mui-mbar-plugin-scaleDown');
    }
    index = $(this).index();
    $('.mui-mbar-plugin').eq(index).css({'z-index':'999999','visibility':'visible','top':$(window).height()}).removeClass('mui-mbar-plugin-scaleDown').animate({top:0});
    prevTrigger = $(this).addClass('current');
  },
  quickHandlers = {
    //购物车，最近浏览，商品咨询
    my_qlinks: showPopFn,
    message_list: showPopFn,
    history_list: showPopFn,
    leave_message: showPopFn,
    //返回顶部

  };
  quickShell.delegate('.ypy-mbar-tab','click',function(){
    var type = getHandlerType(this.id);
    if(type && quickHandlers[type]){
      quickHandlers[type].call(this);
    }
  })

})
function resize(){
  var windowHeight = $(window).height()          //浏览器时下窗口可视区域高度
  , muYpyBar = $('#Muypybar')          //总DIV
  , ypyOuter = $('#ypy-outer')
  , ypyTabs = $('#ypy-tabs')
  , ypyPlugins = $('#ypy-plugins')
  , ypyTabsMask = $('#ypy-tabs-mask')
  , muiMbarPlugin = $('.mui-mbar-plugin');
  muYpyBar.css('height',windowHeight+ 'px')
  ypyOuter.css('height',windowHeight+ 'px')
  ypyTabs.css('height',windowHeight+ 'px')
  ypyTabsMask.css('height',windowHeight+ 'px')
  ypyPlugins.css('height',windowHeight+ 'px')
  muiMbarPlugin.css('height',windowHeight+ 'px')

}


