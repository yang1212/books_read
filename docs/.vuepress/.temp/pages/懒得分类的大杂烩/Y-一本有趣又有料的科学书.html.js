import comp from "/Users/yangfu/Desktop/work/other/books_read/docs/.vuepress/.temp/pages/懒得分类的大杂烩/Y-一本有趣又有料的科学书.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%87%92%E5%BE%97%E5%88%86%E7%B1%BB%E7%9A%84%E5%A4%A7%E6%9D%82%E7%83%A9/Y-%E4%B8%80%E6%9C%AC%E6%9C%89%E8%B6%A3%E5%8F%88%E6%9C%89%E6%96%99%E7%9A%84%E7%A7%91%E5%AD%A6%E4%B9%A6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{}}")
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
