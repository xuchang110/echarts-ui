<template></template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getP() {
      const options = {
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 50,
            interval: 0,
            textStyle: { color: "#666666" }
          },
          data: xData,
          axisLine: {
            lineStyle: {
              color: "#CCCCCC",
              type: "dotted"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          show: false
        },
        grid: {
          bottom: 45
        },
        series: [
          {
            itemStyle: {//传
              color: "#189CEA",
              barBorderRadius: [4, 4, 0, 0]
            },
            barCategoryGap: "60%",
            label: {
              show: true,
              color: "#333",
              // formatter: (params) => {
              //   const per = params.value * 100;
              //   return `${per}%`;
              // },
              position: "top"
            },
            data: valueData,
            type: "bar"
          }
        ]
      };

      const options = {
        tooltip: {
          trigger: "axis"
          // formatter: function(a) {
          //   return `${a[0]["name"]}</br>供货金额: ${a[0]["value"]}万元`;
          // }
        },
        xAxis: [
          {
            type: "category",
            data: ["去年同期", "今年截止昨日累计"],
            ...COMMON_PARAMS.axisLabel.x,
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#666666",
                fontSize: "12"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#E9E9E9",
                width: 1
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "(万元)",//传
            nameTextStyle: {
              align: "right",
              color: "#838484"
            },

            ...COMMON_PARAMS.axisLabel.y,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#CCCCCC",
                type: "dotted"
              }
            },
            axisLine: { show: false },
            axisTick: { show: false }
          }
        ],
        grid: {
          left: "25px",
          right: "0",
          bottom: "15px",
          top: "40px",
          containLabel: true
        },
        series: [
          {
            type: "bar",
            barWidth: "36px",
            itemStyle: {//传
              color(params) {
                const colorList = ["#3DC06A", "#4184D5"];
                return colorList[params.dataIndex];
              },
              barBorderRadius: [4, 4, 0, 0]
            },
            data: charsData
          }
        ]
      };


     const columnarOptions = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: [], // 横坐标
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0, // 代表显示所有x轴标签显示
                rotate: 45 // 代表逆时针旋转45度  //传
              }
            }
          ],
          dataZoom: [
            {
              textStyle: false,
              height: 20,
              type: 'slider',
              zoomLock: true,
              show: false,
              xAxisIndex: [0],
              left: '10%',
              bottom: 0,
              start: 0,
              end: 100
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              max: 2
            }
          ],
          series: [
            {
              name: '报名数量',
              type: 'bar',
              barWidth: '15',
              data: [0, 0, 0, 0, 0] // 纵坐标
            }
          ]
        },
    }
  }
};
</script>
