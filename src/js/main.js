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
  var ypyPlugins = $('#ypy-plugins');
  var ypyTabsMask = $('#ypy-tabs-mask');
  muYpyBar.css('height',windowHeight+ 'px')
  ypyOuter.css('height',windowHeight+ 'px')
  ypyTabs.css('height',windowHeight+ 'px')
  ypyTabsMask.css('height',windowHeight+ 'px')
  ypyPlugins.css('height',windowHeight+ 'px')
}



  // var
  // prevPopType,
  // prevTrigger,
  // doc = $(document),
  // popDisplayed = false,
  // hideQuickPop = function(){
  //   if(prevTrigger){
  //     prevTrigger.removeClass('current');
  //   }
  //   popDisplayed = false;
  //   prevPopType = '';
  //   quickPop.hide();
  //   quickPop.animate({left:280,queue:true});
  // },
  // showQuickPop = function(type){
  //   if(quickPopXHR && quickPopXHR.abort){
  //     quickPopXHR.abort();
  //   }
  //   if(type !== prevPopType){
  //     var fn = quickDataFns[type];
  //     quickPop.html(ds.tmpl(popTmpl, fn));
  //     fn.init.call(this, fn);
  //   }
  //   doc.unbind('click.quick_links').one('click.quick_links', hideQuickPop);

  //   quickPop[0].className = 'quick_links_pop quick_' + type;
  //   popDisplayed = true;
  //   prevPopType = type;
  //   quickPop.show();
  //   quickPop.animate({left:0,queue:true});
  // };
  // quickShell.bind('click.quick_links', function(e){
  //   e.stopPropagation();
  // });
  // quickPop.delegate('a.ibar_closebtn','click',function(){
  //   quickPop.hide();
  //   quickPop.animate({left:280,queue:true});
  //   if(prevTrigger){
  //     prevTrigger.removeClass('current');
  //   }
  // });

  // //通用事件处理
  // var
  // view = $(window),
  // quickLinkCollapsed = !!ds.getCookie('ql_collapse'),
  // getHandlerType = function(className){
  //   return className.replace(/current/g, '').replace(/\s+/, '');
  // },
  // showPopFn = function(){
  //   var type = getHandlerType(this.className);
  //   if(popDisplayed && type === prevPopType){
  //     return hideQuickPop();
  //   }
  //   showQuickPop(this.className);
  //   if(prevTrigger){
  //     prevTrigger.removeClass('current');
  //   }
  //   prevTrigger = $(this).addClass('current');
  // },
  // quickHandlers = {
  //   //购物车，最近浏览，商品咨询
  //   my_qlinks: showPopFn,
  //   message_list: showPopFn,
  //   history_list: showPopFn,
  //   leave_message: showPopFn,
  //   mpbtn_histroy:showPopFn,
  //   mpbtn_recharge:showPopFn,
  //   mpbtn_wdsc:showPopFn,
  //   //返回顶部
  //   return_top: function(){
  //     ds.scrollTo(0, 0);
  //     hideReturnTop();
  //   }
  // };
  // quickShell.delegate('a', 'click', function(e){
  //   // alert(this.className)
  //   var type = getHandlerType(this.className);
  //   // alert(type)
  //   if(type && quickHandlers[type]){
  //     quickHandlers[type].call(this);
  //     e.preventDefault();
  //   }
  // });
