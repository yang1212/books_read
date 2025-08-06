<template>
  <div class="it-books-container">
    <!-- 添加返回按钮 -->
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="itBooks" />
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
      itBooks: [
        {
          id: 1,
          title: '程序员的自我修养',
          author: '吴咏炜',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203682529-da56d4d8-54f9-4e36-82a6-c75d7b6b45fb.jpg',
          path: './C-程序员的自我修养'
        },
        {
          id: 2,
          title: '互联网的下半场',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203684006-61a69a8a-547b-4054-bfa5-0875a804a12b.jpg',
          path: './H-互联网的下半场'
        },
        {
          id: 3,
          title: '前端工程化：体系设计与实践',
          author: '陈刚',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203684044-5760a1f9-c886-4c2f-8fde-f25283027b92.jpg',
          path: './Q-前端工程化：体系设计与实践'
        },
        {
          id: 4,
          title: '淘宝技术这十年',
          author: '阿里巴巴集团',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203684040-08b5686f-350b-4397-96d6-cfb7a5c35dee.jpg',
          path: './T-淘宝技术这十年'
        },
        {
          id: 5,
          title: 'Webpack实战',
          author: '居玉皓',
          coverUrl: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/876/25545876/t6_25545876.jpg',
          path: './W-Webpack实战'
        },
        {
          id: 6,
          title: 'Web全栈工程师的自我修养',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203684061-a13d999b-24c0-4f96-b45c-df0cce1e0ab9.jpg',
          path: './W-Web全栈工程师的自我修养'
        },
        {
          id: 7,
          title: '我的第一本算法书',
          author: '石田保辉',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203684024-a92d07d3-0aef-48fe-b986-0c1d5d5789f3.jpg',
          path: './W-我的第一本算法书'
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
.it-books-container {
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
  margin-left: auto; /* 添加这行使按钮靠右对齐 */
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #e9e9e9;
}

.category-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}
</style>