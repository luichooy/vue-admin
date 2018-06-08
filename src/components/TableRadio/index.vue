<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-22 10:03
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="table-radio">
    <table :class="tableClsArr">
      <thead>
      <tr>
        <th width="200"></th>
        <th v-for="(column, col_index) in data.values" :key="col_index" width="100">{{column}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, row_index) in data.sub_fields" :key="row_index">
        <td>{{row.title}}</td>
        <td v-for="(radio, radio_index) in row.values" :key="radio_index">
          <input type="radio" v-model="row.value" :name="row.id" :value="radio_index">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object
      },

      // 是否显示 border
      border: {
        type: Boolean,
        default: false
      },

      // 水平对齐方式
      align: {
        type: String,
        default: 'center'
      }
    },
    computed: {
      tableClsArr () {
        let result = [];

        // 是否加边框

        if (this.border) {
          result.push('table-border');
        }

        // 水平对其方式
        switch (this.align) {
          case 'left':
            result.push('is-left');
            break;
          case 'center':
            result.push('is-center');
            break;
          case 'right':
            result.push('is-right');
            break;
          default:
            return new Error('align的值必须为left/center/right');
        }

        return result;
      }
    },
    watch: {
      'tableRadioData': {
        handler: function (newValue, oldValue) {
          this.$emit('update:data', newValue);
        },
        deep: true
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/table";
</style>
