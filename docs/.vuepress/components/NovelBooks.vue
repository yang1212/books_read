<template>
  <div class="novel-books-container">
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="novelBooks" />
  </div>
</template>

<script>
import BookList from './BookList.vue'

export default {
  name: 'NovelBooks',
  components: {
    BookList
  },
  data() {
    return {
      novelBooks: [
        {
          id: 1,
          title: '活着',
          author: '余华',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070055-b76a0fd6-6d09-49fe-9bbf-6d689e651674.jpg',
          path: '/6-小说/H-活着'
        },
        {
          id: 2,
          title: '三体',
          author: '刘慈欣',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070168-8bce2d9f-43cc-4cde-bdca-e3a1debb51b9.jpg',
          path: '/6-小说/S-三体'
        },
        {
          id: 3,
          title: '追风筝的人',
          author: '卡勒德·胡赛尼',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070234-36e24639-7db9-4524-87c0-12e35dccc2f4.jpg',
          path: '/6-小说/Z-追风筝的人'
        },
        {
          id: 4,
          title: '茶花女',
          author: '小仲马',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070017-ed4fa0e0-94f6-44b9-a8e2-85c0a6cb8c38.jpg',
          path: '/6-小说/C-茶花女'
        },
        {
          id: 5,
          title: '飘',
          author: '玛格丽特·米切尔',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070132-68681071-cceb-48cd-bdce-d55b5ff451f7.jpg',
          path: '/6-小说/P-飘'
        },
        {
          id: 6,
          title: '一句顶一万句',
          author: '刘震云',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070199-72d3d4ff-58fa-4680-a5a8-fbb90af5d845.jpg',
          path: '/6-小说/Y-一句顶一万句'
        },
        {
          id: 7,
          title: '长腿叔叔',
          author: '简·韦伯斯特',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070036-8da6598b-c71e-4233-96ae-e2df7f57929b.jpg',
          path: '/6-小说/C-长腿叔叔'
        },
        {
          id: 8,
          title: '饥饿的女儿',
          author: '虹影',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070095-3ecaaa9f-3de4-413a-a66d-4d6b3b9c93e1.jpg',
          path: '/6-小说/J-饥饿的女儿'
        },
        {
          id: 9,
          title: '那些回不去的年少时光',
          author: '桐华',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070107-6002a4fb-8fac-4094-b545-435628fdf6ef.jpg',
          path: '/6-小说/N-那些回不去的年少时光'
        },
        {
          id: 10,
          title: '天蓝色的彼岸',
          author: '艾利克斯·希尔',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070184-1a79ae2a-ea83-4357-baaa-2a4b2eff7aa5.jpg',
          path: '/6-小说/T-天蓝色的彼岸'
        },
        {
          id: 11,
          title: '以色列的诞生',
          author: '赫尔曼·沃克',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213070221-3c6078bc-80b2-4981-9f0a-feef83034e95.jpg',
          path: '/6-小说/Y-以色列的诞生'
        }
      ]
    }
  },
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>

<style scoped>
.novel-books-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
</style>