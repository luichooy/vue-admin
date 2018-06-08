<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-20 17:55
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="render">
    <el-form
      ref="form"
      :model="form"
      size="small"
      :inline="false"
      label-position="top">
      <template v-for="(item, index) in formData.fields">

        <!--填空题-->
        <el-form-item :label="item.title" v-if="item.type === 'text'">
          <el-col :span="12">
            <el-input></el-input>
          </el-col>
        </el-form-item>

        <!--时间题-->
        <el-form-item :label="item.title" v-if="item.type === 'time'">
          <el-date-picker
            v-model="item.value"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>

        <!--下拉题-->
        <el-form-item :label="item.title" v-if="item.type === 'select'">
          <el-select placeholder="请选择" v-model="form.sex">
            <el-option v-for="(option_item, option_index) in item.values" :key="option_index" :label="option_item"
                       :value="option_item"></el-option>
          </el-select>
        </el-form-item>

        <!--数字输入题-->
        <el-form-item :label="`${item.title}(${item.unit})`" v-if="item.type === 'number'">
          <el-col :span="4">
            <el-input type="number" v-model.number="form.name">
              <template slot="append">{{item.unit}}</template>
            </el-input>
          </el-col>
        </el-form-item>

        <!--单选题-->
        <el-form-item :label="item.title" v-if="item.type === 'radio'">
          <el-radio-group v-model="form.resource">
            <el-radio v-for="(sub_item, sub_index) in item.values" :key="sub_index" :label="sub_item"
                      :value="sub_item.index"></el-radio>
          </el-radio-group>
          <template v-if="item.sub_fields">
            <el-form-item v-for="(sub_item,sub_index) in item.sub_fields" :key="sub_index">

            </el-form-item>
          </template>
        </el-form-item>


        <el-form-item :label="item.title" v-if="item.type === 'null'">
          <el-row v-for="(sub_item,sub_index) in item.sub_fields" :key="sub_index" style="margin-bottom: 8px;">
            <el-col :span="12">
              <el-input>
                <template slot="prepend">{{sub_item.title}}</template>
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item :label="item.title" v-if="item.type === 'tableRadio'">
          <el-col :span="24">
            <table-radio :data="item"></table-radio>
          </el-col>
        </el-form-item>

        <el-form-item :label="item.title" v-if="item.type === 'table'">
          <el-col :span="24">
            <self-add v-model="formData.fields[index]"></self-add>
          </el-col>
        </el-form-item>

      </template>


      <!--<el-form-item label="即时配送">-->
      <!--<el-switch v-model="form.delivery"></el-switch>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="活动性质">-->
      <!--<el-checkbox-group v-model="form.type">-->
      <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
      <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
      <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
      <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
      <!--</el-checkbox-group>-->
      <!--</el-form-item>-->

      <!--<el-form-item label="活动形式">-->
      <!--<el-input type="textarea" v-model="form.desc"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
      <!--<el-button type="primary" @click="onSubmit">立即创建</el-button>-->
      <!--<el-button>取消</el-button>-->
      <!--</el-form-item>-->
    </el-form>
  </div>
</template>
<script>
  import tableRadio from 'src/components/TableRadio/index';
  import selfAdd from 'src/components/SelfAdd/index';

  export default {
    created () {
      this.axios.get('getFormData')
      .then(data => {
        if (data.errno === 0) {
          this.formData = data.data;
          console.log(this.formData);
        } else {
          console.log(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    data () {
      return {
        formData: {},
        form: {}
      }
    },
    methods: {
      onSubmit () {
      },
      show (value) {
        console.log(1);
        console.log(value);
      }
    },
    watch: {
      'formData': {
        handler: function (newVal, oldVal) {
          console.log(newVal);
        },
        deep: true
      }
    },
    components: {
      tableRadio,
      selfAdd
    }
  };
</script>
<style lang="scss" scoped>
  .render {
    padding: 16px;
    margin-bottom: 16px;
    background-color: #ffffff;
  }
</style>
