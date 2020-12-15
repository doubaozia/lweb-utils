# @lweb-utils/dom

> Dom相关工具函数

```bash
npm i @lweb-utils/dom --save
```

## 1. hasClass
```javascript
hasClass(element, className)
```
判断某个元素是否包含相应的class。
### 参数
element(HTMLElement): 判断的HTML元素。\
className(string): 类名。
### 返回值
(boolean): 是否包含指定的类名。
### 示例
```javascript
const div = document.getElementById('example');
const has = hasClass(div, 'example');
```

## 2. addClass
```javascript
addClass(element, className)
```
给特定的元素增加类名。
### 参数
element(HTMLElement): 增加类名的元素。\
className(string): 增加的类名。
### 返回值
无
### 示例
```javascript
const div = document.getElementById('example');
addClass(div, 'example');
```

## 3. removeClass
```javascript
removeClass(element, className);
```
移除某个元素特定的类名。
### 参数
element(HTMLElement): 移除类名的元素。\
className(string): 移除的类名。
### 返回值
无
### 示例
```javascript
const div = document.getElementById('example');
removeClass(div, 'example');
```

## 4. copyTextToClipBoard
```javascript
copyTextToClipBoard(text);
```
复制特定的字符串到剪切板。
### 参数
text(string): 被复制的字符串。
### 返回值
(boolean): 是否复制成功。
### 示例
```javascript
const isSuccess = copyTextToClipBoard('code');
```

## 5. checkPassiveSupport
```javascript
checkPassiveSupport()
```
判断当前浏览器环境是否支持被动事件。
### 参数
无
### 返回值
(boolean): 是否支持被动时间。
### 示例
```javascript
const isSupport = checkPassiveSupport();
```

## 6. addEvent
```javascript
addEvent(element, eventName, eventCallback)
```
为某个元素注册事件。
### 参数
element(HTMLElement): 注册事件的目标元素。\
eventName(string): 事件名。\
eventCallback(function): 事件回调函数。
### 返回值
无
### 示例
```javascript
const div = document.getElementById('example');
const cb = () => {
  // dosomething...
};
addEvent(div, 'click', cb);
```

## 7. removeEvent
```javascript
removeEvent(element, eventName, eventCallback)
```
移除某个元素被注册的事件。
### 参数
element(HTMLElement): 移除事件的目标元素。\
eventName(string): 事件名。\
eventCallback(function): 事件回调函数。
### 返回值
无
### 示例
```javascript
const div = document.getElementById('example');
const cb = () => {
  // dosomething...
};
removeEvent(div, 'click', cb);
```

## 8. loadImg
```javascript
loadImg(url, callback)
```
异步加载图片。
### 参数
url(string|object): 图片地址。\
callback(function): 回调函数。
### 返回值
(HTMLImageElement): 图片信息。
### 示例
```javascript
const cb = (success) => {
  if (success) {
    // dosomething...
  } else {
    // dosomething...
  }
};
loadImg('http://www.abc.com/a.png', cb);
```

## 9. loadScript
```javascript
loadScript(url, callback)
```
异步加载脚本。
### 参数
url(string|object): 脚本地址。\
callback(function): 脚本函数。
### 返回值
(HTMLImageElement): 脚本信息。
### 示例
```javascript
const cb = (success) => {
  if (success) {
    // dosomething...
  } else {
    // dosomething...
  }
};
loadScript('http://www.abc.com/a.js', cb);
```

## 10. ready
```javascript
ready(callback)
```
判断是否当前文档已加载完成。
### 参数
callback(function): 加载成功回调函数。
### 返回值
无
### 示例
```javascript
const cb = () => {
  // dosomething...
};
ready(cb);
```

## 11. requestWithoutAjax
```javascript
requestWithoutAjax(url, params, method)
```
通过form的方式发起请求。
### 参数
url(string): 请求的url。\
params(object): 请求的参数对象。\
method(string): 请求方法，如```POST```, ```PUT```。
### 返回值
无
### 示例
```javascript
const url = 'http://www.abc.com';
const params = {
  a: 1,
  b: 2,
};
requestWithoutAjax(url, params, 'POST');
```

## 12. scrollTo
```javascript
scrollTo(element, target, duration)
```
滚动指定元素的内容到相应的scrollTop位置。支持平滑滚动和scrollTop为小数的浏览器，比如小米。支持ios浏览器。
### 参数
element(HTMLElement): 可滚动的容器元素。\
target(number): 滚动到的目标scrollTop值，单位为px。\
duration(number): 滚动时长，设置时平滑滚动，否则瞬间滚动。单位为ms。
### 返回值
无
### 示例
```javascript
const div = document.getElementById('example');

// 瞬间滚动到scrollTop为100px的位置
scrollTo(div, 100);
// 200ms滚动到scrollTop为100px的位置
scrollTo(div, 100, 200);
```

