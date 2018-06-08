<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-16 12:27
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class='basic'>
    <el-row>
      <el-col :span='24'>
        <el-card>
          <div slot="header">
            基本表格（包含自定义模板，filter，分页组件）
          </div>
          <div class="table-wrapper">
            <el-table
              v-loading="loading"
              element-loading-text="加载数据中"
              :data='tableData'
              border
              :row-class-name="addRowClass">
              <el-table-column label="用户名" prop="username" align="center" width="80"></el-table-column>
              <el-table-column label="头像" align="center" width="80">
                <template slot-scope="scope">
                  <img :src="scope.row.avatar" alt="用户头像" width="42" height="42" style="border-radius: 50%;">
                </template>
              </el-table-column>
              <el-table-column label="评分" prop="score" align="center" width="130">
                <template slot-scope="scope">
                  <score :size="36" :score="scope.row.score"></score>
                </template>
              </el-table-column>
              <el-table-column label="评价类型" align="center" width="80">
                <template slot-scope="scope">{{scope.row.rateType | rateTypeToText}}</template>
              </el-table-column>
              <el-table-column label="送达时间" prop="deliveryTime" align="center" width="80"></el-table-column>
              <el-table-column label="内容" prop="text" align="left" header-align="center"></el-table-column>
              <el-table-column label="推荐" align="left" header-align="center">
                <template slot-scope="scope">
                  <div class="recommend-tag" v-for="(recommend, index) in scope.row.recommend" :key="index">
                    <el-tag>{{recommend}}</el-tag>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="评价时间" align="center" width="160">
                <template slot-scope="scope">
                  <span>{{ scope.row.rateTime | formatDate }}</span>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              style="margin-top: 16px; text-align:right;"
              layout="total, sizes, prev, pager, next, jumper"
              :page-sizes="[5, 10, 15, 20]"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange">
            </el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {formatDate} from 'src/utils/utils';
  import score from 'src/components/Score/index';

  const POSITIVE = 0;
  const NEGATIVE = 1;
  export default {
    created () {
      this.getTableData();
    },
    data () {
      return {
        tableData: [],
        loading: true,
        pagesize: 10,
        currentpage: 1,
        total: 0
      }
    },
    methods: {
      getTableData () {
        this.axios.get(`getTableData?per_page=${this.pagesize}&cur_page=${this.currentpage}`)
        .then(data => {
          if (data.errno === 0) {
            this.tableData = data.data.table;
            this.total = data.data.total;
            this.loading = false;
          } else {
            console.log(data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
      show (scope) {
        console.log(scope);
      },
      handleSizeChange (value) {
        this.pagesize = value;
        this.getTableData();
      },
      handleCurrentChange (value) {
        this.currentpage = value;
        this.getTableData();
      },
      addRowClass ({row, rowIndex}) {
        if (row.rateType === NEGATIVE) {
          return 'warning-row';
        }
      }
    },
    filters: {
      rateTypeToText (rateType) {
        return rateType === POSITIVE ? '满意' : '不满意';
      },
      formatDate (time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    components: {
      score
    }
  };
</script>
<style lang='scss'>
  .basic {
    .el-table {
      .warning-row {
        background-color: oldlace;
      }
    }

    .recommend-tag {
      display: inline-block;
      margin: 4px 0;
      margin-right: 4px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
