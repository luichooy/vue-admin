<%--
@Project Name: vue-admin
@Author: luichooy
@Date: 2017-11-16 12:29
@Email: luichooy@163.com
@Idea: WebStorm
--%>

<template>
  <div class="pie">
    <div class="pie-list">
      <el-row style="margin-bottom: 16px;">
        <el-col :span="24" style="padding-bottom: 8px;">
          <el-card>
            <div slot="header">网站访客来源分析</div>
            <chart ref="B" :options="optionsB" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-right: 4px;">
          <el-card>
            <div slot="header">某站点用户访问来源（纯属虚构）</div>
            <chart ref="A" :options="optionsA" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-left: 4px;">
          <el-card>
            <div slot="header">未来一周天气变化</div>
            <chart ref="C" :options="optionsC" style="width: 100%;"></chart>
          </el-card>
        </el-col>
        <el-col :span="24" style="padding-top: 8px;">
          <el-card>
            <div slot="header">南丁格尔玫瑰图</div>
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
      this.axios.get('getPieData')
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
          title: {
            show: false,
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                  funnel: {
                    x: '25%',
                    width: '50%',
                    funnelAlign: 'left',
                    max: 1548
                  }
                }
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {
                  value: null,
                  name: '直接访问',
                  itemStyle: {
                    normal: {
                      color: '#2EC7C9'
                    }
                  }
                },
                {
                  value: null,
                  name: '邮件营销',
                  itemStyle: {
                    normal: {
                      color: '#B6A2DE'
                    }
                  }
                },
                {
                  value: null,
                  name: '联盟广告',
                  itemStyle: {
                    normal: {
                      color: '#5AB1EF'
                    }
                  }
                },
                {
                  value: null,
                  name: '视频广告',
                  itemStyle: {
                    normal: {
                      color: '#FFB980'
                    }
                  }
                },
                {
                  value: null,
                  name: '搜索引擎',
                  itemStyle: {
                    normal: {
                      color: '#D87A80'
                    }
                  }
                }
              ]
            }
          ]
        },
        optionsB: {
          title: {
            text: '网站访客来源分析'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            top: 40,
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: false,
          series: [
            {
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, 70],

              // for funnel
              x: '20%',
              width: '40%',
              funnelAlign: 'right',
              max: 1548,

              itemStyle: {
                normal: {
                  label: {
                    position: 'inner'
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              data: [
                {
                  value: null,
                  name: '直达',
                  itemStyle: {
                    normal: {
                      color: '#2EC7C9'
                    }
                  }
                },
                {
                  value: null,
                  name: '营销广告',
                  itemStyle: {
                    normal: {
                      color: '#B6A2DE'
                    }
                  }
                },
                {
                  value: null,
                  name: '搜索引擎',
                  selected: true,
                  itemStyle: {
                    normal: {
                      color: '#5AB1EF'
                    }
                  }
                }
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: [100, 140],

              // for funnel
              x: '60%',
              width: '35%',
              funnelAlign: 'left',
              max: 1048,

              data: [
                {
                  value: null,
                  name: '直达',
                  itemStyle: {
                    normal: {
                      color: '#2EC7C9'
                    }
                  }
                },
                {
                  value: null,
                  name: '邮件营销',
                  itemStyle: {
                    normal: {
                      color: '#FFB980'
                    }
                  }
                },
                {
                  value: null,
                  name: '联盟广告',
                  itemStyle: {
                    normal: {
                      color: '#D87A80'
                    }
                  }
                },
                {
                  value: null,
                  name: '视频广告',
                  itemStyle: {
                    normal: {
                      color: '#8D98B3'
                    }
                  }
                },
                {
                  value: null,
                  name: '百度',
                  itemStyle: {
                    normal: {
                      color: '#E5CF0D'
                    }
                  }
                },
                {
                  value: null,
                  name: '谷歌',
                  itemStyle: {
                    normal: {
                      color: '#97B552'
                    }
                  }
                },
                {
                  value: null,
                  name: '必应',
                  itemStyle: {
                    normal: {
                      color: '#95706D'
                    }
                  }
                },
                {
                  value: null,
                  name: '其他',
                  itemStyle: {
                    normal: {
                      color: '#DC69AA'
                    }
                  }
                }
              ]
            }
          ]
        },
        optionsC: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            x: 'left',
            bottom: 0,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                  funnel: {
                    x: '25%',
                    width: '50%',
                    funnelAlign: 'center',
                    max: 1548
                  }
                }
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              data: [
                {
                  value: null,
                  name: '直接访问',
                  itemStyle: {
                    normal: {color: '#2EC7C9'}
                  }
                },
                {
                  value: null,
                  name: '邮件营销',
                  itemStyle: {
                    normal: {color: '#B6A2DE'}
                  }
                },
                {
                  value: null,
                  name: '联盟广告',
                  itemStyle: {
                    normal: {color: '#5AB1EF'}
                  }
                },
                {
                  value: null,
                  name: '视频广告',
                  itemStyle: {
                    normal: {color: '#FFB980'}
                  }
                },
                {
                  value: null,
                  name: '搜索引擎',
                  itemStyle: {
                    normal: {color: '#D87A80'}
                  }
                }
              ]
            }
          ]
        },
        optionsD: {
          title: {
            text: '南丁格尔玫瑰图',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            x: 'center',
            y: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          series: [
            {
              name: '半径模式',
              type: 'pie',
              radius: [20, 110],
              center: ['25%', 200],
              roseType: 'radius',
              width: '40%',       // for funnel
              max: 40,            // for funnel
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                },
                emphasis: {
                  label: {
                    show: true
                  },
                  labelLine: {
                    show: true
                  }
                }
              },
              data: [
                {
                  value: null,
                  name: 'rose1',
                  itemStyle: {
                    normal: {
                      color: '#2EC7C9'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose2',
                  itemStyle: {
                    normal: {
                      color: '#B6A2DE'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose3',
                  itemStyle: {
                    normal: {
                      color: '#5AB1EF'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose4',
                  itemStyle: {
                    normal: {
                      color: '#FFB980'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose5',
                  itemStyle: {
                    normal: {
                      color: '#D87A80'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose6',
                  itemStyle: {
                    normal: {
                      color: '#8D98B3'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose7',
                  itemStyle: {
                    normal: {
                      color: '#E5CF0D'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose8',
                  itemStyle: {
                    normal: {
                      color: '#97B552'
                    }
                  }
                }
              ]
            },
            {
              name: '面积模式',
              type: 'pie',
              radius: [30, 110],
              center: ['75%', 200],
              roseType: 'area',
              x: '50%',               // for funnel
              max: 40,                // for funnel
              sort: 'ascending',     // for funnel
              data: [
                {
                  value: null,
                  name: 'rose1',
                  itemStyle: {
                    normal: {
                      color: '#2EC7C9'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose2',
                  itemStyle: {
                    normal: {
                      color: '#B6A2DE'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose3',
                  itemStyle: {
                    normal: {
                      color: '#5AB1EF'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose4',
                  itemStyle: {
                    normal: {
                      color: '#FFB980'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose5',
                  itemStyle: {
                    normal: {
                      color: '#D87A80'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose6',
                  itemStyle: {
                    normal: {
                      color: '#8D98B3'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose7',
                  itemStyle: {
                    normal: {
                      color: '#E5CF0D'
                    }
                  }
                },
                {
                  value: null,
                  name: 'rose8',
                  itemStyle: {
                    normal: {
                      color: '#97B552'
                    }
                  }
                }
              ]
            }
          ]
        }
      };
    }
  };
</script>
<style lang="scss" scoped>

</style>
