<template>
  <div class="featured-container">
    <h2 class="featured-title">✨ 精选推荐</h2>
    <div class="books-carousel">
      <div class="book-card" v-for="book in featuredBooks" :key="book.id">
        <div class="book-cover">
          <div class="cover-placeholder">{{ book.icon }}</div>
        </div>
        <h3 class="book-title">{{ book.title }}</h3>
        <p class="book-author">{{ book.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredBooks: [
        { id: 1, title: '纳瓦尔宝典', author: '埃里克·乔根森', icon: '📖' },
        { id: 2, title: '置身事内', author: '兰小欢', icon: '📚' },
        { id: 3, title: '思考，快与慢', author: '丹尼尔·卡尼曼', icon: '🧠' },
        { id: 4, title: '人类简史', author: '尤瓦尔·赫拉利', icon: '🌍' }
      ]
    }
  }
}
</script>

<style scoped>
.featured-container {
  margin-bottom: 3rem;
}

.featured-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.books-carousel {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.book-card {
  min-width: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
}

.book-cover {
  width: 120px;
  height: 180px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.cover-placeholder {
  font-size: 3rem;
}

.book-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.book-author {
  font-size: 0.9rem;
  color: #666;
}
</style>