<template>
  <div class="mt-card-header">
    <slot></slot>
    <div
      class="collapse"
      ref="collapse"
      :class="{'is-collapse': isCollapse}"
      @click="toggleCard">
      <i :class="foldIconClass" v-if="$parent.foldIcon" ></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MtCardHeader',
    data () {
      return {
        foldIconClass: 'el-icon-arrow-down',
        isCollapse: this.$parent.isOpen
      }
    },
    mounted () {
      let collapse = this.$refs['collapse'];
      if (!collapse.classList.contains('is-collapse')) {
        this.foldIconClass = 'el-icon-arrow-up';
      }
    },
    methods: {
      toggleCard (event) {
        this.isCollapse = !this.isCollapse;
        this.foldIconClass = this.isCollapse ? 'el-icon-arrow-down' : 'el-icon-arrow-up';
        this.$parent._setOpen(this.isCollapse);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/variable.scss';
  .mt-card-header{
    position: relative;
    height: 40px;
    line-height: 40px;
    padding-right: 46px;
    background-color: $cardBackgroundColor;
    color: $cardTextColor;

    .collapse{
      position: absolute;
      right: 0;
      top: 0;
      width: 46px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
</style>
