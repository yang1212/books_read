module.exports = {
  title: '🐙 书籍推荐',
  description: '书籍分类导航',
  themeConfig: {
    nav: [
      { text: '🏠 主站', link: 'https://yangfu.asia' }, 
    ],
    // 恢复侧边栏但设置为可折叠
    sidebar: 'false'
  },
  // 自定义页面布局
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4']
  },
  // 配置页面宽度
  evergreen: true,
  // 配置主机和端口
  host: '0.0.0.0',
  port: 8080,
  // 添加插件支持
  plugins: [
    // 可以添加一些有用的插件
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ]
}