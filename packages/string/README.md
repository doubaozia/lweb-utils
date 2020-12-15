# @lweb-utils/string

> 字符串相关工具函数

```bash
npm i @lweb-utils/string --save
```

## 1. fixedZero
```javascript
fixedZero(number)
```
生成两位数字格式的字符串，如```06```，```12```。
### 参数
number(number): 需要生成的数字。
### 返回值
(string): 生成的两位数字符串。
### 示例
```javascript
const num1 = fixedZero(8);
// '08'
const num2 = fixedZero(16);
// '16'
```

## 2. numberWithCommas
```javascript
numberWithCommas(number, decimal)
```
生成逗号分隔的三位数格式字符串。
### 参数
number(string): 纯数字或小数点组成的字符串。
decimal(number): 小数位数。
### 返回值
(string): 逗号分隔的数字字符串。
### 示例
```javascript
// 使用默认小数位数
const result = numberWithCommas('1234567');
// '1,234,567.00'
const result = numberWithCommas('1234567.1234');
// '1,234,567.12'

// 指定小数位数
const result = numberWithCommas('1234567.1234', 3);
// '1,234,567.123'
```

## 3. percentStr
```javascript
percentStr(number, decimal)
```
数字字符串转换成百分比格式。
### 参数
number(string|number): 需要转换的数字或字符串。
decimal(number): 转换成百分比后小数位数。
### 返回值
(string): 百分比格式的字符串。
### 示例
```javascript
// 使用默认小数位数
percentStr(0.123);
// '12.30%'

// 指定小数位数
percentStr(0.123, 1);
// '12.3%'
```

## 4. randomStr
```javascript
randomStr(length)
```
生成指定长度的随机字符串。
### 参数
length(number): 随机字符串的长度，默认为4。
### 返回值
(string): 随机字符串，包含大小写字母和数字。
### 示例
```javascript
// 使用默认长度
const str = randomStr();
// '4Ex6'

// 使用指定长度
const str = randomStr(6);
// '5r8DdU'
```

## 5. toCapital
```javascript
toCapital(string)
```
字符串转换成首字母大写的格式。
### 参数
string(string): 字符串。
### 返回值
(string): 首字母大写的字符串。
### 示例
```javascript
const str = toCapital('abcd');
// 'Abcd'
```
