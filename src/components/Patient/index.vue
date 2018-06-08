<%--
@Project Name: lzld
@Author: luichooy
@Date: 2017-11-10 09:40
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="patient">
    <div class="show-patient-card">
      <mt-card :collapse="true">
        <mt-card-header>
          <div class="float-left">
            病人基本情况
            <span class="name">周学明</span>
            <i class="el-icon-lzld-shenfenzheng"></i>
            <span class="shenfenzheng">622301196502041310</span>
          </div>
          <div class="float-right">
            <el-input size="mini" @keyup.enter.native="search">
              <i slot="suffix" class="el-input__icon el-icon-search" style="cursor: pointer;" @click="search"></i>
            </el-input>
          </div>
        </mt-card-header>
        <mt-card-body>
          <div class="patientinfo-panel">
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">姓名：</span></el-col>
                  <el-col :span="16"><span class="value">周学明</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">性别：</span></el-col>
                  <el-col :span="16"><span class="value">男</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">身份证号：</span></el-col>
                  <el-col :span="16"><span class="value">622829186403579462</span></el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">年龄：</span></el-col>
                  <el-col :span="16"><span class="value">26</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">联系方式：</span></el-col>
                  <el-col :span="16"><span class="value">15679523486</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="8"><span class="label">院内编号：</span></el-col>
                  <el-col :span="16"><span class="value">622829186403579462</span></el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="3"><span class="label">常住地址：</span></el-col>
                  <el-col :span="16"><span class="value">浙江省杭州市江干区</span></el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </mt-card-body>
      </mt-card>
    </div>
    <div class="add-patient-dialog">
      <el-dialog
        title="添加病人"
        :visible="dialogVisible"
        :append-to-body="true"
        :close-on-click-modal="false"
        :before-close="addPatient">
        <div class="add-patient-wrapper">
          <el-form
            :inline="false"
            label-width="100px"
            label-position="right"
            size="small">
            <el-row>
              <el-col :lg="12" :md="12" :sm="24">
                <el-form-item label="姓名：">
                  <el-input v-model="patient.patientName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="24">
                <el-form-item label="性别：">
                  <el-radio-group v-model="patient.patientSex">
                    <el-radio label="male">男</el-radio>
                    <el-radio label="female">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12" :sm="24">
                <el-form-item label="身份证号：">
                  <el-input v-model="patient.patientIdCard"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="24">
                <el-form-item label="年龄：">
                  <el-input v-model.number="patient.patientAge"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="12" :md="12" :sm="24">
                <el-form-item label="联系方式：">
                  <el-input v-model="patient.patientMobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12" :md="12" :sm="24">
                <el-form-item label="院内编号：">
                  <el-input v-model="patient.patientId"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="常住地址：">
                  <el-cascader
                    :clearable="true"
                    :filterable="true"
                    :options="ADRESS"
                    v-model="address"
                    style="width: 70%;">
                  </el-cascader>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="详细地址：">
                  <el-input v-model="patient.zone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addPatient">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import { MtCard, MtCardHeader, MtCardBody } from 'src/components/Card/index';
  import { ADRESS } from 'src/assets/js/addressData';
  export default {
    mounted () {
      this.ADRESS = ADRESS;
    },
    data () {
      return {
        ADRESS: [],
        address: [],
        patient: {},
        dialogVisible: false
      }
    },
    watch: {
      'patient': {
        handler: function (newValue) {
          this.$emit('change', newValue);
        },
        deep: true
      }
    },
    methods: {
      search () {
        console.log(event.currentTarget);
        this.$confirm('系统中未找到该病人，是否添加该病人到系统中？', '提示', {
          confirmButtonText: '添加',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          this.dialogVisible = true;
        })
        .catch(() => {
          return false;
        });
      },
      addPatient () {
        this.dialogVisible = false;
      }
    },
    components: {
      MtCard,
      MtCardHeader,
      MtCardBody
    }
  };
</script>
<style lang="scss">

  @media screen and (min-width: 1650px) {
    .el-dialog{
      width: 40%!important;
    }
  }
  @media screen and (max-width: 1320px) {
    .el-dialog{
      width: 60%!important;
    }
  }
  @media screen and (max-width: 1100px) {
    .el-dialog{
      width: 70%!important;
    }
  }
  @media screen and (max-width: 991px) {
    .el-dialog{
      width: 50%!important;
    }
    .el-cascader{
      width: 100%!important;
    }
  }

  .patient{
    .show-patient-card{
      .mt-card{
        .mt-card-header{
          .float-left{
            padding-left: 15px;

            .name{
              margin: 0 20px;
              font-weight: bold;
            }

            .el-icon-lzld-shenfenzheng{
              display: inline-block;
              vertical-align: middle;
              margin-top: -3px;
              font-size: 24px;
            }
          }
          .el-input{
            top: -2px;
            font-size: 14px;
          }
        }

        .mt-card-body{
          .patientinfo-panel{
            & > .el-row + .el-row{
              margin-top: 15px;
            }
          }
        }
      }
    }

    .add-patient-dialog{


    }
  }
</style>
