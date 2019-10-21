<template>
  <div class="hello">
   <h3 class="title">{{ title }}</h3>
   <!-- <input type="date" v-model="date" name="" id=""> -->
   <p class="date">{{ date }}</p>
   <p>{{ americanDate }}</p>
   <button @click="insertDate">click</button>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(LocalizedFormat)

export default {
  name: "HelloWorld",
  data() {
    return {
      americanDate: ''
    }
  },
  methods: {
    async insertDate() {
      this.americanDate = await this.getAmericanDate(this.date)
    }
  },
  props: {
    title: {
      type: String,
      default: 'Default Title'
    },
    getAmericanDate: {
      type: Function,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
