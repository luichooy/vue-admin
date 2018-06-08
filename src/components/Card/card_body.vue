<template>
  <transition name="slide">
    <div class="mt-card-body" v-if="$parent.isOpen">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'MtCardBody',
    mounted () {
//      console.log('body ');
//      console.log(this.$parent.isOpen);
//      console.log(this.$parent.collapse);
    }
  };
</script>
<style lang="scss" scoped>

  /*.slide-enter-active, .slide-leave-active{*/
    /*transition: height 500ms linear;*/
  /*}*/
  /*.slide-enter, .slide-leave-to{*/
    /*height: 0;*/
  /*}*/
  /*.slide-enter-to, .slide-leave{*/
    /*height: auto;*/
  /*}*/
  .mt-card-body{
    padding: 15px;
    background-color: #fff;
  }
</style>
