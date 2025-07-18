const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, './docs'); // 这里指向 docs 目录

function generateReadmeForFolder(folderPath) {
  const files = fs.readdirSync(folderPath, { withFileTypes: true });

  // 过滤出.md文件，排除README.md
  const mdFiles = files
    .filter(f => f.isFile() && f.name.endsWith('.md') && f.name.toLowerCase() !== 'readme.md')
    .map(f => f.name);

  // 生成目录列表字符串
  const listLines = mdFiles.map(fileName => {
    const title = fileName.replace(/\.md$/i, '');
    return `- [${title}](./${fileName})`;
  });

  const readmeContent = `# 目录

${listLines.join('\n')}
`;

  const readmePath = path.join(folderPath, 'README.md');
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log(`生成 README.md: ${readmePath}`);
}

function main() {
  if (!fs.existsSync(ROOT_DIR)) {
    console.error(`目录不存在: ${ROOT_DIR}`);
    process.exit(1);
  }

  const folders = fs.readdirSync(ROOT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(ROOT_DIR, dirent.name));

  folders.forEach(folder => generateReadmeForFolder(folder));
}

main();
