<template><div><img src="https://wfqqreader-1252317822.image.myqcloud.com/cover/876/25545876/t6_25545876.jpg" alt="书籍封面" class="wr_bookCover_img">
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3>
<p>这是一本能指导读者零基础快速掌握Webpack并轻松进阶的实战性著作。作者是资深的前端工程师，在Webpack领域有深厚的积累，是知名开源打包工具YKit的主导者和核心开发者。本书从功能特性、工作原理、应用实践、性能优化4个维度对Webpack进行了全面的讲解，内容上尽力避免了网络上已经公开发表的各种资料和文档，而是从作者的实际经验出发，将更有价值的内容呈现给读者，尽量帮助读者少走弯路。全书一共10章：第1章是一个快速的指引，介绍了Webpack的概念、适用场景、开发环境搭建，以及如何快速上手。第2-7章详细讲解了Webpack的各项功能特性及其工作原理，同时讲解了它们的适用场景，以及如何付诸实践。第8~9章深入总结了打包的性能优化和开发环境的优化。第10章介绍了其他打包工具并对这些工具进行了各项特性的对比。</p>
<h3 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记"><span>笔记</span></a></h3>
<blockquote>
<p>1、为什么选择Webpack</p>
</blockquote>
<p>1）Webpack默认支持多种模块标准，包括AMD、CommonJS，以及最新的ES6模块，而其他工具大多只能支持一到两种。这对于一些同时使用多种模块标准的工程非常有用，Webpack会帮我们处理好不同类型模块之间的依赖关系。</p>
<p>2）Webpack有完备的代码分割（code splitting）解决方案。从字面意思去理解，它可以分割打包后的资源，首屏只加载必要的部分，不太重要的功能放到后面动态地加载。这对于资源体积较大的应用来说尤为重要，可以有效地减小资源体积，提升首页渲染速度。</p>
<p>3）Webpack可以处理各种类型的资源。除了JavaScript以外，Webpack还可以处理样式、模板，甚至图片等，而开发者需要做的仅仅是导入它们。比如你可以从JavaScript文件导入一个CSS或者PNG，而这一切最终都可以由第4章讲到的loader来处理。</p>
<p>4）Webpack拥有庞大的社区支持。除了Webpack核心库以外，还有无数开发者来为它编写周边插件和工具，绝大多数的需求你都可以直接找到已有解决方案，甚至会有多个解决方案供你挑选。</p>
<blockquote>
<p>2、webpack-dev-server</p>
</blockquote>
<p>1）当webpack-dev-server接收到浏览器的资源请求时，它会首先进行URL地址校验。如果该地址是资源服务地址（上面配置的publicPath），就会从Webpack的打包结果中寻找该资源并返回给浏览器。</p>
<p>2）综上我们可以总结出webpack-dev-server的两大职能： ·令Webpack进行模块打包，并处理打包结果的资源请求。 ·作为普通的Web Server，处理静态资源文件请求。</p>
<p>3）直接用Webpack开发和使用webpack-dev-server有一个很大的区别，前者每次都会生成budnle.js，而webpack-dev-server只是将打包结果放在内存中，并不会写入实际的bundle.js，在每次webpack-dev-server接收到请求时都只是将内存中的打包结果返回给浏览器。</p>
<p></p>
<p></p>
</div></template>


