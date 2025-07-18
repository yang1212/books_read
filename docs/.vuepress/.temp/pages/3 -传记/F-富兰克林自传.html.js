import comp from "/Users/yangfu/Desktop/work/other/books_read/docs/.vuepress/.temp/pages/3 -传记/F-富兰克林自传.html.vue"
const data = JSON.parse("{\"path\":\"/3%20-%E4%BC%A0%E8%AE%B0/F-%E5%AF%8C%E5%85%B0%E5%85%8B%E6%9E%97%E8%87%AA%E4%BC%A0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{}}")
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
