
/**
 * @description echarts参数
 * @author Pudding
 */
/**
 * 漏斗图
 * @param {array} data 左侧漏斗数据
 * @param {array} process 右侧漏斗数据
 */
const funnelChartfn = (data,process) => {
    function renderItem(params, api) {
      var yValue = api.value(2);
      var start = api.coord([0, yValue]);
      var size = api.size([110, 0]);
      var style = api.style();
      return {
        type: 'line',
        shape: {
          x1: start[0],
          y1: start[1],
          x2: size[0],
          y2: size[1]
        },
        style
      };
    }
    return {
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c}"
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
            name: '漏斗图',
            type: 'funnel',
            gap: 5,
            itemStyle: {
              borderWidth: 0
            },
            label: {
              show: true,
              position: 'left',
              color: '#333',
              fontFamily: 'bold',
              formatter: '{b} {c}'
            },
            data
          },
          {
            name: 'a',
            type: 'custom',
            label: {
              show: true,
              position: 'right',
              formatter: '{b}%'
            },
            renderItem,
            data: process
          }
        ]
    };
  };

  export default { funnelChartfn };