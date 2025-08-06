<template>
  <div class="health-books-container">
    <!-- 添加返回按钮 -->
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="economyBooks" />
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
      economyBooks: [
        {
          id: 1,
          title: '国家相册：改革开放四十年的家国',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213066504-df9b139c-b604-424e-b09c-0a7826e5a1ce.jpg',
          path: '/4-经济/G-国家相册：改革开放四十年的家国'
        },
        {
          id: 2,
          title: '牛奶可乐经济学',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213066517-eccfc78c-d953-4a53-94ba-870fd5d858b5.jpg',
          path: '/4-经济/N-牛奶可乐经济学'
        },
        {
          id: 3,
          title: '中国经济2019',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213066526-8715d754-31b4-4e28-a698-743f143c5bc0.jpg',
          path: '/4-经济/Z-中国经济2019'
        },
        {
          id: 4,
          title: '中国经济2020',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213066537-ca57fce6-4390-4d33-bacf-aae091675690.jpg',
          path: '/4-经济/Z-中国经济2020'
        },
        {
          id: 5,
          title: '中国经济2021',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213066548-53e26da2-6b6f-4a18-8fb7-4d13b220450e.jpg',
          path: '/4-经济/Z-中国经济2021'
        },
        {
          id: 6,
          title: '置身事内：中国政府与经济发展',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213066563-3cc60454-e05e-407a-85c4-baa164102e99.jpg',
          path: '/4-经济/Z-置身事内：中国政府与经济发展'
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