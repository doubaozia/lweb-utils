# @lweb-utils/storage

> 本地存储相关工具函数

```bash
npm i @lweb-utils/storage --save
```

## 1. getCookie
```javascript
getCookie(name)
```
获取相应名称对应的cookie值。
### 参数
name(string): cookie名称。
### 返回值
(string): cookie值，如果没有则返回空字符串''。
### 示例
```javascript
const value = getCookie('example');
```

## 2. setCookie
```javascript
setCookie(name, value, days, domain, path)
```
添加相应的cookie。
### 参数
name(string): cookie名称。\
value(string): cookie值。\
days(number): cookie有效时间，单位为天。\
domain(string): cookie域名。\
path(string): cookie路径。
### 返回值
无
### 示例
```javascript
// 只有name和value
setCookie('example', 'abc');
// 存在过期时间，3天后过期
setCookie('example', 'abc', 3);
// 存在域名
setCookie('example', 'abc', 3, 'http://www.abc.com/');
// 在指定路径下有效
setCookie('example', 'abc', 3, 'http://www.abc.com/', '/path');
```

## 3. removeCookie
```javascript
removeCookie(name)
```
删除相应的cookie。
### 参数
name(string): cookie名称。
### 返回值
无
### 示例
```javascript
removeCookie('example');
```

## 4. getStorage
```javascript
getStorage(storage, key, isObject, defaultValue)
```
获取相应存储对象的值。存储对象要有setItem和getItem方法，比如```localStorage```对象。
### 参数
storage(Storage): 存储对象，应具备setItem和getItem方法。\
key(string): 存储的key。\
isObject(boolean): 存储的值是否为对象，如果为true，则会对值进行JSON.parse转换。\
defaultValue(any): 默认值，获取的值不存在时返回该值。
### 返回值
(any): 获取存储对象对应key的值。
### 示例
```javascript
// 获取的值为字符串
const value = getStorage(localStorage, 'example');
// 获取的值为对象
const value = getStorage(localStorage, 'example', true);
// 获取的值不存在时取默认值default
const value = getStorage(localStorage, 'example', true, 'default');
```

## 5. setStorage
```javascript
setStorage(storage, key, value)
```
设置存储键值对。
### 参数
storage(Storage): 存储对象，应具备setItem和getItem方法。\
key(string): 存储的key。\
value(any): 存储的值，如果为对象会转换成json字符串。
### 返回值
无
### 示例
```javascript
// 值为字符串
setStorage(localStorage, 'example', 'value');
// 值为对象，对象会被转换成字符串
setStorage(localStorage, 'example', { a: 1, b: 2 });
```

## 6. getLocalStorage
```javascript
getLocalStorage(key, isObject, defaultValue)
```
获取localStorage的值。
### 参数
key(string): localStorage的key。\
isObject(boolean): 存储的值是否为对象，如果为true，则会对值进行JSON.parse转换。\
defaultValue(any): 默认值，获取的值不存在时返回该值。
### 返回值
(any): 获取localStorage对应key的值。
### 示例
```javascript
// 获取的值为字符串
const value = getLocalStorage('example');
// 获取的值为对象
const value = getLocalStorage('example', true);
// 获取的值不存在时取默认值default
const value = getLocalStorage('example', true, 'default');
```

## 7. getSessionStorage
```javascript
getSessionStorage(key, isObject, defaultValue)
```
获取sessionStorage的值。
### 参数
key(string): sessionStorage的key。\
isObject(boolean): 存储的值是否为对象，如果为true，则会对值进行JSON.parse转换。\
defaultValue(any): 默认值，获取的值不存在时返回该值。
### 返回值
(any): 获取sessionStorage对应key的值。
### 示例
```javascript
// 获取的值为字符串
const value = getSessionStorage('example');
// 获取的值为对象
const value = getSessionStorage('example', true);
// 获取的值不存在时取默认值default
const value = getSessionStorage('example', true, 'default');
```

## 8. setLocalStorage
```javascript
setLocalStorage(key, value)
```
设置localStorage键值对。
### 参数
key(string): 存储的key。\
value(any): 存储的值，如果为对象会转换成json字符串。
### 返回值
无
### 示例
```javascript
// 值为字符串
setLocalStorage('example', 'value');
// 值为对象，对象会被转换成字符串
setLocalStorage('example', { a: 1, b: 2 });
```

## 9. setSessionStorage
```javascript
setSessionStorage(key, value)
```
设置sessionStorage键值对。
### 参数
key(string): 存储的key。\
value(any): 存储的值，如果为对象会转换成json字符串。
### 返回值
无
### 示例
```javascript
// 值为字符串
setSessionStorage('example', 'value');
// 值为对象，对象会被转换成字符串
setSessionStorage('example', { a: 1, b: 2 });
```