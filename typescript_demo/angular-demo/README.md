### 参考
https://angular.io/guide/quickstart
### 效果
运行npm run start和debug chrome之后，可以在vscode中对ts进行断点调试，并在chrome中实时刷新
### 注解
搜索 xsw:
### 步骤

**安装Angular CLI**  
```
npm install -g @angular/cli

```
**创建新Angular工程**  
会自动创建工程目录
```
ng new angulardemo
```
**运行服务**  
The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
```
ng serve --open
```

**launch.json**  
```
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "launch",
			"name": "启动 Chrome 并打开 localhost",
			"url": "http://localhost:4200",
			"webRoot": "${workspaceFolder}",
			"sourceMaps": true
		}
	]
}
```

**在main.ts中设置断点**  
**F5开始调试**  