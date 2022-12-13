# MarkdownPage
[![LICENSE](https://img.shields.io/github/license/acyza/MarkdownPage)](LICENSE)
[![GitHub branch checks state](https://img.shields.io/github/checks-status/acyza/MarkdownPage/main)]()
[![npm](https://img.shields.io/npm/v/markdown-load-page)](https://www.npmjs.com/package/markdown-load-page)
[![npm](https://img.shields.io/npm/dy/markdown-load-page)](https://www.npmjs.com/package/markdown-load-page)  
静态HTML页面动态加载Markdown

>简述
>- github page 是个好东西，用来部署文档非常方便
>- github page部署的方式很多，如：staticWeb,Jekyll等
>- 但看来看去，staticWeb直接加载markdown文档并不是个好办法
>- 用Jekyll只是展示个markdown文档有点大材小用了
>- 如何让文档以静态网页的方式显示，兼顾简单、美观、加载速度快（毕竟国内访问github page的速度太慢了）
>  
>为解决上述问题markdown-load-page应运而生，其页面加载完后跳转仅加载markdown文档，避免反复加载html,js,css等，页面又卡又慢，连加载动画都没有  
>markdown-load-page 大部分依赖都用的cdn方式引入，让页面第一次加载更快更流畅

>基础用法：
>```javascript
>/** 初始化npm项目*/
>npm init -y
>/**安装markdown-load-page */
>npm install markdown-load-page
>```
>创建文件夹/doc将文档放到里面
>##### 注：所有markdown文件都应该被README.md直接或间接索引
>```
>/** 运行mlp(markdown-load-page缩写)复制相关文件到dist文件夹*/
>npx mlp
>```
>将dist文件夹丢入静态文件服务器就可以访问了  

示例效果：我的[前端学习笔记](https://acyza.github.io/FrontEndBlog/)

通过workflow部署到github page的配置模板在[这儿](https://github.com/acyza/MarkdownPage/blob/main/workflow/page.yml)

有bug欢迎issue或pr