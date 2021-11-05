### 已完成
1. 用yarn安装各个模块，TypeScript+jQuery+VSCode的整合
2. 所有ts编译到同一个文件(相关配置:tsconfig.json，outFile)
3. TypeScript调用其他ts的类
```typescript
/// <reference path="BasePage.ts"/>
```
4. ss

### 参考
http://www.cnblogs.com/faunjoe88/p/7160650.html

### 搭建环境
```
tsc --init
yarn
yarn add lite-server concurrently @types/jquery@3.3.1 @types/bootstrap@4.0.0

```

### 运行
1. 用lite-server实时编译和刷新脚本
s.cmd:
yarn run start
1. 用chrome debug插件在VSCode中直接调试ts
按F5