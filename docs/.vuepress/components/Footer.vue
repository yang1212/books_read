<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© {{ new Date().getFullYear() }} 书籍推荐网站</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  margin-bottom: 1rem;
  color: #666;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: #42b983;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>