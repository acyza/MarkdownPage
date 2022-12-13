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


示例效果：我的[前端学习笔记](https://acyza.github.io/FrontEndBlog/)