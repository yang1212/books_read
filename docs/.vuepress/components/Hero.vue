<template>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">📚 书籍推荐</h1>
      <p class="hero-subtitle">发现你的下一本心仪好书</p>
      <SearchBox />
    </div>
    <div class="hero-wave"></div>
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue';

export default {
  components: {
    SearchBox
  }
}
</script>

<style scoped>
.hero-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem 1.5rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.hero-search {
  display: flex;
  max-width: 400px;
  margin: 0 auto;
}

.hero-search input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.hero-search button {
  padding: 0.8rem 1.2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
}

.hero-search button:hover {
  background-color: #3aa876;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,160C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>