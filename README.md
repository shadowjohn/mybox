# mybox

`mybox` 是一個基於 jQuery 的 lightbox / modal plugin，用很直接的方式幫頁面加上一層全螢幕遮罩與焦點視窗。  
如果你想快速做出通知框、圖片展示、表單互動、AJAX 內容視窗，這支小工具就是走簡單、夠用、容易改的路線。

## 專案簡介

mybox 的核心很單純：

- 用 `$.mybox(opts)` 開啟光箱
- 用 `$.unmybox()` 關閉光箱
- 用 `$.mybox_isOpen()` 檢查目前是否已開啟
- 需要時可以再呼叫 `$.mybox_center()` 重新置中

它適合放在舊專案、jQuery 專案，或想快速補一個 popup / modal 的場景，不需要額外導入大型 UI framework。

## 功能特色

- 全螢幕背景遮罩，視覺焦點清楚
- `message` 可直接放 HTML 字串
- 支援背景點擊關閉
- 支援自訂內容區塊 CSS
- 提供 `beforeBlock`、`onBlock`、`unBlock` callback
- 可在光箱開啟後動態替換內容並重新置中
- 適合通知、圖片、表單、AJAX response、簡易互動視窗

## 快速開始

先載入 jQuery，再載入 `mybox`：

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://3wa.tw/inc/javascript/jquery/mybox/mybox-lastest.min.js"></script>
```

最短使用方式如下：

```html
<button id="run_btn">RUN</button>

<script>
$(document).ready(function () {
  $("#run_btn").click(function () {
    $.mybox({
      is_background_touch_close: true,
      message: "<div style='padding:30px;text-align:center;'>" +
               "<h2>Hello mybox</h2>" +
               "<p>這是一個簡單的彈出視窗。</p>" +
               "<button onclick='$.unmybox();'>Close</button>" +
               "</div>",
      css: {
        border: "2px solid #fff",
        backgroundColor: "#111",
        color: "#fff",
        padding: "20px"
      }
    });
  });
});
</script>
```

## 使用情境

### 1. 提示視窗

適合快速顯示通知、提醒、操作完成訊息。

```javascript
$.mybox({
  is_background_touch_close: true,
  message: "<div><h3>完成</h3><p>資料已更新。</p><button onclick='$.unmybox();'>關閉</button></div>"
});
```

### 2. 圖片或內容展示

可直接把圖片、介紹文案、按鈕塞進 `message`。

```javascript
$.mybox({
  message: "<img src='https://3wa.tw/pic/3wa_logo.png' width='300'>" +
           "<br><br>這裡可以放品牌介紹、產品說明或作品展示。",
  css: {
    border: "2px solid #fff",
    padding: "30px",
    backgroundColor: "#000",
    color: "#fff"
  }
});
```

### 3. 表單互動

`message` 可以放輸入欄位、按鈕、驗證訊息，拿來做簡單表單很方便。

```javascript
$.mybox({
  message: "<div>" +
           "<h3>聯絡我們</h3>" +
           "<input type='text' placeholder='Your name'><br><br>" +
           "<textarea placeholder='Message'></textarea><br><br>" +
           "<button onclick='$.unmybox();'>送出後關閉</button>" +
           "</div>",
  css: {
    backgroundColor: "#fff",
    color: "#222",
    padding: "20px"
  }
});
```

### 4. AJAX 內容

如果你已經拿到 AJAX response，也可以直接丟進去顯示。

```javascript
function myAjax(url, postdata) {
  return $.ajax({
    url: url,
    type: "POST",
    data: postdata,
    async: false
  }).responseText;
}

$.mybox({
  message: myAjax("https://3wa.tw/webservice/api.php?mode=test", "")
});
```

### 5. 動態更新目前光箱內容

如果光箱已經開著，也可以直接替換目前內容，然後重新置中。

```javascript
$("div[id^='mybox_div']").html("<div>New Content</div>");
$.mybox_center();
```

## API / 參數說明

### `$.mybox(opts)`

開啟光箱的主要方法。

```javascript
$.mybox({
  is_background_touch_close: false,
  message: "Hello",
  css: {
    border: "1px solid #fff",
    padding: "5px",
    textAlign: "left"
  },
  beforeBlock: function(){},
  onBlock: function(){},
  unBlock: function(){}
});
```

### `$.unmybox()`

用程式關閉目前光箱。

```javascript
$.unmybox();
```

### `$.mybox_isOpen()`

檢查目前光箱是否開啟，回傳 `true` 或 `false`。

```javascript
if ($.mybox_isOpen()) {
  console.log("mybox is open");
}
```

### `$.mybox_center()`

重新計算目前光箱位置並置中。  
適合在你動態更新光箱內容、高度改變之後呼叫。

```javascript
$.mybox_center();
```

### `is_background_touch_close`

控制點背景遮罩時，光箱要不要關閉。

```javascript
is_background_touch_close: true
```

### `message`

要顯示在光箱中的內容，可直接放字串或 HTML。

```javascript
message: "你好"
```

```javascript
message: $("#test").html()
```

```javascript
message: myAjax("https://3wa.tw/webservice/api.php?mode=test", "")
```

### `css`

直接指定光箱內容容器的 CSS。

```javascript
css: {
  border: "2px solid #fff",
  padding: "50px",
  backgroundColor: "orange",
  fontSize: "46px",
  color: "black"
}
```

### `beforeBlock`

光箱開啟前觸發。

```javascript
beforeBlock: function () {
  alert("Hi~~~");
}
```

### `onBlock`

光箱完成開啟後觸發。

```javascript
onBlock: function () {
  alert("Hi~~~ it's now opened.");
}
```

### `unBlock`

光箱關閉後觸發。

```javascript
unBlock: function () {
  alert("關掉後的 Alert!!!");
}
```

## 下載與專案資訊

### 專案資訊

- Author: 羽山秋人 (https://3wa.tw)
- Demo: https://3wa.tw/demo/htm/mybox/
- GitHub: https://github.com/shadowjohn/mybox
- License: MIT / GPL dual license
- Keywords: Colorbox, Fancybox, Thinkbox, BlockUI

### 下載

- `mybox-0.12.js`  
  https://3wa.tw/inc/javascript/jquery/mybox/mybox-0.12.js  
  `addc39155cf4e53d0cb1bfdbfbd98ae6`
- `mybox-0.12.min.js`  
  https://3wa.tw/inc/javascript/jquery/mybox/mybox-0.12.min.js  
  `1712246b9e828403dda3bf1f68d0ad08`
- `mybox-lastest.min.js`  
  https://3wa.tw/inc/javascript/jquery/mybox/mybox-lastest.min.js  
  `1712246b9e828403dda3bf1f68d0ad08`

## ChangeLog

### 0.12 / 2018-01-12

- Fix fullscreen scrollTop position
- Fix redefined beforeBlock, onBlock, unBlock event issue

### 0.11 / 2017-03-13

- Upgrade for jQuery 3.2.1 support
- Fix `dom.size()` to `dom.length`

### 0.10 / 2017-03-13

- Fix scroll position

### 0.9 / 2016-12-24

- Limit mybox width and height to 90% of window size

### 0.8 / 2015-11-20

- Fix window scrollTop after `$.unmybox()` when `is_background_touch_close` equals `true`

### 0.7 / 2015-08-02

- Fix window scrollTop after `$.unmybox()`

### 0.6 / 2015-07-02

- Remove jQuery version check in setup

### 0.5 / 2015-06-30

- Add `$.mybox_isOpen()`

### 0.4 / 2015-06-23

- Fixed contents

### 0.3 / 2014-11-27

- Fixed screen scroll issue

### 0.2 / 2014-08-27

- Fixed screen center issue

### 0.1 / 2014-02-20

- Building on first time
