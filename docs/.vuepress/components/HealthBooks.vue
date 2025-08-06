<template>
  <div class="health-books-container">
    <!-- 添加返回按钮 -->
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="healthBooks" />
  </div>
</template>

<script>
import BookList from './BookList.vue'

export default {
  components: {
    BookList
  },
  data() {
    return {
      healthBooks: [
        { // 1. C-超强大脑.md
          id: 1,
          title: '超强大脑',
          author: '丹尼尔·亚蒙',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203685856-f6bb5e16-41e2-4710-8119-6e07b6e5c556.jpg',
          path: './C-超强大脑'
        },
        { // 2. D-大脑的故事.md
          id: 4,
          title: '大脑的故事',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203686266-03a6e3fd-8249-4e19-b8fc-a6d99a977cd3.jpg',
          path: './D-大脑的故事'
        },
        { // 3. D-大脑帝国.md
          id: 2,
          title: '大脑帝国',
          author: '卡娅·努尔英恩',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203686623-dc19425b-740a-4a32-94bc-c13cd54db759.jpg',
          path: './D-大脑帝国'
        },
        { // 4. D-大脑通信员：认识你的神经递质.md
          id: 5,
          title: '大脑通信员：认识你的神经递质',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689768-07a4644f-65bc-45c5-912e-1edd888b7b51.jpg',
          path: './D-大脑通信员：认识你的神经递质'
        },
        { // 5. D-大脑整理术.md
          id: 3,
          title: '大脑整理术',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203687389-4d180d62-2a3d-4386-ad30-4e58e7751926.jpg',
          path: './D-大脑整理术'
        },
        { // 6. G-个体心理学.md
          id: 6,
          title: '个体心理学',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203738108-bd350608-7653-4814-922c-1343cdbe9f0c.jpg',
          path: './G-个体心理学'
        },
        { // 7. H-《黄帝内经》内养五脏祛百病.md
          id: 8,
          title: '《黄帝内经》内养五脏祛百病',
          author: '王东坡',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203687454-22c2e648-5e23-44cd-80d5-8f1fdd152272.jpg',
          path: './H-《黄帝内经》内养五脏祛百病'
        },
        { // 8. H-《黄帝内经》养好你的心肝脾肺肾.md
          id: 7,
          title: '《黄帝内经》养好你的心肝脾肺肾',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203687745-3b21856f-e490-4821-b585-34163a59342c.jpg',
          path: './H-《黄帝内经》养好你的心肝脾肺肾'
        },
        { // 9. H-蛤蟆先生去看心理医生.md
          id: 10,
          title: '蛤蟆先生去看心理医生',
          author: '罗伯特·戴博德',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203687873-f25eb0eb-afa0-4656-96ae-8be1b4164347.jpg',
          path: './H-蛤蟆先生去看心理医生'
        },
        { // 10. H-好睡：新的睡眠科学与医学.md
          id: 9,
          title: '好睡：新的睡眠科学与医学',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213077235-3739ba3d-d992-4925-bd0d-f2085fc35caf.jpg',
          path: './H-好睡：新的睡眠科学与医学'
        },
        { // 11. H-黄帝内经十二时辰养生法.md
          id: 11,
          title: '黄帝内经十二时辰养生法',
          author: '《书立方·养生馆》编委会',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203688004-09a6f615-d9cb-407d-b948-e589b2be0c9f.jpg',
          path: './H-黄帝内经十二时辰养生法'
        },
        { // 12. J-积极心理学.md
          id: 13,
          title: '积极心理学',
          author: '文成蹊',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203688111-4d6b1217-b3b9-441d-a3d0-1165099125a7.jpg',
          path: './J-积极心理学'
        },
        { // 13. J-健康脑.md
          id: 12,
          title: '健康脑',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203688263-55b4dc39-ffd0-4c9e-9886-d23e98c5ceb6.jpg',
          path: './J-健康脑'
        },
        { // 14. K-考试脑科学：脑科学中的高效记忆法.md
          id: 14,
          title: '考试脑科学：脑科学中的高效记忆法',
          author: '池谷裕二',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203688326-93c88475-11c7-4f00-8f6b-2514185bfd35.jpg',
          path: './K-考试脑科学：脑科学中的高效记忆法'
        },
        { // 15. N-女性脑.md
          id: 15,
          title: '女性脑',
          author: '丹尼尔·亚蒙',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689036-e4a50a72-9216-461a-81a0-4a1b9e913ea3.jpg',
          path: './N-女性脑'
        },
        { // 16. S-是我把你蠢哭了吗.md
          id: 17,
          title: '是我把你蠢哭了吗',
          author: '迪安·博内特',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689288-5ced2802-767f-404e-9b18-51f760fda3cc.jpg',
          path: './S-是我把你蠢哭了吗'
        },
        { // 17. S-手术两百年.md
          id: 16,
          title: '手术两百年',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689453-f93c6eda-7354-47bd-aa53-77066cd3ee1a.jpg',
          path: './S-手术两百年'
        },
        { // 18. T-体检报告一看就懂.md
          id: 18,
          title: '体检报告一看就懂',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689524-168b6d54-fc6a-4f91-b07f-1c1949b16511.jpg',
          path: './T-体检报告一看就懂'
        },
        { // 19. T-听身体的话.md
          id: 19,
          title: '听身体的话',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213075052-778220a7-6013-496b-9b3c-099823588abe.jpg',
          path: './T-听身体的话'
        },
        { // 20. W-为我的身体养阳气.md
          id: 20,
          title: '为我的身体养阳气',
          author: '武国忠',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689679-cb4d2d5e-d3cd-498f-8b3e-26ab1593f089.jpg',
          path: './W-为我的身体养阳气'
        },
        { // 21. X-学医七年.md
          id: 21,
          title: '学医七年',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213079037-2588bad5-a990-4386-b8c5-d5e6b2e14280.jpg',
          path: './X-学医七年'
        },
        { // 22. Y-一口好牙：把口腔医生带回家.md
          id: 22,
          title: '一口好牙：把口腔医生带回家',
          author: '郝泽良 郝帅',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689937-54fb46d2-3a94-47c4-bf03-de1f82d4d4fe.jpg',
          path: './Y-一口好牙：把口腔医生带回家'
        },
        { // 23. Y-养胃百日去病根.md
          id: 23,
          title: '养胃百日去病根',
          author: '未知作者',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203689872-9b76a7f6-61c4-448f-8f2f-743221d09d72.jpg',
          path: './Y-养胃百日去病根'
        }
      ]
    }
  },
  methods: {
    // 返回上一页的方法
    goBack() {
      window.history.back();
    }
  }
}
</script>

<style scoped>
.health-books-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 返回按钮样式 */
.back-button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  margin-left: auto; /* 添加这行使按钮靠右对齐 */
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #e0e0e0;
}
</style>