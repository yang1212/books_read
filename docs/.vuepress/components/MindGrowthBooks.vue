<template>
  <div class="mind-growth-books-container">
    <button class="back-button" @click="goBack">返回</button>
    <BookList :books="mindGrowthBooks" />
  </div>
</template>

<script>
import BookList from './BookList.vue'

export default {
  name: 'MindGrowthBooks',
  components: {
    BookList
  },
  data() {
    return {
      mindGrowthBooks: [
        {
          id: 1,
          title: '不完美，才美',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097744-da74fbee-a38e-4a30-aae8-f250196218eb.jpg',
          path: './B-不完美，才美'
        },
        {
          id: 2,
          title: '成为极少数',
          author: '老喻',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097765-4175f776-946c-4044-aa79-90ad9cba1ca7.jpg',
          path: './C-成为极少数'
        },
        {
          id: 3,
          title: '成为自己的勇气',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097793-56ffe9b9-d809-45d2-9338-b97c8fb7c68a.jpg',
          path: './C-成为自己的勇气'
        },
        {
          id: 4,
          title: '当呼吸化为空气',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097833-6a0b8e8c-fa71-4e8a-8eec-f760c25509c0.jpg',
          path: './D-当呼吸化为空气'
        },
        {
          id: 5,
          title: '当起点很低理想很高时',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097879-547cc3aa-9b50-45fe-bded-e884cca0400d.jpg',
          path: './D-当起点很低理想很高时'
        },
        {
          id: 6,
          title: '二十几岁，没有十年',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097902-12d83abc-006a-4b96-8eee-9be73e105130.jpg',
          path: './E-二十几岁，没有十年'
        },
        {
          id: 7,
          title: '个体崛起',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097917-693e8e6d-d20c-40da-87b0-29a6cf1442ba.jpg',
          path: './G-个体崛起'
        },
        {
          id: 8,
          title: '力量从哪里来：面对每一个不敢',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097938-1c3a2a2d-b5c2-48ff-acc2-cfefb04036c7.jpg',
          path: './L-力量从哪里来：面对每一个不敢'
        },
        {
          id: 9,
          title: '每一天梦想练习',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213097976-9c1af8dc-8b74-4227-a62e-5fb8dbb41947.jpg',
          path: './M-每一天梦想练习'
        },
        {
          id: 10,
          title: '没有人像你',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098026-d8bd3be7-3bbf-4700-989e-5402cc2e7869.jpg',
          path: './M-没有人像你'
        },
        {
          id: 11,
          title: '你一定要努力，但千万别着急',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098825-24f519ec-a70c-47b2-a9c3-8867808aeeec.jpg',
          path: './N-你一定要努力，但千万别着急'
        },
        {
          id: 12,
          title: '你不是迷茫，而是自制力不强',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098877-01b561c1-dd31-47cb-9dba-e242be747802.jpg',
          path: './N-你不是迷茫，而是自制力不强'
        },
        {
          id: 13,
          title: '你的生存本能正在杀死你',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098893-0fd14919-244a-4ae1-9af2-826eb18a2e0e.jpg',
          path: './N-你的生存本能正在杀死你'
        },
        {
          id: 14,
          title: '你要么出众，要么出局',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098914-bbbc4df1-8d2d-4f8b-b916-ac36f8102319.jpg',
          path: './N-你要么出众，要么出局'
        },
        {
          id: 15,
          title: '纳瓦尔宝典',
          author: '埃里克·乔根森',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098929-9272b62d-fe2b-460f-94c8-6afb68988a68.jpg',
          path: './N-纳瓦尔宝典'
        },
        {
          id: 16,
          title: '如何度过一天的24小时',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098955-30dd4686-5024-4c0c-8457-6463f5e21f01.jpg',
          path: './R-如何度过一天的24小时'
        },
        {
          id: 17,
          title: '认知红利',
          author: '谢春霖',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213098972-0b2dc93a-6973-4e5d-8730-1e6661aba86f.jpg',
          path: './R-认知红利'
        },
        {
          id: 18,
          title: '认知驱动',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099003-84390d89-70aa-47ee-ace6-a64a2444f1ea.jpg',
          path: './R-认知驱动'
        },
        {
          id: 19,
          title: '时间从来不语，却回答了所有问题',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099031-7819a22a-fb5d-4622-a4ce-18a062e831c1.jpg',
          path: './S-时间从来不语，却回答了所有问题'
        },
        {
          id: 20,
          title: '生命的探问',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099055-5bb223ef-76c2-4bbd-a9c3-219e1b79f449.jpg',
          path: './S-生命的探问'
        },
        {
          id: 21,
          title: '我不要你死于一事无成：给女儿的17封告别信',
          author: '法齐娅·库菲',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099071-f0a35373-d1be-4af4-9d51-bf434b913b8f.jpg',
          path: './W-我不要你死于一事无成'
        },
        {
          id: 22,
          title: '我们都一样，年轻又彷徨',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099084-9f116ac1-c361-4a96-9839-f55881871c4c.jpg',
          path: './W-我们都一样，年轻又彷徨'
        },
        {
          id: 23,
          title: '向上生长',
          author: '九边',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099102-faa9ab10-0596-4b5c-bab9-23edc2148776.jpg',
          path: './X-向上生长'
        },
        {
          id: 24,
          title: '向着光亮那方',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099712-2789ebb8-3a22-4034-8b3e-bb309043d134.jpg',
          path: './X-向着光亮那方'
        },
        {
          id: 25,
          title: '心安即是归处',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099734-d9fc84d6-d433-4941-ab3a-1926df470639.jpg',
          path: './X-心安即是归处'
        },
        {
          id: 26,
          title: '斜杠青年：如何开启你的多重身份',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099743-c1568f90-8c5a-42b6-9a50-8cb15f334e0c.jpg',
          path: './X-斜杠青年：如何开启你的多重身份'
        },
        {
          id: 27,
          title: '也曾与全世界为敌',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099771-676f53d1-7665-4e60-995a-ccf7354058b1.jpg',
          path: './Y-也曾与全世界为敌'
        },
        {
          id: 28,
          title: '愿所有美好如期而至',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099785-9edb40f3-ff48-4601-b20c-eb3266aa38ad.jpg',
          path: './Y-愿所有美好如期而至'
        },
        {
          id: 29,
          title: '永远年轻，永远热泪盈眶',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099791-26b608a7-8e53-4132-8a4e-1807162363da.jpg',
          path: './Y-永远年轻，永远热泪盈眶'
        },
        {
          id: 30,
          title: '做不焦虑的年轻人',
          author: '',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099847-842f76a3-8961-4235-9679-45a9a9bdffd3.jpg',
          path: './Z-做不焦虑的年轻人'
        },
        {
          id: 31,
          title: '在绝望中寻找希望：俞敏洪写给迷茫不安的年轻人',
          author: '俞敏洪',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099868-e75fc52c-0f5c-41b1-a733-57cfc10638ec.jpg',
          path: './Z-在绝望中寻找希望'
        },
        {
          id: 32,
          title: '最富足的投资',
          author: '吉姆·罗杰斯',
          coverUrl: 'https://user-images.githubusercontent.com/17806205/213099884-77036dee-2ca8-40fe-ad3b-faa284d7d1fe.jpg',
          path: './Z-最富足的投资'
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
.mind-growth-books-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
  background-color: #e9e9e9;
}
</style>