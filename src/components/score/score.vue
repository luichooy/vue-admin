<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-20 13:26
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="score" :class="starType">
    <span class="score-item" v-for="(star, index) in stars" :key="index" :class="star"></span>
  </div>
</template>
<script>
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_OFF = 'off';
  const CLS_HALF = 'half';
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
      starType () {
        return `star-${this.size}`;
      },
      stars () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }

        if (hasDecimal) {
          result.push(CLS_HALF);
        }

        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }

        return result;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/mixin";
  .score {
    display: block;
    font-size: 0;
    .score-item {
      display: inline-block;
      background-repeat: no-repeat
    }

    &.star-24{
      .score-item{
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;

        &:last-child{
          margin-right: 0;
        }

        &.on{
          @include bg-image("images/star24_on");
        }
        &.off{
          @include bg-image("images/star24_off");
        }
        &.half{
          @include bg-image("images/star24_half");
        }
      }
    }

    &.star-36{
      .score-item{
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 15px 15px;

        &:last-child{
          margin-right: 0;
        }

        &.on{
          @include bg-image("images/star36_on");
        }
        &.off{
          @include bg-image("images/star36_off");
        }
        &.half{
          @include bg-image("images/star36_half");
        }
      }
    }

    &.star-48{
      .score-item{
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;

        &:last-child{
          margin-right: 0;
        }

        &.on{
          @include bg-image("images/star48_on");
        }
        &.off{
          @include bg-image("images/star48_off");
        }
        &.half{
          @include bg-image("images/star48_half");
        }
      }
    }
  }
</style>
