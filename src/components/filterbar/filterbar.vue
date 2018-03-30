<template>
  <div class="filterbar">
    <div class="filterbar-item" v-for="(filter,index) in filters" :key="filter.key">
      <div class="form-field">
        <el-cascader
          placeholder="表名 / 字段名"
          size="small"
          :clearable="true"
          :props="{value:'id'}"
          :options="treeMenuData"
          v-model="filter.field">
        </el-cascader>
        <el-select
          size="small"
          v-model="filter.comparison">
          <el-option
            v-for="item in [{label: '大于', value: 'more'}, {label: '等于', value: 'equal'}, {label: '小于', value: 'less'}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input
          v-model="filter.value"
          size="small"
        ></el-input>
        <el-select
          size="small"
          v-model="filter.logic">
          <el-option
            v-for="item in [{label: '并且', value: 'and'}, {label: '或者', value: 'or'}, {label: '非', value: 'no'}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="handle-field align-right">
        <el-tooltip content="删除" placement="top">
          <i class="icon el-icon-lzld-remove" @click="removeItem(filter)"></i>
        </el-tooltip>
        <el-tooltip content="新增" placement="top">
          <i class="icon el-icon-lzld-add" @click="addItem"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        filters: [{
          key: Date.now(),
          field: [],
          comparison: '',
          value: '',
          logic: ''
        }],
        treeMenuData: [{
          id: 1,
          label: '健康调查表',
          children: [{
            id: 11,
            label: '基本信息',
            children: [{
              id: 111,
              label: '样本编号'
            }, {
              id: 112,
              label: '姓名'
            }, {
              id: 113,
              label: '性别'
            }, {
              id: 114,
              label: '身份证号'
            }, {
              id: 115,
              label: '联系地址'
            }]
          }, {
            id: 12,
            label: '表格数据'
          }, {
            id: 13,
            label: '诊断信息'
          }]
        }, {
          id: 2,
          label: '内镜检查信息表',
          children: [{
            id: 21,
            label: '二级 2-1'
          }, {
            id: 22,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '幽门螺杆菌感染检查表',
          children: [{
            id: 31,
            label: '二级 3-1'
          }, {
            id: 32,
            label: '二级 3-2'
          }]
        }, {
          id: 4,
          label: '宫颈癌检查结果表',
          children: [{
            id: 41,
            label: '二级 3-1'
          }, {
            id: 42,
            label: '二级 3-2'
          }]
        }, {
          id: 5,
          label: '乳腺癌检查结果表',
          children: [{
            id: 51,
            label: '二级 3-1'
          }, {
            id: 52,
            label: '二级 3-2'
          }]
        }, {
          id: 6,
          label: '血液检查结果表',
          children: [{
            id: 61,
            label: '二级 3-1'
          }, {
            id: 62,
            label: '二级 3-2'
          }]
        }, {
          id: 7,
          label: '腹部B超结果表',
          children: [{
            id: 71,
            label: '二级 3-1'
          }, {
            id: 72,
            label: '二级 3-2'
          }]
        }, {
          id: 8,
          label: '上消化道病理诊断表',
          children: [{
            id: 81,
            label: '二级 3-1'
          }, {
            id: 82,
            label: '二级 3-2'
          }]
        }, {
          id: 9,
          label: '宫颈癌病理诊断表',
          children: [{
            id: 91,
            label: '二级 3-1'
          }, {
            id: 92,
            label: '二级 3-2'
          }]
        }, {
          id: 10,
          label: '乳腺癌病理诊断表',
          children: [{
            id: 101,
            label: '二级 3-1'
          }, {
            id: 102,
            label: '二级 3-2'
          }]
        }, {
          id: 11,
          label: '胃癌病历表',
          children: [{
            id: 111,
            label: '二级 3-1'
          }, {
            id: 112,
            label: '二级 3-2'
          }]
        }]
      }
    },
    methods: {
      addItem () {
        this.filters.push({
          key: Date.now(),
          field: [],
          comparison: '',
          value: '',
          logic: ''
        });
      },
      removeItem (filter) {
        this.filters = this.filters.filter((item) => item.key !== filter.key);
      }
    },
    watch: {
      'filters': {
        handler: function (newValue, oldValue) {
          this.$emit('change', newValue);  // 对外派发change事件， 在父组件中通过change事件来获取筛选数据
        },
        deep: true
      }
    }
  };
</script>
<style lang="scss" scoped>
  .filterbar{

    .filterbar-item + .filterbar-item{
      margin-top: 8px;
    }

    .filterbar-item{
      display: flex;

      &:last-child{
        .el-icon-lzld-remove{
          display: none;
        }
      }

      &:not(:last-child){
        .el-icon-lzld-add{
          display: none;
        }
      }

      .form-field{
        flex: 1 1 auto;

        .el-select{
          width: 100px;
        }


        @media screen and (max-width: 1110px) {
          .el-cascader{
            width: 150px;
          }
        }

        @media screen and (max-width: 1239px) {
          .el-input{
            width: 100px;
          }
        }

        @media screen and (min-width: 1240px) {
          .el-input{
            width: 150px;
          }
        }

        @media screen and (min-width: 1300px) {
          .el-input{
            width: 250px;
          }
        }

        @media screen and (min-width: 1400px) {
          .el-cascader{
            width: 300px;
          }
        }
        @media screen and (min-width: 1500px) {
          .el-cascader{
            width: 400px;
          }
        }
      }

      .handle-field{
        flex: 0 0 70px;
        .icon{
          width: 32px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }



  }
</style>
