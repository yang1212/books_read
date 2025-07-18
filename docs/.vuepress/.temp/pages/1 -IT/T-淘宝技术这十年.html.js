import comp from "/Users/yangfu/Desktop/work/other/books_read/docs/.vuepress/.temp/pages/1 -IT/T-淘宝技术这十年.html.vue"
const data = JSON.parse("{\"path\":\"/1%20-IT/T-%E6%B7%98%E5%AE%9D%E6%8A%80%E6%9C%AF%E8%BF%99%E5%8D%81%E5%B9%B4.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{}}")
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
