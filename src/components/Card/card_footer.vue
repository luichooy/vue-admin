<template>
  <transition name="slide">
    <div class="mt-card-footer" v-if="$parent.isOpen">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'MtCardFooter'
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/variable.scss';
  /*.slide-enter-active, .slide-leave-active{*/
    /*transition: height 500ms linear;*/
  /*}*/
  /*.slide-enter, .slide-leave-to{*/
    /*height: 0;*/
  /*}*/
  /*.slide-enter-to, .slide-leave{*/
    /*height: auto;*/
  /*}*/
  .mt-card-footer{
    min-height: 44px;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    background-color: $cardBackgroundColor;
    color: $cardTextColor;
  }
</style>
