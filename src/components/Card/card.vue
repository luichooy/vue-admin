<template>
  <div class="mt-card">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'MtCard',
    props: {
      foldIcon: {
        type: Boolean,
        default: true
      },
      collapse: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isOpen: this.collapse
      }
    },
    methods: {
      _setOpen (open) {
        this.isOpen = open;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .mt-card{
    display: block;
    border-radius: 4px;
    font-size: 14px;
    overflow: hidden;
    border: 1px solid #d8dce5;
  }
</style>
