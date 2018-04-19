<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-17 11:37
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="bar">
    <div class="bar-list">
      <el-row style="margin-bottom: 16px;">
        <el-col :span="24" style="padding-bottom: 8px;">
          <el-card>
            <div slot="header">某周网站访客来源分析</div>
            <chart ref="A" :options="optionsA" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-right: 4px;">
          <el-card>
            <div slot="header">某地区1-6月份蒸发量和降水量（虚构数据）</div>
            <chart ref="B" :options="optionsB" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-left: 4px;">
          <el-card>
            <div slot="header">收支盈利统计图</div>
            <chart ref="C" :options="optionsC" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="24" style="padding-top: 8px;">
          <el-card>
            <div slot="header">世界人口总量（数据来自网络）</div>
            <chart ref="D" :options="optionsD" style="width: 100%;"></chart>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      const chartA = this.$refs['A'];
      const chartB = this.$refs['B'];
      const chartC = this.$refs['C'];
      const chartD = this.$refs['D'];
      chartA.showLoading();
      chartB.showLoading();
      chartC.showLoading();
      chartD.showLoading();
      this.axios.get('getBarData')
      .then(data => {
        console.log(data);
        if (data.errno === 0) {
          const options = data.data;
          chartA.mergeOptions({
            series: options.optionsA.series
          });
          chartB.mergeOptions({
            series: options.optionsB.series
          });
          chartC.mergeOptions({
            series: options.optionsC.series
          });
          chartD.mergeOptions({
            series: options.optionsD.series
          });
          setTimeout(() => {
            chartA.hideLoading();
            chartB.hideLoading();
            chartC.hideLoading();
            chartD.hideLoading();
          }, 1000);
        } else {
          chartA.hideLoading();
          chartB.hideLoading();
          chartC.hideLoading();
          chartD.hideLoading();
          console.log(data.msg);
        }
      })
      .catch(error => {
        chartA.hideLoading();
        chartB.hideLoading();
        chartC.hideLoading();
        chartD.hideLoading();
        console.log(error);
      });
    },
    data () {
      return {
        optionsA: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'value'
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '邮件营销',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '视频广告',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '搜索引擎',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            }
          ]
        },
        optionsB: {
          title: {
            show: false,
            text: '某地区蒸发量和降水量',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            left: 0,
            data: ['蒸发量', '降水量']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          xAxis: [
            {
              data: ['1月', '2月', '3月', '4月', '5月', '6月']
            }
          ],
          yAxis: {},
          series: [
            {
              name: '蒸发量',
              type: 'bar',
              data: null,
              itemStyle: {
                normal: {
                  color: '#2EC7C9'
                }
              },
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '降水量',
              type: 'bar',
              data: null,
              itemStyle: {
                normal: {
                  color: '#B6A2DE'
                }
              },
              markPoint: {
                data: [
                  {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                  {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            }
          ]
        },
        optionsC: {
          title: {
            show: false,
            text: '收支盈利统计图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['利润', '支出', '收入']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          xAxis: {type: 'value'},
          yAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          series: [
            {
              name: '利润',
              type: 'bar',
              itemStyle: {
                normal: {
                  label: {show: true, position: 'inside'},
                  color: '#1790CF'
                }
              },
              data: null
            },
            {
              name: '收入',
              type: 'bar',
              stack: '总量',
              barWidth: 5,
              itemStyle: {
                normal: {
                  label: {show: true, position: 'right'},
                  color: '#99D2DD'
                }
              },
              data: null
            },
            {
              name: '支出',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  label: {show: true, position: 'left'},
                  color: '#1BB2D8'
                }
              },
              data: null
            }
          ]
        },
        optionsD: {
          title: {
            show: false,
            text: '世界人口总量',
            subtext: '数据来自网络'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
//          calculable: true,
          xAxis: [
            {
              type: 'value',
              boundaryGap: [0, 0.01]
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            }
          ],
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: null,
              itemStyle: {
                normal: {
                  color: '#FF7F50'
                }
              }
            },
            {
              name: '2012年',
              type: 'bar',
              data: null,
              itemStyle: {
                normal: {
                  color: '#87CEFA'
                }
              }
            }
          ]
        }
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
