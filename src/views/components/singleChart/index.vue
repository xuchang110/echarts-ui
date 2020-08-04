<template>
  <div class="singleChart" :style="{'width':width,'height':height}"></div>
</template>
<script>
/**
 * 组件名称:  单柱状图
 * 组件说明: 通过图表的形式展示数据
 *
 *
 * 参数说明:
 *          'width'         宽度
 *          'height'        长度
 *          'xAxisList'     x轴数组集
 *          'yAxisList'     y轴数组集
 *          'minyAxis'      y轴最小步长
 *          'maxyAxis'      y轴最大步长
 *          'xRotate'       逆时针旋转度数(x轴)
 *          'dataZoomShow'  是否显示x轴滚动条
 *          'endLen'        数据窗口范围的结束百分比
 *          'nameTxt'       柱状图对应显示名
 *          'color'         柱状图颜色
 * 
 * 
 *
 */
export default {
  props:['width','height','xAxisList','yAxisList','minyAxis',
  'maxyAxis','xRotate','dataZoomShow','endLen','nameTxt','color'],
  data() {
    return {};
  },
  mounted() {
    this.setsingleChart();
  },
  methods: {
    setsingleChart() {
      let myChart = echarts.init(document.querySelector('.singleChart'));
      let Options = {
          color: this.color||['#3398DB'],
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
              data: this.xAxisList||[], // 横坐标
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0, // 代表显示所有x轴标签显示
                rotate: this.xRotate||0 // 代表逆时针旋转45度
              }
            }
          ],
          dataZoom: [
            {
              textStyle: false,
              height: 20,
              type: 'slider',
              zoomLock: true,
              show: this.dataZoomShow||false,//是否显示x轴滚动条
              xAxisIndex: [0],
              left: '10%',
              bottom: 0,
              start: 0,
              end: this.endLen||100,//数据窗口范围的结束百分比,表示100%
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: this.minyAxis||0,
              max: this.maxyAxis||100,
            }
          ],
          series: [
            {
              name: this.nameTxt,
              type: 'bar',
              barWidth: '15',
              data: this.yAxisList||[0,0,0,0,0,0,0] // 纵坐标
            }
          ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(Options);

    }
  },
};
</script>