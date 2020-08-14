/**
 * @description echarts参数
 * @author Thales
 */

/**
 * 单柱状图
 * @param {array} arr xy轴数组
 * @param {object} props 匹配
 */
const barSingle = (arr, props) => {
  let xData = [];
  let yData = [];
  let {
    rotate,
    show,
    yname,
    colorList,
    legend,
    chartStyle,
    tooltip
  } = props;
  let colorFun =function(params) {
    var colorLists = colorList||["#3DC06A", "#4184D5"];
    return colorLists[params.dataIndex]
};
  xData = arr[0];
  yData = arr[1];
  return {
    tooltip: tooltip?{
      trigger: 'axis',
      position: 'top',
      axisPointer: {
        type: 'none',
        label: {
          opacity: 0.5
        }
      }
    }:'',
    //右侧提示文案
    legend: {
      right: 0,
      data: [legend]
    }||{},
    xAxis: {
      type: "category",
      axisLabel: {
        rotate: rotate,
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
      show:show,
      type: 'value',
      name: yname||'',
      nameTextStyle: {
        align: 'right',
        color: '#838484'
      },
      axis: {
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      axisLabel: { textStyle: { 'color': '#838484', 'fontSize': '12' } },
      splitLine: chartStyle||{
        show: true,
        lineStyle: {
          color: '#CCCCCC',
          type: 'dotted'
        }
      },
      axisLine: chartStyle||{ show: false },
      axisTick: chartStyle||{ show: false }
    },
    grid: {
      left: "25px",
      right: "0",
      bottom: "45px",
      top: "40px",
      containLabel: true
    },
    series: [
      {
        name:legend,
        itemStyle: {//传
          color: colorList?colorFun:"#189CEA",
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
        data: yData,
        type: "bar"
      }
    ]
  };
}


/**
 * 双柱状图
 * @param {array} arr xy轴数组
 * @param {object} props 匹配
 */
const manyChart = (arr, props) => {
  let xData = [];
  let yData = [];
  let yDatab = [];
  let {
    rotate,
    show,
    yname,
    colorList,
    legend,
    chartStyle,
    tooltip,
    right
  } = props;
  xData = arr[0];
  yData = arr[1];
  yDatab = arr[2];
  return {
    tooltip: tooltip?{
      trigger: 'axis',
      position: 'top',
      axisPointer: {
        type: 'none',
        label: {
          opacity: 0.5
        }
      }
    }:'',
    //右侧提示文案
    legend: {
      right,
      data: legend
    }||[],
    xAxis: {
      type: "category",
      axisLabel: {
        rotate: rotate,
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
      show:show,
      type: 'value',
      name: yname||'',
      nameTextStyle: {
        align: 'right',
        color: '#838484'
      },
      axis: {
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      axisLabel: { textStyle: { 'color': '#838484', 'fontSize': '12' } },
      splitLine: chartStyle||{
        show: true,
        lineStyle: {
          color: '#CCCCCC',
          type: 'dotted'
        }
      },
      axisLine: chartStyle||{ show: false },
      axisTick: chartStyle||{ show: false }
    },
    grid: {
      left: "25px",
      right: "0",
      bottom: "45px",
      top: "40px",
      containLabel: true
    },
    series: [
      {
        name:legend[0],
        itemStyle: {
          color: colorList[0],
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
        data: yData,
        type: "bar"
      },
      {
        name:legend[1],
        itemStyle: {
          color: colorList[1],
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
        data: yDatab,
        type: "bar"
      },
    ]
  };
}

/**
 * 柱状图+线图
 * @param {array} arr 数组
 * @param {object} props 匹配
 */
const barLine = (arr, props) => {
  let barData = []; // 柱状图
  let lineData = []; // 线图
  let xData = []; // x轴
  let {
    bar, line,
  } = props;
  xData = arr[0];
  barData = arr[1];
  lineData = arr[2];
  return {
    tooltip: {
      trigger: 'axis',
      position: 'top',
      axisPointer: {
        type: 'none',
        label: {
          opacity: 0.5
        }
      }
    },
    grid: {
      top: '18%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      data: [bar.name, line.name],
    },
    xAxis: {
      data: xData,
      axisLabel: {
        textStyle: { 'color': '#666666' },
        rotate: 50,
        interval: 0,
        margin: 10,
        formatter(value) {
          const k = value.split('');
          let result = '';
          k.forEach((e, i) => {
            result += e;
            if (i && (i % 5 === 4)) {
              result += '\n';
            }
          });
          return result;
        }
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      }
    },
    yAxis: [
      {
        type: 'value',
        name: line.axisLeft || '',
        nameLocation: 'end',
        axisLabel: { textStyle: { 'color': '#838484', 'fontSize': '12' } },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: { 'color': '#CCCCCC', 'type': 'dotted' }
        },
        nameTextStyle: { 'color': '#838484' }
      },
      {
        type: 'value',
        name: line.axisRight || '',
        nameLocation: 'end',
        axisLabel: { textStyle: { 'color': '#838484', 'fontSize': '12' } },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        nameTextStyle: { 'color': '#838484' }
      }
    ],
    series: [
      {
        name: bar.name,
        type: 'bar',
        yAxisIndex: 0,
        barCategoryGap: '60%',
        barWidth: '20%',
        itemStyle: {
          color: '#189CEA',
          barBorderRadius: [4, 4, 0, 0]
        },
        data: barData
      },
      {
        name: line.name,
        type: 'line',
        lineStyle: {
          color: '#FFC119'
        },
        itemStyle: {
          color: '#FFC119',
          borderColor: '#FFC119'
        },
        yAxisIndex: 1,
        data: lineData
      }
    ]
  };
};

export default {
  barSingle,manyChart, barLine
};
