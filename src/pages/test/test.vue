<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-15 12:33
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="test">
    <el-row>
      <el-col :span="12" style="padding-right: 4px;">
        <el-card>
          <div slot="header">测试数据mock</div>
          <div class="body">
            <el-cascader
              :options="options"
              v-model="selectedOptions">
            </el-cascader>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-left: 4px;">
        <el-card>
          <div slot="header">评分组件</div>
          <div class="body">
            <p>size --- 控制每颗星星的大小，类型为string,备选值分别为24/36/48；</p>
            <p>score --- 传递评分的分数，类型为number</p>
            <score :score="4.6" :size="24" style="margin: 8px 0;"></score>
            <score :score="4" :size="36" style="margin: 8px 0;"></score>
            <score :score="3.4" :size="48"></score>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" style="margin: 8px 0;">
        <el-card>
          <div slot="header">病人组件</div>
          <div class="body">
            <patient></patient>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" style="margin-bottom: 8px;">
        <el-card>
          <div slot="header">tableRadio 组件</div>
          <div class="body">
            <table-radio :data="tableRadioData" border></table-radio>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" style="margin-bottom: 8px;">
        <el-card>
          <div slot="header">table 组件</div>
          <div class="body">
            <self-add border v-model="tableData"></self-add>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" style="margin-bottom: 8px;">
        <el-card style="height: 300px;">
          <div slot="header">topmenu 组件</div>
          <div class="body">
            <div class="top-menu">
              <ul class="menu clearfix">
                <li class="menu-item">
                  HTML5
                  <ul class="sub-menu">
                    <li>article</li>
                    <li>section</li>
                    <li>menu</li>
                    <li>nav</li>
                  </ul>
                </li>
                <li class="menu-item">
                  CSS3
                  <ul class="sub-menu">
                    <li>动画</li>
                    <li>过渡</li>
                    <li>圆形</li>
                    <li>边框</li>
                  </ul>
                </li>
                <li class="menu-item">
                  Jquery
                  <ul class="sub-menu">
                    <li>动画</li>
                    <li>特效</li>
                    <li>AJAX</li>
                  </ul>
                </li>
                <li class="menu-item">
                  JavaScript
                  <ul class="sub-menu">
                    <li>字符串</li>
                    <li>数组</li>
                    <li>对象</li>
                    <li>布尔</li>
                  </ul>
                </li>
              </ul>
            </div>
            <p>浙江省杭州市江干区学正街18号浙江工商大学金沙港生活区</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-right: 4px;">
        <el-card style="height: 300px;">
          <div slot="header">validate-code 组件</div>
          <div class="body">
            <div class="validate-code-wrapper" style="width:150px;height: 40px;">
              <validate-code></validate-code>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding-left: 4px;">
        <el-card style="height: 300px;">
          <div slot="header">validate-code 组件</div>
          <div class="body">
            <div class="validate-code-wrapper">
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import patient from 'src/components/Patient/index';
  import score from 'src/components/Score/index';
  import tableRadio from 'src/components/TableRadio/index';
  import selfAdd from 'src/components/SelfAdd/index';
  import validateCode from 'src/components/ValidateCode/index';
  import vmodel from 'src/components/Vmodel/index';

  export default {
    created () {
      this.getAddressData();
      console.log(this.tableData);
    },
    data () {
      return {
        options: [],
        selectedOptions: [],
        tableRadioData: {
          id: 'b3',
          title: '一周中,您和家人共同进餐(1人或1人以上)的次数如何',
          code: 'B3',
          type: 'tableRadio',
          values: {
            0: '0-1 天/周',
            1: '2-3 天/周',
            2: '4-5 天/周',
            3: '6-7 天/周'
          },
          sub_fields: [
            {
              id: 'breakfast',
              type: 'radio',
              title: '早餐',
              values: {
                0: '0-1 天/周',
                1: '2-3 天/周',
                2: '4-5 天/周',
                3: '6-7 天/周'
              },
              value: null
            },
            {
              id: 'lunch',
              type: 'radio',
              title: '午餐',
              values: {
                0: '0-1 天/周',
                1: '2-3 天/周',
                2: '4-5 天/周',
                3: '6-7 天/周'
              },
              value: null
            },
            {
              id: 'supper',
              type: 'radio',
              title: '晚餐',
              values: {
                0: '0-1 天/周',
                1: '2-3 天/周',
                2: '4-5 天/周',
                3: '6-7 天/周'
              },
              value: null
            }
          ]
        },
        tableData: {
          id: 'use_of_thread_condition',
          title: '导丝的使用情况',
          type: 'table',
          value: [],
          sub_fields: [
            {
              id: 'code_number',
              type: 'text',
              title: '编号',
              value: null
            },
            {
              id: 'name',
              type: 'text',
              title: '名称',
              value: null
            },
            {
              id: 'diameter',
              type: 'number',
              title: '直径',
              unit: 'inch',
              value: null
            }
          ]
        }
      }
    },
    methods: {
      handleClick (e) {
        console.log(e);
        console.log(this);
      },
      getAddressData () {
        let that = this;
        this.axios.get('addressData')
        .then(function (res) {
          const response = res.data;
          if (response.errno === 0) {
            that.options = response.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    watch: {
      'tableRadioData': {
        handler: function (newValue, oldValue) {
          console.log(newValue);
        },
        deep: true
      },
      'tableData': {
        handler: function (newValue, oldValue) {
          console.log(newValue);
        },
        deep: true
      }
    },
    components: {
      patient,
      score,
      tableRadio,
      selfAdd,
      validateCode,
      vmodel
    }
  };
</script>
<style lang="scss">
  .el-card {
    min-height: 150px !important;
  }

  .menu {
    width: 100%;

    .menu-item {
      position: relative;
      width: 150px;
      float: left;
      padding: 0 10px;
      line-height: 40px;
      background-color: #0099ff;
      color: #ffffff;
      box-sizing: border-box;

      &:hover {
        .sub-menu {
          height: 160px;

          li {
            opacity: 1;
          }
        }
      }

      .sub-menu {
        position: absolute;
        left: 0;
        top: 40px;
        width: 150px;
        height: 0;
        overflow: hidden;
        transition: all .3s linear;

        li {
          float: none;
          padding: 0 10px;
          transition: all .3s linear;
          opacity: 0;
          background: #ff9900;
          cursor: pointer;
        }
      }
    }
  }
</style>
