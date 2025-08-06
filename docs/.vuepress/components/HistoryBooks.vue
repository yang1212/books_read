<template>
  <div class="health-books-container">
    <!-- 添加返回按钮 -->
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="historyBooks" />
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
      historyBooks: [
        {
          id: 1,
          title: '北京1643',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068254-be551ac5-92c3-4692-901a-c0d8fc3ae7cb.jpg',
          path: '/5-历史/B-北京1643'
        },
        {
          id: 2,
          title: '当书法穿越唐朝',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213078007-b0ccf37b-b9af-430d-a92c-bd8b984abdfc.jpg',
          path: '/5-历史/D-当书法穿越唐朝'
        },
        {
          id: 3,
          title: '芬兰的逆袭',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068270-166b9ed2-129e-4352-8f89-22da5d47c504.jpg',
          path: '/5-历史/F-芬兰的逆袭'
        },
        {
          id: 4,
          title: '风雪定陵：明定陵地下玄宫洞开记',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068324-8e4a52ac-3ab4-4727-a209-c15190222799.jpg',
          path: '/5-历史/F-风雪定陵：明定陵地下玄宫洞开记'
        },
        {
          id: 5,
          title: '古代人的日常生活',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068336-2f090667-f2e9-4ecc-9dd9-0c666ad8431b.jpg',
          path: '/5-历史/G-古代人的日常生活'
        },
        {
          id: 6,
          title: '谷物的故事',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068360-7f3bdc6a-0f72-4add-bcc8-f66fd155a590.jpg',
          path: '/5-历史/G-谷物的故事'
        },
        {
          id: 7,
          title: '历史的温度',
          author: '张玮',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068401-ae49073c-490a-4c3f-af78-69e8544e5431.jpg',
          path: '/5-历史/L-历史的温度'
        },
        {
          id: 8,
          title: '明朝那些事儿',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068428-e8b4b1bc-4612-4e29-bab4-353ff9ea6cd3.jpg',
          path: '/5-历史/M-明朝那些事儿'
        },
        {
          id: 9,
          title: '南京大屠杀',
          author: '张纯如',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068467-7f363eca-ab3e-4e9a-9b07-9331dcab1d06.jpg',
          path: '/5-历史/N-南京大屠杀'
        },
        {
          id: 10,
          title: '我眼中的殖民时代香港',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068487-bdcfabdc-097e-4ed0-ae68-894e3d7908da.jpg',
          path: '/5-历史/W-我眼中的殖民时代香港'
        },
        {
          id: 11,
          title: '以色列2：在危机中生存',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068517-f3c2333e-6bc2-4e42-b284-7c3644d26faf.jpg',
          path: '/5-历史/Y-以色列2：在危机中生存'
        },
        {
          id: 12,
          title: '以色列谷',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068540-10d3f7d0-31b5-4392-bdeb-6894320db25c.jpg',
          path: '/5-历史/Y-以色列谷'
        },
        {
          id: 13,
          title: '以色列：一个国家的诞生',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213068504-a42e6fb8-61d1-4e0b-a1a0-4d9ac87395a1.jpg',
          path: '/5-历史/Y-以色列：一个国家的诞生'
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
.health-books-container {
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
  background-color: #e0e0e0;
}
</style>