<template>
  <div class="health-books-container">
    <div class="back-button" @click="goBack">返回</div>
    <BookList :books="biographyBooks" />
  </div>
</template>

<script>
import BookList from './BookList.vue'

export default {
  name: 'BiographyBooks',
  components: {
    BookList
  },
  data() {
    return {
      biographyBooks: [
        {
          id: 1,
          title: '大梦无疆：勇气、想象和现代以色列的建立',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203714465-68499269-eca5-4d07-8b26-9d980810ff97.jpg',
          path: '/3-传记/D-大梦无疆：勇气、想象和现代以色列的建立 '
        },
        {
          id: 2,
          title: '富兰克林自传',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203714675-39b25c70-45c2-4ae9-8895-aebc4917a8df.jpg',
          path: '/3-传记/F-富兰克林自传 '
        },
        {
          id: 3,
          title: 'J·K·罗琳：生命是一个奇迹',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203714816-bac9d5c4-750d-4ecc-805f-2d11bd4ad5f7.jpg',
          path: '/3-传记/J-J·K·罗琳：生命是一个奇迹 '
        },
        {
          id: 4,
          title: '你是人间四月天：林徽因传',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203714993-c38b0fe2-7347-49cb-8bfa-0e16c7ee24e8.jpg',
          path: '/3-传记/N-你是人间四月天：林徽因传 '
        },
        {
          id: 5,
          title: '钱学森画传',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203720472-20219ea0-f01b-441f-9ce0-2e53429f2285.jpg',
          path: '/3-传记/Q-钱学森画传 '
        },
        {
          id: 6,
          title: '人生由我',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203715083-f21a55c0-3371-4e58-b577-2d56e42f0f41.jpg',
          path: '/3-传记/R-人生由我 '
        },
        {
          id: 7,
          title: '任正非传',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203716133-957f11e5-56cc-46a3-a406-53925c2e2ea0.jpg',
          path: '/3-传记/R-任正非传 '
        },
        {
          id: 8,
          title: '宋氏三姐妹',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203717720-8cfc5ff4-671f-4675-bc25-324d37224699.jpg',
          path: '/3-传记/S-宋氏三姐妹 '
        },
        {
          id: 9,
          title: '斯蒂芬·霍金传',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203717653-907226fe-41c3-4836-83bd-5d5e083de44b.jpg',
          path: '/3-传记/S-斯蒂芬·霍金传 '
        },
        {
          id: 10,
          title: '腾讯传',
          author: '吴晓波',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203718534-fec7526d-c0cf-4d09-a06e-2a479459f534.jpg',
          path: '/3-传记/T-腾讯传 '
        },
        {
          id: 11,
          title: '我的伯父周恩来',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719181-085beba3-d71b-4f0a-ae16-b4364c91713a.jpg',
          path: '/3-传记/W-我的伯父周恩来 '
        },
        {
          id: 12,
          title: '向死而生',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719226-df8914e3-ac6e-4910-a73a-ce5dd283fb2a.jpg',
          path: '/3-传记/X-向死而生 '
        },
        {
          id: 13,
          title: '小人物：我和父亲乔布斯',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719253-ccc11802-be97-4590-81aa-e5677888f51f.jpg',
          path: '/3-传记/X-小人物：我和父亲乔布斯 '
        },
        {
          id: 14,
          title: '香奈儿：硬气是我的底色',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719201-96e64c69-f6f1-4651-98fc-d8056edd8c71.jpg',
          path: '/3-传记/X-香奈儿：硬气是我的底色 '
        },
        {
          id: 15,
          title: '一生充和',
          author: '王道',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719917-e8412dd1-a15f-4199-916c-3c2bdb811bed.jpg',
          path: '/3-传记/Y-一生充和 '
        },
        {
          id: 16,
          title: '野蛮CEO雷军',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719276-b210882a-5062-4ce8-a722-07a617d3af7c.jpg',
          path: '/3-传记/Y-野蛮CEO雷军 '
        },
        {
          id: 17,
          title: '在峡江的转弯处',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719962-e23e5ef9-e6d6-4f98-8c46-9eaff1b2cd31.jpg',
          path: '/3-传记/Z-在峡江的转弯处 '
        },
        {
          id: 18,
          title: '张幼仪传：锦瑟年华谁与度',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719977-193654de-e2d9-473e-851e-9df8771a68a3.jpg',
          path: '/3-传记/Z-张幼仪传：锦瑟年华谁与度 '
        },
        {
          id: 19,
          title: '追逐太阳的人：杂交水稻之父袁隆平',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203720001-383c342b-8a5c-4634-9d8a-22e9ca238823.jpg',
          path: '/3-传记/Z-追逐太阳的人：杂交水稻之父袁隆平 '
        },
        {
          id: 20,
          title: '曾国藩传',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/203719942-5c71c247-dd51-4271-8710-cbdc8a170233.jpg',
          path: '/3-传记/Z-曾国藩传 '
        }
      ]
    }
  },
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>

<style scoped>
.health-books-container {
  padding: 20px;
}

.back-button {
  margin-left: auto;
  width: fit-content;
  padding: 8px 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>