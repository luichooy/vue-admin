<!-- @format -->

<template>
  <div class="score" :class="starType">
    <span
      class="score-item"
      v-for="(star, index) in stars"
      :key="index"
      :class="star"
    ></span>
  </div>
</template>
<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'
const CLS_HALF = 'half'
export default {
  props: {
    size: {
      type: Number,
      default: 36
    },
    score: {
      type: Number,
      require: true
    }
  },
  computed: {
    starType() {
      return `star-${this.size}`
    },
    stars() {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }

      if (hasDecimal) {
        result.push(CLS_HALF)
      }

      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }

      return result
    }
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
