import comp from "/Users/yangfu/Desktop/work/other/books_read/docs/.vuepress/.temp/pages/1 -IT/W-Webpack实战.html.vue"
const data = JSON.parse("{\"path\":\"/1%20-IT/W-Webpack%E5%AE%9E%E6%88%98.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{}}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
