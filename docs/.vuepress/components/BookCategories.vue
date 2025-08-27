<template>
  <div class="categories-container">
    <h2 class="categories-title">💫  书籍分类</h2>
    <div class="categories-grid">
      <div class="category-card" v-for="category in categories" :key="category.id"
           @mouseenter="hoveredCategory = category.id"
           @mouseleave="hoveredCategory = null">
        <a :href="category.path" class="category-link">
          <div class="category-icon-container">
            <span class="category-icon">{{ category.icon }}</span>
          </div>
          <h3 class="category-name">{{ category.name }}</h3>
          <p class="category-count">{{ category.count }} 本书</p>
          <div class="category-hover" :class="{ 'show': hoveredCategory === category.id }"></div>
        </a>
      </div>
    </div>
    <br/>
    <br/>
    <h2>💫 精品书籍</h2>
    <p>花高价买的系统读书书单，搭建知识架构～</p>
    <div class="categories-grid">
      <div class="category-card" @mouseenter="hoveredCategory = 100"
           @mouseleave="hoveredCategory = null">
        <a href="/systematic-reading/" class="category-link">
          <div class="category-icon-container">
            <span class="category-icon">🎯</span>
          </div>
          <h3 class="category-name">系统读书</h3>
          <p class="category-count">100 本书</p>
          <div class="category-hover" :class="{ 'show': hoveredCategory === 100 }"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'IT & 技术类', icon: '🖥', path: '/1-IT/', count: 8 },
        { id: 2, name: '医学健康', icon: '🏥', path: '/2-医学健康/', count: 21 },
        { id: 3, name: '人物传记', icon: '👤', path: '/3-传记/', count: 20 },
        { id: 4, name: '经济金融', icon: '💰', path: '/4-经济/', count: 7 },
        { id: 5, name: '历史与文明', icon: '🏛', path: '/5-历史/', count: 14 },
        { id: 6, name: '小说文学', icon: '📚', path: '/6-小说/', count: 12 },
        { id: 7, name: '心灵成长', icon: '🧘', path: '/7-荡平你的心灵/', count: 31 },
        { id: 8, name: '漫画图文', icon: '🎨', path: '/8-漫画/', count: 6 },
        { id: 9, name: '大杂烩', icon: '🌀', path: '/懒得分类的大杂烩/', count: 33 }
      ],
      hoveredCategory: null
    }
  }
}
</script>

<style scoped>
.categories-container {
  max-width: 1200px;
  margin: 10px auto 3rem;
  padding: 10px 20px;
}

.categories-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: left;
  padding-bottom: 25px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.category-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.category-icon-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.category-icon {
  font-size: 2.5rem;
}

.category-name {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

.category-count {
  font-size: 0.9rem;
  color: #666;
}

.category-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 244, 255, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.category-hover.show {
  opacity: 1;
}
</style>






