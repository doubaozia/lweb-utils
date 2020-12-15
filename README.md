# lweb-utils
> 前端常用工具函数集

## 用法
1.安装对应的函数包
```bash
$ npm i @lweb-utils/device --save
```

2.引入对应函数

ESM:
```javascript
import { getExplore } from '@lweb-utils/device';

const result = getExplore();

// dosomething...
```
CommonJS:
```javascript
const { getExplore } = require('@lweb-utils/device');

const result = getExplore();

// dosomething...
```


## 结构

### 分包
- @lweb-utils/device
- @lweb-utils/dom
- @lweb-utils/storage
- @lweb-utils/string
- @lweb-utils/url

### 功能
|包名|安装命令|备注|
|---|---|---|
|@lweb-utils/device|npm i @lweb-init/device --save|获取设备信息工具函数|
|@lweb-utils/dom|npm i @lweb-init/dom --save|Dom相关工具函数|
|@lweb-utils/storage|npm i @lweb-init/storage --save|本地存储工具函数|
|@lweb-utils/string|npm i @lweb-init/string --save|字符串工具函数|
|@lweb-utils/url|npm i @lweb-init/url --save|Url相关工具函数|

## API
### Device: [@lweb-utils/device](https://github.com/doubaozia/lweb-utils/blob/main/packages/device/README.md)
- getExplore
- getOS

### Dom: [@lweb-utils/dom](https://github.com/doubaozia/lweb-utils/blob/main/packages/dom/README.md)
- hasClass
- addClass
- removeClass
- copyToClipBoard
- addEvent
- removeEvent
- checkPassiveSupport
- loadImg
- loadScript
- ready
- requestWithoutAjax
- scrollTo
- enableScroll

### Storage: [@lweb-utils/storage](https://github.com/doubaozia/lweb-utils/blob/main/packages/storage/README.md)
- getCookie,
- setCookie,
- removeCookie,
- getStorage,
- setStorage,
- getLocalStorage,
- getSessionStorage,
- setLocalStorage,
- setSessionStorage,

### String: [@lweb-utils/string](https://github.com/doubaozia/lweb-utils/blob/main/packages/string/README.md)
- fixedZero,
- numberWithCommas,
- percentStr,
- randomStr,
- toCapital,


### Url: [@lweb-utils/url](https://github.com/doubaozia/lweb-utils/blob/main/packages/url/README.md)
- getQueryUrl,
- getUrlParam,
- isUrl,
