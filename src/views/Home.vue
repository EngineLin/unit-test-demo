<template>
  <div class="home">
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :get-american-date="getAmericanDate"
      :date="date"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(LocalizedFormat)
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  name: "home",
  data() {
    return {
      date: dayjs().format('YYYY-MM-DD HH:MM:ss')
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    setInterval(() => {
      this.date = dayjs().format('YYYY-MM-DD HH:MM:ss')
    }, 1000)
  },
  methods: {
    getAmericanDate(date){
      return new Promise(reslove => {
        setTimeout(() => {
          reslove(dayjs(date).format('LLLL'))
        }, 1000);
      })
    }
  }
};
</script>
