/*!
 * jQuery mybox plugin
 * Version 0.7 (02-Aug-2015)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://3wa.tw/demo/htm/mybox
 * Copyright (c) 2014-2016 Feather Mountain (http://3wa.tw)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Special thanks to jQuery-BlockUI
 */  
  ;(function() {
    var _scrollTop="";
    function setup($) {
    }       
    function time(){return Math.floor(new Date().getTime()/1000);}
    function init(opts)
    {
      _scrollTop=$(window).scrollTop();
      //alert(_scrollTop);
      for(var key in default_opts)
      {        
        if(typeof(opts[key]) != "undefined")
        {                    
          default_opts[key] = opts[key];
        }
      }       
      orin_opts = {
        //'html_overflow':(typeof($("html").css('overflow'))=='undefined')?'auto':$("html").css('overflow'),
        //'html_padding':(typeof($("html").css('padding'))=='undefined')?'0px':$("html").css('padding'),
        //'html_margin':(typeof($("html").css('margin'))=='undefined')?'0px':$("html").css('margin'),
        //'body_overflow':(typeof($("body").css('overflow'))=='undefined')?'auto':$("body").css('overflow'),
        //'body_padding':(typeof($("body").css('padding'))=='undefined')?'0px':$("body").css('padding'),
        //'body_margin':(typeof($("body").css('margin'))=='undefined')?'0px':$("body").css('margin') 
      }
      if($("#mybox_class_define").size()==0)
      {
        $("body").append(" \
        <div style='display:none;position:absolute;' id='mybox_class_define'> \
          <style> \
            .mybox_block_noscroll{ \
              position: fixed; \
              overflow-y: scroll; \
              width:100%; \
            } \
          </style> \
        </div>");
      }       
      $("body").addClass("mybox_block_noscroll");        
    }   
    function run(opts)
    {
                    
      /*$("html,body").css({
        'overflow':'hidden',
        'padding':'0px',
        'margin':'0px'
      });*/     
      $("#"+default_opts.mybox_background_id).remove();
      $("#"+default_opts.mybox_div_id).remove();                                
      //background
      $("body").append("<div id='"+default_opts.mybox_background_id+"'></div>");
      $("#"+default_opts.mybox_background_id).css({
         'position':'fixed',
         'z-index':parseInt(new Date().getTime()/1000),
         'width':$(window).width()+'px',
         'height':$(window).height()+'px',
         'background-color':default_opts.mybox_background_css.background_Color,
         'opacity':default_opts.mybox_background_css.background_Opacity,
         'left':parseInt($(window).scrollLeft())+'px',
         'top':parseInt($(window).scrollTop())+'px',
         'display':'none'
      });
      $("#"+default_opts.mybox_background_id).show();                
      
      //touch close
      if(default_opts.is_background_touch_close)
      {
        $("#"+default_opts.mybox_background_id).click(function(){
          remove();
        });
      }
      
      //front-div
      $("body").append("<div id='"+default_opts.mybox_div_id+"'></div>");
      $("#"+default_opts.mybox_div_id).html(default_opts.message);
      $("#"+default_opts.mybox_div_id).css({
         'position':'fixed',
         'z-index':(parseInt(new Date().getTime()/1000)+1),
         'display':'none'
      });
      for(key in default_opts.css)
      {
        $("#"+default_opts.mybox_div_id).css(key,default_opts.css[key]);      
      }                                                      
      //Center           
      $("#"+default_opts.mybox_div_id).show();
      default_opts.is_block = true;
      $("#"+default_opts.mybox_div_id+" img").bind('load',function(){
        div_center()
      });
      div_center();   
      $(window).bind("resize",resize_func);   
    }
    var resize_func = function(){
      if(default_opts.is_block)
      {
        //resizebackground and recenter              
        $("#"+default_opts.mybox_background_id).css({
         'position':'fixed',         
         'width':$(window).width()+'px',
         'height':$(window).height()+'px',         
         'left':'0px',
         'top':'0px'
        });
        div_center();
      }
    }
    function div_center()
    {             
      $("#"+default_opts.mybox_div_id).css({
        'left':((($(window).width()-$("#"+default_opts.mybox_div_id).outerWidth())/2))+'px',
        'top':(($(window).height()-$("#"+default_opts.mybox_div_id).outerHeight())/2) +'px'
      });
    }
    function remove()
    {
      default_opts.is_block = false;      
      /*$("body").css({
        'overflow':orin_opts.body_overflow,
        'padding':orin_opts.body_padding,
        'margin':orin_opts.body_margin
      });
      
      $("html").css({
        'overflow':orin_opts.html_overflow,
        'padding':orin_opts.html_padding,
        'margin':orin_opts.html_margin
      });*/
      $("body").removeClass("mybox_block_noscroll");      
      $("#"+default_opts.mybox_div_id).hide();
      $("#"+default_opts.mybox_div_id).remove();
      $("#"+default_opts.mybox_background_id).hide();
      $("#"+default_opts.mybox_background_id).remove();
      
      $(window).unbind("resize",resize_func);          
      $(window).scrollTop(_scrollTop);
    }    
    //var baseZindex = 100000;    
    var orin_opts = {};
    var default_opts = {
      is_background_touch_close : false,  
      is_block : false,   
      mybox_background_id : "mybox_background_"+time(),
      mybox_div_id : "mybox_div_"+time(),
      mybox_background_css : {
        background_Color : "#333",
        background_Opacity : 0.8
      },
      css:{
        'border':'1px solid #fff',
        'padding':'5px',
        'text-align':'left'
      },
      message:"", //message or box data
      beforeBlock:function(){},
      onBlock:function(){},
      unBlock:function(){}      
    };
    $.mybox = function(opts) { 
      init(opts);
      default_opts.beforeBlock();      
      run(opts); 
      default_opts.onBlock();
    };
    $.mybox_center = function(){
      div_center();
    };
    $.mybox_isOpen = function (){
      return default_opts.is_block;
    }
    $.unmybox = function() 
    { 
      remove();      
      default_opts.unBlock();        
    };
        
  	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
  		define(['jquery'], setup);
  	} else {
  		setup(jQuery);
  	}
  })();
