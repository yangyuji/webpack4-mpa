# webpack4-mpa
webpack4打包多页应用，可以采用es6，sass写jquery多页面了，文件组织方式类似微信小程序，html文件、scss文件、js文件放到同一个文件夹，支持深路径。

### 解决开发的功能包括：
* es6写js
* sass预处理
* postCss处理css兼容
* 分页面打包css文件
* 分页面打包js文件
* css内图片地址
* html内图片地址
* 接口代理
* 热更新
* 发版自动加上hash版本号
* 压缩js,css,html
* 合并小图片成雪碧图

### 示例多页面路径：
```
--- index.html
--- login.html
--- 404.html
--- deep
|   --- page3.html
|   --- page3
|       --- page4.html
```

[在线体验地址](https://yangyuji.github.io/webpack4-mpa/)