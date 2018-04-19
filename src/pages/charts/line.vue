<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-17 16:03
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="line">
    <div class="line-list">
      <el-row style="margin-bottom: 16px;">
        <el-col :span="12" style="padding-right: 4px;">
          <el-card>
            <div slot="header">某周网站访客来源趋势图</div>
            <chart ref="A" :options="optionsA" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-left: 4px;">
          <el-card>
            <div slot="header">未来一周天气变化</div>
            <chart ref="B" :options="optionsB" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="24" style="padding-top: 8px;">
          <el-card>
            <div slot="header">未来一周天气变化</div>
            <chart ref="C" :options="optionsC" style="width: 100%;"></chart>
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
      chartA.showLoading();
      chartB.showLoading();
      chartC.showLoading();
      this.axios.get('getLineData')
      .then(data => {
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
          setTimeout(() => {
            chartA.hideLoading();
            chartB.hideLoading();
            chartC.hideLoading();
          }, 1000);
        } else {
          chartA.hideLoading();
          chartB.hideLoading();
          chartC.hideLoading();
          console.log(data.msg);
        }
      })
      .catch(error => {
        chartA.hideLoading();
        chartB.hideLoading();
        chartC.hideLoading();
        console.log(error);
      });
    },
    data () {
      return {
        optionsA: {
          title: {
            show: false,
            text: '某周网站访客来源趋势图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            bottom: 0,
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: null,
              itemStyle: {
                normal: {
                  color: '#2EC7C9'
                }
              }
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: null,
              itemStyle: {
                normal: {
                  color: '#B6A2DE'
                }
              }
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: null,
              itemStyle: {
                normal: {
                  color: '#5AB1EF'
                }
              }
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: null,
              itemStyle: {
                normal: {
                  color: '#FFB980'
                }
              }
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: null,
              itemStyle: {
                normal: {
                  color: '#D87A80'
                }
              }
            }
          ]
        },
        optionsB: {
          title: {
            show: false,
            text: '未来一周气温变化',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            left: 0,
            data: ['最高气温', '最低气温']
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
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name: '最高气温',
              type: 'line',
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
              name: '最低气温',
              type: 'line',
              data: null,
              itemStyle: {
                normal: {
                  color: '#B6A2DE'
                }
              },
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
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
            text: '某楼盘销售情况',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['意向', '预购', '成交']
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
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '成交',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#5AB1EF',
                  areaStyle: {type: 'default'}
                }
              },
              data: null
            },
            {
              name: '预购',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#BAA8DF',
                  areaStyle: {type: 'default'}
                }
              },
              data: null
            },
            {
              name: '意向',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#2EC7C9',
                  areaStyle: {type: 'default'}
                }
              },
              data: null
            }
          ]
        }
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
