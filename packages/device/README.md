# @lweb-utils/device

> 设备相关工具函数

```bash
npm i @lweb-utils/device --save
```

## 1. getExplore
```javascript
getExplore();
```
获取当前的浏览器信息。
### 参数
无
### 返回值
(string): 浏览器信息，如```chrome: 86.0.4240.198```。
### 示例
```javascript
const browser = getExplore();
```

## 2. getOS
```javascript
getOS();
```
获取当前的操作系统信息。
### 参数
无
### 返回值
(string): 移动端操作系统，如```ios```, ```android```, ```windowsPhone```。
### 示例
```javascript
const os = getOS();
```