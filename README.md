mybox
=====

我的光箱，這是一支可以作出彈出式焦點視窗的程式，基於jQuery Plugin方式撰寫。

<center>
  <h2>我的自製全螢幕光箱</h2>
  <br>
  <h3>mybox 哥的光箱</h3>
  <br>
  <h4>這是一支可以作出彈出式焦點視窗的程式，基於jQuery Plugin方式撰寫。</h4>
  <br>    
  <br>
  <h2 class="title">程式資訊：</h2>
  <div style="text-align:left;margin-left:50px;">
    Author：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Feather Mountain(羽山) <a target="_blank" href="https://3wa.tw">https://3wa.tw</a>
    <br>
    官網：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a target="_blank" href="http://3wa.tw/demo/htm/mybox/">https://3wa.tw/demo/htm/mybox/</a>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a target="_blank" href="https://github.com/shadowjohn/mybox">https://github.com/shadowjohn/mybox</a>
    <br>
    程式名稱：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    mybox 哥的光箱    <br>
    Demo：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input value="RUN" id="run_btn" type="button">
    &nbsp;
    <a target="_blank" href="test.htm">Link</a>
    <br>  
    Donwload：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a target="_blank" href="https://3wa.tw/inc/javascript/jquery/mybox/mybox-0.12.js">mybox-0.12.js</a> addc39155cf4e53d0cb1bfdbfbd98ae6
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a target="_blank" href="https://3wa.tw/inc/javascript/jquery/mybox/mybox-0.12.min.js">mybox-0.12.min.js</a> 1712246b9e828403dda3bf1f68d0ad08
    <br>        
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a target="_blank" href="https://3wa.tw/inc/javascript/jquery/mybox/mybox-lastest.min.js">mybox-lastest.min.js</a> 1712246b9e828403dda3bf1f68d0ad08
    <br>    
    Key Word：<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Colorbox, Fancybox, Thinkbox, BlockUI
    <br>
  </div>
  <h2 class="title">功能參數說明：</h2>
  <table border="1" cellpadding="5" cellspacing="0">
    <tbody><tr>
      <th>參數或方法</th>
      <th>名稱</th>
      <th>說明</th>
    </tr>
    <tr>
      <th>使用方法(開啟)</th>
      <td>
      <input value="程式碼範例" onclick="$('#source_code').toggle();" type="button">
      </td>
      <td>
      <pre id="source_code" class="comments" style="display:none;">$.mybox({
   is_background_touch_close:false,
   message:"&lt;img src='https://3wa.tw/pic/3wa_logo.png' width='300' &gt; \
            &lt;br&gt; \
            你是個好人 \
            &lt;br&gt; \
            &lt;input type='button' \
            value='Close' onClick=\"$.unmybox();\"&gt; \
   ",
   css:{
     'border':'2px solid #fff',
     'padding':'50px',
     'background-color':'orange',
     'font-size':'46px',
     'color':'black'
   },
   beforeBlock:function(){      
     alert('test');     
   },
   onBlock:function(){
     alert('testok');           
   },
   unBlock:function(){
     alert('testfinish');           
   }
});
       </pre>
       </td>
    </tr>
    <tr>
      <th>使用方法(關閉)</th>
      <td>$.unmybox()</td>
      <td>
        <div class="comments">
        利用程式的方法關閉光箱，如：        <br> 
        $.unmybox();
        <br>
        <br>
        或是        &lt;input type='button' value='關閉' onClick="$.unmybox();"&gt;   
        </div>
    </td>
    </tr>
    <tr>
      <th>方法</th>
      <td><h3>$.mybox_isOpen()</h3></td>
      <td>
        <div class="comments">
          用來檢查光箱是否正在使用，回傳 true or false          
        </div>
      </td>
    </tr>     
    <tr>
      <th>參數</th>
      <td>
        <h3>is_background_touch_close</h3>
      </td>
      <td>
        <div class="comments">
          設定點外面背景時，光箱會不會消失，如：          <br>          
          // 點外面會消失 <br>          
          is_background_touch_close : true
        </div>
      </td>
    </tr>
    <tr>
      <th>參數</th>
      <td>
        <h3></h3><h3>message</h3>
      </td>
      <td>
        <div class="comments">
          要顯示的內容，如：<br>
          message : "你好"
          <br>
          或是          message : $('#test').html()
          <br>
          或是          <br>
          message : myAjax("https://3wa.tw/webservice/api.php?mode=test","")
          <br>
          <br>
          參考 myAjax 程式碼如下：<br>
          <pre>  function myAjax(url,postdata)
  {
    var tmp = $.ajax({
        url: url,
        type: "POST",
        data: postdata,
        async: false
     }).responseText;
    return tmp;
  }
          </pre>
        </div>
      </td>      
    </tr>
    <tr>
      <th>方法</th>
      <td><h3>beforeBlock</h3></td>
      <td>
        <div class="comments">
          在開啟光箱會作什麼事，如：          <br>
          <pre>  beforeBlock: function(){
    alert('Hi~~~');
  }
          </pre>          
        </div>
      </td>
    </tr>
    <tr>
      <th>方法</th>
      <td><h3>onBlock</h3></td>
      <td>
        <div class="comments">
          在開啟光箱完全開啟後作什麼事，如：          <br>
          <pre>  onBlock: function(){
    alert("Hi~~~it's now opened.");
  }
          </pre>          
        </div>
      </td>
    </tr>
    <tr>
      <th>方法</th>
      <td><h3>unBlock</h3></td>
      <td>
        <div class="comments">
          在關閉光箱之後作什麼事，如：          <br>
          <pre>  unBlock: function(){
    alert("關掉後的Alert!!!");
  }
          </pre>          
        </div>
      </td>
    </tr>              
  </tbody></table>
  <h2 class="title">ChangeLog</h2>
  <div style="text-align:left;">
    <pre style="margin-left:20px;">
* Fri Jan 12 2018 Feather Mountain &lt;https://3wa.tw&gt; 0.12
- Fix fullscreen scrollTop position
- Fix redefined beforeBlock, onblock, unBlock event issue. 
 
* Fri Jan 12 2018 Feather Mountain &lt;https://3wa.tw&gt; 0.11
- Upgrade for jQuery 3.2.1 support.
- Fix dom.size() to dom.length
 
* Mon Mar 13 2017 Feather Mountain &lt;https://3wa.tw&gt; 0.10
- Fix scroll position.
   
* Sat Dec 24 2016 Feather Mountain &lt;https://3wa.tw&gt; 0.9
- Limit mybox width and height the window screen size 90%.
    
* Fri Nov 20 2015 Feather Mountain &lt;https://3wa.tw&gt; 0.8
- Fix window scrollTop after unmybox when is_background_touch_close equals true.
    
* Sun Aug 02 2015 Feather Mountain &lt;https://3wa.tw&gt; 0.7
- Fix window scrollTop after unmybox.

* Thu Jul 02 2015 Feather Mountain &lt;https://3wa.tw&gt; 0.6
- Remove jQuery version check in setup.

* Tue Jun 30 2015 Feather Mountain &lt;https://3wa.tw&gt; 0.5
- Add $.mybox_isOpen().

* Tue Jun 23 2015 Feather Mountain &lt;https://3wa.tw&gt; 0.4
- Fixed contents.
    
* Thu Nov 27 2014 Feather Mountain &lt;https://3wa.tw&gt; 0.3
- Fixed screen scroll issue.
    
* Wed Aug 27 2014 Feather Mountain &lt;https://3wa.tw&gt; 0.2
- Fixed screen center issue.

* Thu Feb 20 2014 Feather Mountain &lt;https://3wa.tw&gt; 0.1
- Building on first time. 
    </pre>
  </div>
</center>
