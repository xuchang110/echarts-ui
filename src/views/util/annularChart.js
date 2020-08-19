/**
 * @description echarts参数
 * @author Pudding
 */
/**
 * 单环形图
 * @param {array} props 匹配
 */
const annularChartfn = (props) => {
    let {
      innerColor,
      outerColor,
      process,
      percent
    } = props;
    return {
      title: {
        text: `${process * 100 ? process : 0}%\r\n`,
        y: '58%',
        x: 'center',
        textStyle: {
          fontWeight: '700',
          color: '#343D54',
          fontSize: '18',
        }
      },
      series: [
        // 占比环
        {
          type: 'pie',
          radius: ['60%', '75%'],
          center: ['50%', '50%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          data: [
            {
              value: percent.num,
              name: '得分占比',
              itemStyle: {
                normal: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: innerColor||'#189CEA' // 100% 处的颜色
                      }
                    ]
                  }
                }
              }
            },
            {
              name: '未得分占比',
              value: percent.oldNum,
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0)',
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }
          ]
        },
        // 外环
        {
          type: 'pie',
          radius: ['75%', '90%'],
          center: ['50%', '50%'],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(0,0,0,0)',
              color: outerColor||'#E7F5FB',
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          data: [100]
        }
      ]
    }
  };
  


/**
 * @description echarts参数
 * @author Pudding
 */
/**
 * 多环形图
 * @param {array} arr 数据集合
 * @param {array} colorArr 颜色集合
 */
const ringDiagram = (arr,colorArr) => ({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: '库存情况',
        type: 'pie',
        radius: ['50%', '75%'],
        center: ['50%', '50%'],
        clockwise: false,
        data: arr,
        label: {
          normal: {
            formatter: '{b|{b}} {c|{d}%}',
            rich: {
              b: {
                fontSize: 12,
                color: '#666'
              },
              c: {
                fontSize: 14,
                color: '#333',
                fontWeight: '600'
              }
            }
          }
        },
        labelLine: {
          // 指示线状态
          show: true,
          smooth: 0.2,
          length: 5
        },
        itemStyle: {
          // 此配置
          normal: {
            borderWidth: 4,
            borderColor: '#ffffff'
          },
          emphasis: {
            borderWidth: 0,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    color: colorArr||[
      '#FFC119',
      '#4CCBCB',
      '#EB7E65',
      '#A285D2',
      '#7585A2',
      '#73DEB3',
      '#FFAB67',
      '#46A9A8',
      '#189CEA',
      '#3DC06A'
    ],
    backgroundColor: '#fff'
  });
  export default { annularChartfn,ringDiagram };