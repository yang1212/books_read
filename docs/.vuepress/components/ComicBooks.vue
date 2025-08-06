<template>
  <div class="comic-books-container">
    <!-- 添加返回按钮 -->
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="comicBooks" />
  </div>
</template>

<script>
import BookList from './BookList.vue'

export default {
  components: {
    BookList
  },
  data() {
    return {
      comicBooks: [
        {
          id: 1,
          title: '半小时漫画《论语》',
          author: '陈磊·半小时漫画团队',
          coverUrl: '', // 未找到封面图片URL
          path: './B-半小时漫画《论语》'
        },
        {
          id: 2,
          title: '半小时漫画经济学',
          author: '陈磊·半小时漫画团队',
          coverUrl: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/863/29845863/t6_29845863.jpg',
          path: './B-半小时漫画经济学'
        },
        {
          id: 3,
          title: '半小时漫画预防常见病',
          author: '陈磊·半小时漫画团队',
          coverUrl: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/871/33603871/t6_33603871.jpg',
          path: './B-半小时漫画预防常见病'
        },
        {
          id: 4,
          title: '国家是怎样炼成的',
          author: '未知作者',
          coverUrl: '', // 未找到封面图片URL
          path: './G-国家是怎样炼成的'
        },
        {
          id: 5,
          title: '人体是一座大工厂',
          author: '未知作者',
          coverUrl: '', // 未找到封面图片URL
          path: './R-人体是一座大工厂'
        }
      ]
    }
  },
  methods: {
    // 返回上一页的方法
    goBack() {
      window.history.back();
    }
  }
}
</script>

<style scoped>
.comic-books-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 返回按钮样式 */
.back-button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  margin-left: auto; /* 使按钮靠右对齐 */
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #e0e0e0;
}
</style>