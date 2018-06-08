<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-12-15 11:19
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="vmodel">
    <div>
      <label :for="value">{{label}}</label>
      <input type="radio" :name="name" :value="value" :id="value" @change="update" :checked="checked === value">
    </div>
  </div>
</template>
<script>
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
        type: String
      },
      label: {
        type: String,
        default: ''
      },
      value: {
        type: String
      },
      name: {
        type: String,
        default: 'name'
      }
    },
    data () {
      return {
        value1: '',
        value2: ''
      }
    },
    methods: {
      update () {
        console.log('组件内部：' + event.target.value);
        this.$emit('change', event.target.value);
      },
      handleInput () {
        this.$emit('input', Number(this.value1 + this.value2));
      }
    },
    watch: {
      value: function (val) {
        console.log('组件内部：' + val);
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
