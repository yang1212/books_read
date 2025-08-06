const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, './docs');
const STATS_FILE = path.resolve(__dirname, './docs/stats/README.md');

function countFilesInDirectory(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  return files
    .filter(f => f.isFile() && f.name.endsWith('.md') && f.name.toLowerCase() !== 'readme.md')
    .length;
}

function generateStats() {
  const categories = [
    { name: 'IT & 技术类', path: '1-IT' },
    { name: '医学健康', path: '2-医学健康' },
    { name: '人物传记', path: '3-传记' },
    { name: '经济金融', path: '4-经济' },
    { name: '历史与文明', path: '5-历史' },
    { name: '小说文学', path: '6-小说' },
    { name: '心灵成长', path: '7-荡平你的心灵' },
    { name: '漫画图文', path: '8-漫画' },
    { name: '大杂烩', path: '懒得分类的大杂烩' }
  ];

  let totalBooks = 0;
  const tableRows = categories.map(category => {
    const count = countFilesInDirectory(path.join(ROOT_DIR, category.path));
    totalBooks += count;
    return `| ${category.name} | ${count} |`;
  });

  const statsContent = `# 📊 书籍统计

## 总览

共有 **${totalBooks}** 本书籍分类在以下类别中：

## 分类统计

| 分类 | 书籍数量 |
|------|----------|
${tableRows.join('\n')}

## 最近添加

<!-- 可以添加最近添加的书籍 -->
`;

  fs.writeFileSync(STATS_FILE, statsContent, 'utf8');
  console.log(`生成统计文件: ${STATS_FILE}`);
}

generateStats();