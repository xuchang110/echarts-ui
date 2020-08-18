/**
 * @description echarts参数
 * @author Pudding
 */
/**
 * 地图
 * @param {array} arr 数据集合
 */
const mapChartfn = (arr) => {
  return {
    tooltip: {
      show: true,
      formatter: function (params) {
        if (params.data) return params.name + '：' + params.data['value']
      },
    },
    visualMap: {
      type: 'continuous',
      text: ['', ''],
      showLabel: false,
      show:false,
      left: '50',
      min: 0,
      max: 10000,
      backgroundColor: 'white',
      inRange: {
        color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096']
      },
      splitNumber: 0
    },
    series: [{
      name: 'MAP',
      type: 'map',
      mapType: name,
      selectedMode: 'false', //是否允许选中多个区域
      data: arr
    }]
  };
}
export default { mapChartfn };