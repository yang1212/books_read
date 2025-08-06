<template>
  <div class="search-container">
    <div class="search-input-group">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="搜索书籍..."
        @input="debounceSearch"
      />
-     <button @click="search"><i class="search-icon">🔍</i></button>
+     <button @click="search"><i class="search-icon"></i></button>
    </div>
    <div class="search-results" v-if="searchResults.length > 0 && searchQuery">
      <h3>搜索结果 ({{ searchResults.length }})</h3>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <a :href="result.path">{{ result.title }}</a>
          <span class="result-category">{{ result.category }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      searchTimer: null,
      // 模拟书籍数据
      books: [
        { id: 1, title: '纳瓦尔宝典', category: '心灵成长', path: '/7-荡平你的心灵/N-纳瓦尔宝典.md' },
        { id: 2, title: '置身事内', category: '经济金融', path: '/4-经济/Z-置身事内：中国政府与经济发展.md' },
        { id: 3, title: '人类简史', category: '历史与文明', path: '/5-历史/人类简史.md' },
        // 可以添加更多书籍数据
      ]
    };
  },
  methods: {
    debounceSearch() {
      if (this.searchTimer) {
        clearTimeout(this.searchTimer);
      }
      this.searchTimer = setTimeout(() => {
        this.search();
      }, 300);
    },
    search() {
      if (!this.searchQuery) {
        this.searchResults = [];
        return;
      }
      const query = this.searchQuery.toLowerCase();
      this.searchResults = this.books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
      );
    }
  }
};
</script>

<style scoped>
.search-container {
  max-width: 600px;
  margin: 0 auto 2rem;
}

.search-input-group {
  display: flex;
  margin-bottom: 1rem;
}

.search-input-group input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.search-input-group button {
  padding: 0.8rem 1.2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-results {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.search-results h3 {
  margin-top: 0;
  font-size: 1.2rem;
  color: #333;
}

.search-results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-results li:last-child {
  border-bottom: none;
}

.search-results a {
  color: #333;
  text-decoration: none;
}

.search-results a:hover {
  color: #42b983;
}

.result-category {
  font-size: 0.8rem;
  color: #666;
  background-color: #f5f5f5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>