<template>
  <div class="systematic-reading-books-container">
    <!-- 返回顶部按钮 -->
    <button 
      class="back-to-top" 
      @click="scrollToTop" 
      v-show="showBackToTop"
    >
      ↑
    </button>

    <!-- 顶部导航区：返回按钮 + 页面标题 -->
    <header class="page-header">
      <button class="back-button" @click="goBack">
        <i class="back-icon">←</i> 返回
      </button>
      <h1 class="page-title">系统化阅读书单</h1>
    </header>

    <!-- 书单主体：按章节分组渲染 -->
    <main class="books-content">
      <section 
        class="section-card" 
        v-for="(section, sectionIdx) in systematicReadingBooks" 
        :key="section.id"
      >
        <!-- 章节标题栏：含折叠/展开功能 -->
        <div class="section-header" @click="toggleFold(section.id)">
          <h2 class="section-title">
            {{ sectionIdx + 1 }}. {{ section.title }}
            <span class="section-count">（共{{ section.count }}本）</span>
          </h2>
          <i class="fold-icon" :class="{ 'folded': foldStatus[section.id] }">
            {{ foldStatus[section.id] ? '↑' : '↓' }}
          </i>
        </div>

        <!-- 书籍列表：折叠状态控制显示 -->
        <ul class="books-list" v-if="!foldStatus[section.id]">
          <li 
            class="books-item" 
            v-for="(book, bookIdx) in section.books" 
            :key="book.id"
          >
            <span class="book-index">{{ section.startNo + bookIdx }}.</span>
            <span class="book-name">{{ book.name }}</span>
            <span class="book-author">-- {{ book.author }}</span>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 书籍数据结构化：按章节分组，含起始序号（用于自动生成书籍编号）
      systematicReadingBooks: [
        {
          id: 1,
          title: "经济学和大势",
          count: 14,
          startNo: 1,
          books: [
            { id: 101, name: "《经济学原理-微观分册》", author: "曼昆" },
            { id: 102, name: "《宏观经济学》", author: "曼昆" },
            { id: 103, name: "《中国宏观经济学》", author: "徐高" },
            { id: 104, name: "《战略与路径》", author: "黄奇帆" },
            { id: 105, name: "《分析与思考》", author: "黄奇帆" },
            { id: 106, name: "《十次危机》", author: "温铁军" },
            { id: 107, name: "《从冷战到新冷战》", author: "温铁军" },
            { id: 108, name: "《当代中国经济改革教程》", author: "吴敬琏" },
            { id: 109, name: "《繁荣与衰退-美国经济发展史》", author: "格林斯潘" },
            { id: 110, name: "《时代变迁-世界货币、美元地位和人民币的未来》", author: "沃尔克" },
            { id: 111, name: "《21世纪货币政策》", author: "伯南克" },
            { id: 112, name: "《当音乐停止之后》", author: "布林德" },
            { id: 113, name: "《亚洲大趋势-中国和新兴经济体的未来》", author: "乔史塔威尔" },
            { id: 114, name: "《激荡三十年》", author: "吴晓波" }
          ]
        },
        {
          id: 2,
          title: "创业思维",
          count: 19,
          startNo: 15,
          books: [
            { id: 201, name: "《小米创业思考》", author: "雷军" },
            { id: 202, name: "《段永平投资问答录-商业逻辑篇》", author: "段永平" },
            { id: 203, name: "《经营者养成笔记》", author: "柳井正" },
            { id: 204, name: "《一胜九败》", author: "柳井正" },
            { id: 205, name: "《富甲美国：沃尔玛创始人山姆沃尔顿自传》", author: "山姆沃尔顿" },
            { id: 206, name: "《一只小鸟告诉我的事》", author: "比兹斯通" },
            { id: 207, name: "《从0到1-开启商业与未来的秘密》", author: "彼得蒂尔" },
            { id: 208, name: "《经营管理全集》", author: "松下幸之助" },
            { id: 209, name: "《创新者的解答》", author: "克莱顿克里斯坦森" },
            { id: 210, name: "《精益创业-新创企业的成长思维》", author: "埃里克莱斯" },
            { id: 211, name: "《精益创业实战》", author: "阿什莫瑞亚" },
            { id: 212, name: "《重新定义公司-谷歌是如何运营的》", author: "埃里克施密特" },
            { id: 213, name: "《格鲁夫给经理人的第一课》", author: "安迪格鲁夫" },
            { id: 214, name: "《关乎天下-中小企业赢的秘诀》", author: "关明生" },
            { id: 215, name: "《创业维艰-如何完成比难更难的事》", author: "本霍洛维茨" },
            { id: 216, name: "《创业之殇-初创企业为什么失败》", author: "David Feinleib" },
            { id: 217, name: "《大败局》", author: "吴晓波" },
            { id: 218, name: "《大败局2》", author: "吴晓波" },
            { id: 219, name: "《十亿美金的教训》", author: "林军" }
          ]
        },
        {
          id: 3,
          title: "如何做产品",
          count: 12,
          startNo: 34,
          books: [
            { id: 301, name: "《微信背后的产品观》", author: "张小龙" },
            { id: 302, name: "《李想产品实战16讲》", author: "李想" },
            { id: 303, name: "《真需求》", author: "梁宁" },
            { id: 304, name: "《俞军产品方法论》", author: "俞军" },
            { id: 305, name: "《鞋狗》", author: "菲尔奈特" },
            { id: 306, name: "《Little Black Stretchy Pants》", author: "Chip Wilson" },
            { id: 307, name: "《上瘾-让用户养成使用习惯的四大产品逻辑》", author: "尼尔艾亚尔等" },
            { id: 308, name: "《任天堂的体验设计》", author: "玉树真一郎" },
            { id: 309, name: "《启示录-打造用户喜欢的产品》", author: "马蒂卡根" },
            { id: 310, name: "《用户体验要素-以用户为中心的产品设计》", author: "Jesse James Garrett" },
            { id: 311, name: "《用户体验度量-收集、分析与呈现》", author: "特里斯" },
            { id: 312, name: "《简约至上-交互式设计四策略》", author: "Giles Colborne" }
          ]
        },
        {
          id: 4,
          title: "营销和定位",
          count: 14,
          startNo: 46,
          books: [
            { id: 401, name: "《定位》", author: "艾里斯、杰克特劳特" },
            { id: 402, name: "《21世纪的定位》", author: "邓德隆" },
            { id: 403, name: "《升级定位》", author: "冯卫东" },
            { id: 404, name: "《超级符号就是超级创业》", author: "华与华" },
            { id: 405, name: "《参与感》", author: "黎万强" },
            { id: 406, name: "《如何让他买-改变消费者行为的十大策略》", author: "亚当费里尔" },
            { id: 407, name: "《影响力》", author: "罗伯特西奥尼迪" },
            { id: 408, name: "《The culting of Brands》", author: "Douglas Atkin" },
            { id: 409, name: "《疯传》", author: "乔纳伯杰" },
            { id: 410, name: "《引爆点》", author: "马尔科姆格拉德威尔" },
            { id: 411, name: "《很久很久以前-以神话原型打造深植人心的品牌》", author: "玛格丽特马克" },
            { id: 412, name: "《如何让品牌直击人心-品牌的12个心理原型》", author: "玛格丽特马克" },
            { id: 413, name: "《文化战略-以创新的意识形态构建独特的品牌文化》", author: "道格拉斯霍尔特" },
            { id: 414, name: "《第四消费时代》", author: "三浦展" }
          ]
        },
        {
          id: 5,
          title: "流量和增长",
          count: 11,
          startNo: 60,
          books: [
            { id: 501, name: "《流量池》", author: "杨飞" },
            { id: 502, name: "《回头客策略》", author: "谢佳华" },
            { id: 503, name: "《增长黑客-如何低成本实现爆发式增长》", author: "（无标注）" },
            { id: 504, name: "《硅谷增长黑客-实战笔记》", author: "曲卉" },
            { id: 505, name: "《极简增长》", author: "彭志强" },
            { id: 506, name: "《精益数据分析》", author: "阿里斯泰尔克罗尔" },
            { id: 507, name: "《拉新-快速实现用户增长》", author: "加布里埃尔温伯格" },
            { id: 508, name: "《关系飞轮-用户亲密关系如何左右私域及未来增长热潮》", author: "徐志斌" },
            { id: 509, name: "《小群效应》", author: "徐志斌" },
            { id: 510, name: "《直播电商的逻辑》", author: "楚燕来等" },
            { id: 511, name: "《流媒体时代-新媒体和娱乐行业的未来》", author: "迈克尔D史密斯" }
          ]
        },
        {
          id: 6,
          title: "财务金融和法律",
          count: 11,
          startNo: 71,
          books: [
            { id: 601, name: "《财务报表分析必修课》", author: "张新民" },
            { id: 602, name: "《从报表看企业》", author: "张新民" },
            { id: 603, name: "《经营与会计》", author: "稻盛和夫" },
            { id: 604, name: "《中小企业财务报表分析》", author: "张新民" },
            { id: 605, name: "《企业财税合规实战入门》", author: "宋槿篱" },
            { id: 606, name: "《电商财税合规一本通》", author: "春戈" },
            { id: 607, name: "《创业投资法律手册-那些你在创业时期应该知道的公司法知识》", author: "杨春宝" },
            { id: 608, name: "《什么是金融》", author: "米歇尔德赛" },
            { id: 609, name: "《公司金融》", author: "对外经贸大学（慕课）" },
            { id: 610, name: "《金融经济学25讲》", author: "徐高" },
            { id: 611, name: "《公司理财》", author: "达摩达兰" }
          ]
        },
        {
          id: 7,
          title: "股权分配和融资",
          count: 9,
          startNo: 82,
          books: [
            { id: 701, name: "《穿越寒冬-创业者的融资策略与独角兽思维》", author: "史蒂夫霍夫曼" },
            { id: 702, name: "《超级天使投资-捕捉未来商业机会的行动指南》", author: "戴维罗斯" },
            { id: 703, name: "《风险投资的游戏-条款清单全揭秘》", author: "布拉德菲尔德" },
            { id: 704, name: "《股权融资-创业与风险投资》", author: "桂曙光" },
            { id: 705, name: "《创业之初你不可不知的融资秘密-寻找风险投资全揭秘》", author: "桂曙光" },
            { id: 706, name: "《给你一个亿你能干什么-天使投资人写给有梦想的创业者》", author: "查立" },
            { id: 707, name: "《一本书看透股权架构》", author: "李利威" },
            { id: 708, name: "《股权是1》", author: "王坤" },
            { id: 709, name: "《股权战争-创投界的MBA式教案》", author: "苏飞龙" }
          ]
        },
        {
          id: 8,
          title: "团队建设",
          count: 10,
          startNo: 91,
          books: [
            { id: 801, name: "《穷查理宝典》", author: "查理芒格" },
            { id: 802, name: "《高效能人士的七个习惯》", author: "史蒂芬·柯维" },
            { id: 803, name: "《学会提问》", author: "尼尔·布朗" },
            { id: 804, name: "《金字塔原理》", author: "芭芭拉·明托" },
            { id: 805, name: "《创造时间：专注于每天最重要的事》", author: "杰克·纳普&约翰·泽拉茨基" },
            { id: 806, name: "《OKR：源于英特尔和谷歌的目标管理利器》", author: "保罗R尼文" },
            { id: 807, name: "《这就是OKR：让谷歌和亚马逊实现爆炸性增长的工作法》", author: "约翰杜尔" },
            { id: 808, name: "《不拘一格：网飞的自由与责任工作法》", author: "里德哈斯廷斯" },
            { id: 809, name: "《奈飞文化手册》", author: "帕蒂·麦考德" },
            { id: 810, name: "《黄霑创意思维课》", author: "黄霑" }
          ]
        }
      ],
      // 章节折叠状态：默认全部展开
      foldStatus: {},
      // 返回顶部按钮显示控制
      showBackToTop: false
    };
  },
  mounted() {
    // 初始化折叠状态（全部展开）
    this.systematicReadingBooks.forEach(section => {
      this.$set(this.foldStatus, section.id, false);
    });

    // 监听滚动事件，控制返回顶部按钮显示
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // 移除滚动监听，避免内存泄漏
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 返回上一页
    goBack() {
      window.history.back();
    },
    // 切换章节折叠/展开
    toggleFold(sectionId) {
      this.$set(this.foldStatus, sectionId, !this.foldStatus[sectionId]);
    },
    // 监听滚动事件
    handleScroll() {
      // 滚动超过300px时显示返回顶部按钮
      this.showBackToTop = window.scrollY > 300;
    },
    // 平滑返回顶部
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
/* 全局样式：统一字体、清除默认边距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", "system-ui", -apple-system, sans-serif;
}

/* 页面容器：居中+间距 */
.systematic-reading-books-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  background-color: #fafafa;
  min-height: 100vh;
}

/* 顶部导航区：Flex布局，按钮左+标题中 */
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

/* 返回按钮：柔和蓝色+交互反馈 */
.back-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}
.back-button:hover {
  background-color: #337ecc;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.3);
}
.back-button:active {
  background-color: #2662b8;
}
.back-icon {
  font-size: 16px;
}

/* 页面标题：加粗+适中大小 */
.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

/* 章节卡片：白色背景+阴影，区分层级 */
.section-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-bottom: 24px;
  transition: box-shadow 0.2s ease;
}
.section-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

/* 章节标题栏：Flex布局，标题左+折叠图标右 */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 16px;
}

/* 章节标题：加粗+主色下划线 */
.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  position: relative;
  padding-right: 16px;
}
.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 40px;
  height: 3px;
  background-color: #409eff;
  border-radius: 3px;
}

/* 章节数量：浅灰+小字体 */
.section-count {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin-left: 8px;
}

/* 折叠图标：浅灰+旋转过渡 */
.fold-icon {
  font-size: 16px;
  color: #999;
  transition: transform 0.2s ease;
}
.fold-icon.folded {
  transform: rotate(180deg);
}

/* 书籍列表：无序列表重置 */
.books-list {
  list-style: none;
}

/* 书籍项：Flex布局+间距+悬停效果 */
.books-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
}
.books-item:hover {
  background-color: #f5f7fa;
}

/* 书籍序号：主色+圆形背景 */
.book-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #e6f7ff;
  color: #409eff;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 500;
  margin-right: 12px;
}

/* 书籍名称：加粗+深灰 */
.book-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  flex: 1; /* 书名占满剩余空间，作者靠右 */
}

/* 书籍作者：浅灰+小字体 */
.book-author {
  font-size: 13px;
  color: #666;
  white-space: nowrap; /* 作者名不换行 */
  margin-left: 12px;
}

/* 返回顶部按钮：固定右下角+圆形 */
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 44px;
  height: 44px;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.3);
  transition: all 0.2s ease;
  z-index: 100;
}
.back-to-top:hover {
  background-color: #337ecc;
  transform: translateY(-2px);
}
.back-to-top:active {
  background-color: #2662b8;
  transform: translateY(0);
}

/* 响应式适配：手机端（屏幕<768px） */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .page-title {
    font-size: 20px;
  }
  .section-card {
    padding: 16px;
  }
  .section-title {
    font-size: 16px;
  }
  .books-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 12px;
  }
  .book-author {
    margin-left: 0;
    margin-left: 36px; /* 与序号对齐 */
  }
  .back-to-top {
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>