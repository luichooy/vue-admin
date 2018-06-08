<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-23 13:19
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="self-add">
    <table :class="tableClsArr">
      <thead>
      <tr>
        <th v-for="(head_item, head_index) in data.sub_fields">
          {{head_item.title}}
          <span class="unit" v-if="head_item.unit">（单位：{{head_item.unit}}）</span>
        </th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row,row_index) in data.value" :key="row.id">
        <td v-for="(column,column_index) in row.value" :key="column.id">
          <el-input size="small" v-model="column.value" v-if="column.type === 'text'"></el-input>
          <el-input type="number" size="small" v-model="column.value" v-if="column.type === 'number'"></el-input>
        </td>
        <td class="operater">
          <el-button size="small" type="primary" class="add-row" @click="addRow">添加</el-button>
          <el-button size="small" type="danger" class="delete-row" @click="deleteRow(row)">删除</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    mounted () {
      this.data.value.push(this.getValueItem());
    },
    model: {
      prop: 'data',
      event: 'change'
    },
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
    data () {
      return {}
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
    methods: {
      getValueItem () {
        let obj = {
          id: '',
          value: []
        };
        let timeStamp = Date.now();
        obj.id = timeStamp;
        this.data.sub_fields.forEach((item, index) => {
          let temp = Object.assign({}, item);
          temp.id = `${temp.id}|${timeStamp}`;
          obj.value.push(temp);
        });
        return obj;
      },
      addRow () {
        console.log(this.value);
        this.data.value.push(this.getValueItem());
      },
      deleteRow (row) {
        this.data.value = this.data.value.filter(item => item.id !== row.id);
        console.log(this.data);
//        console.log(this.options)
//        console.log(row);
      }
    },
    watch: {
      'data': {
        handler: function (newValue, oldValue) {
          this.$emit('change', newValue);
        },
        deep: true
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/table";

  tbody {

    tr {
      .el-button {
        margin: 0 10px;
      }
    }

    tr:last-child {
      .delete-row {
        display: none;
      }
    }

    tr:not(:last-child) {
      .add-row {
        display: none;
      }
    }
  }

  td {
    padding: 12px 16px !important;
  }
</style>
