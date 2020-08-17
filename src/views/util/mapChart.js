/**
 * @description echarts参数
 * @author Pudding
 */
/**
 * 地图
 * @param {array} arr 数据集合
 */
const mapChartfn = (arr) =>{
    return {
        tooltip: {
          show: true,
          formatter: function(params){
            if (params.data) {
              const datas = arr.filter((item) => item.address === params.name);
              const index = arr.indexOf(datas[0]);
            //   if (this.data.province === '全国') {
            //     return `${params.name}：${params.data.value}<br>(全国排名第${index + 1}位)`;
            //   }
              return `${params.name}：${params.data.value}<br>(全省排名第${index + 1}位)`;
            }
          }
        },
        visualMap: {
          type: 'continuous',
          text: ['', ''],
          showLabel: false,
          show: false,
          left: '0',
          min: 0,
          max: 10000,
          backgroundColor: 'white',
          inRange: {
            color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096']
          },
          splitNumber: 0
        },
        grid: {
          top: 10,
        },
        series: [
          {
            name: '中国地图',
            type: 'map',
            mapType: 'china',
            data:arr
          }
        ]
      };
}
export default { mapChartfn };