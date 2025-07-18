import comp from "/Users/yangfu/Desktop/work/other/books_read/docs/.vuepress/.temp/pages/1 -IT/W-Web全栈工程师的自我修养.html.vue"
const data = JSON.parse("{\"path\":\"/1%20-IT/W-Web%E5%85%A8%E6%A0%88%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%9A%84%E8%87%AA%E6%88%91%E4%BF%AE%E5%85%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{}}")
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
