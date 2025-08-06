<template>
  <div class="home-container">
    <!-- 头部搜索区域 -->
    <div class="hero-section">
      <h1 class="hero-title">📚 书籍推荐</h1>
      <p class="hero-subtitle">发现你的下一本心仪好书</p>
      <!-- <div class="search-box">
        <input type="text" placeholder="搜索书籍..." class="search-input">
        <button class="search-button">🔍</button>
      </div> -->
    </div>

    <!-- 分类导航 -->
    <BookCategories />

    <!-- 热门书籍推荐 -->
    <div class="featured-books">
      <h2 class="section-title">🔥 热门推荐</h2>
      <BookList  :books="featuredBooks" />
    </div>
  </div>
</template>

<script>
import BookCategories from './BookCategories.vue'
import BookList from './BookList.vue'

export default {
  components: {
    BookCategories,
    BookList
  },
  data() {
    return {
      // 这里是示例数据，实际应用中可以从API或文件系统加载
      featuredBooks: [
        {
          id: 1,
          title: '程序员的自我修养',
          author: '吴咏炜',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203682529-da56d4d8-54f9-4e36-82a6-c75d7b6b45fb.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
  background-color: #f0f4ff;
  border-radius: 16px;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: 2px solid #e0e7ff;
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
  outline: none;
}

.search-input:focus {
  border-color: #a5b4fc;
}

.search-button {
  padding: 0 1.5rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #4338ca;
}

.featured-books {
  margin-top: 3rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: left;
  padding-bottom: 25px;
}
</style>