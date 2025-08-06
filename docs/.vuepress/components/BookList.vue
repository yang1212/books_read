<template>
  <div class="book-list-container">
    <div class="book-grid">
      <div class="book-card" v-for="book in books" :key="book.id" @click="navigateToBook(book.path)">
        <div class="book-cover-container">
          <img :src="book.coverUrl" :alt="book.title" class="book-cover">
        </div>
        <h3 class="book-title">{{ book.title }}</h3>
        <!-- <p class="book-author">{{ book.author || '未知作者' }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// 这个组件需要在页面中使用时传入书籍数据
export default {
  props: {
    books: Array
  },
  methods: {
    navigateToBook(path) {
      if (path) {
        // 使用相对路径跳转
        window.location.href = path;
      }
    }
  }
}
</script>

<style scoped>
.book-list-container {
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 20px;
}

.book-list-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.book-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.book-cover-container {
  height: 280px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.book-cover {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.book-card:hover .book-cover {
  transform: scale(1.05);
}

.book-title {
  font-size: 1rem;
  margin: 1rem 0.8rem 0.3rem;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-author {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0.8rem 1rem;
}
</style>