# @lweb-utils/url

> Url相关工具函数

```bash
npm i @lweb-utils/storage --save
```

## 1. getQueryUrl
```javascript
getQueryUrl(url, params)
```
获取附带query参数的url。
### 参数
url(string): 生成参数的url，包含协议域名和端口等。\
params(object): 参数对象。
### 返回值
(string): 附带query参数的完整url。
### 示例
```javascript
// url没有参数
const url = getQueryUrl('http://www.abc.com', { a: 1 });
// 'http://www.abc.com?a=1'

// url带有参数
const url = getQueryUrl('http://www.abc.com?a=1', { b: 2 });
// 'http://www.abc.com?a=1&b=2'
```

## 2. getUrlParam
```javascript
getUrlParam(param, url)
```
获取url上制定的参数值。
### 参数
param(string): url上的参数名称，没有时返回全部。\
url(string): url字符串，默认取```window.location.href```。
### 返回值
(string|object|null): url附带的参数值。
### 示例
```javascript
// 不指定参数名称和url，当前地址为http://www.abc.com?a=1&b=2&c=3
const result = getUrlParam();
// { a: '1', b: '2', c: '3' }

// 指定参数，不指定url
const result = getUrlParam('a');
// '1'

// 指定参数和url
const result = getUrlParam('a', 'http://www.abc.com?a=2&b=3&c=4');
// '2'

// 不指定参数，指定url
const result = getUrlParam(null, 'http://www.abc.com?a=2&b=3&c=4');
// { a: '2', b: '3', c: '4' }
```

## 3. isUrl
```javascript
isUrl(path)
```
判断给定字符串是否为url的格式。
### 参数
path(string): 判断的字符串。
### 返回值
(boolean): 参数是否为url格式。
### 示例
```javascript
const result = isUrl('http://www.abc.com');
// true

const result = isUrl('www.abc.com');
// false
```
