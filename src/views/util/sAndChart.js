/**
* 单双折线图
* @param {array} scale x轴数据
* @param {array} datakeys text集合
* @param {array} data y轴数据
* @param {object} props 匹配
* 
*/
const BASIC_TIPS = 10;
const manyLine = (scale, datakeys, data, props) => {
  const colors = ['#8BCDF4', '#9EDFB4', '#FFE08C', '#A4E4E5'];
  const borderColors = ['#189CEA', '#3DC06A', '#FFC119', '#4BCBCB'];
  const charsData = [];
  let {
    yname,
    ifSmoth,
    icon,
    setlineType,
    ifLegend
  } = props;
  let smoth = ifSmoth ? { symbol: 'circle' } : { smooth: true };
  let lineType = ['solid', 'dotted'];
  datakeys.map((tar, index) => {
    charsData.push({
      name: tar,
      data: data[index],
      type: 'line',
      lineWidth: '10px',
      ...smoth, // 设定为实心点  smooth: true,//空心
      symbolSize: 6, // 设定实心点的大小
      itemStyle: {
        barBorderRadius: [4, 4, 0, 0],
        normal: {
          color: colors[index],
          borderColor: borderColors[index],
          lineStyle: {
            width: 3, // 设置线条粗细
            type: setlineType ? lineType[index] : 'solid'  //'dotted'虚线 'solid'实线
          }
        }
      },
      lineStyle: {
        normal: {
          color: borderColors[index]
        }
      }
    });
    return tar;
  });
  return {
    grid: {
      left: '10',
      right: '15px',
      bottom: scale.length > BASIC_TIPS ? '40px' : '10px',
      top: '40px',
      containLabel: true
    },
    dataZoom:
      scale.length > BASIC_TIPS
        ? [
          {
            show: true,
            textStyle: false,
            realtime: true,
            zoomLock: true,
            filterMode: 'empty',
            start: 100 - Math.floor((BASIC_TIPS / scale.length) * 100),
            end: 100
          }
          // {
          //   type: "inside",
          //   realtime: true,
          //   start: 0,
          //   end: 50
          // }
        ]
        : [],
    xAxis: {
      x: {
        axisLabel: {
          interval: 0,
          rotate: 50,
          textStyle: {
            color: '#666666',
            fontSize: '12'
          },
        }
      },
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      type: 'category',
      data: scale
    },
    yAxis: {
      name: yname || '',
      nameTextStyle: {
        align: 'right',
        color: '#838484'
      },
      axisLabel: { textStyle: { 'color': '#838484', 'fontSize': '12' } },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC',
          type: 'dotted'
        }
      },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: ifLegend ? false : true,
      top: 10,
      right: 10,
      icon: icon ? '' : 'roundRect',
      data: datakeys
    },
    series: charsData
  };
};




/**
 * 半圆折线图
 * @description echarts参数
 * @param {array} last x轴数据、y轴对比数据
 * @param {array} now y轴数据
 * @param {array} props 匹配
 * @author Pudding
 */
import Echarts from 'echarts';
const SemicircleLine = (last, now,props) => {
  const xData = [];
  const lastData = [];
  const nowData = [];
  let {
    nameList,
    colorList
  } = props;
  last.forEach((item) => {
    const label = `${item.hour}时`;
    xData.push(label);
    lastData.push(item.value);
  });
  now.forEach((item) => {
    nowData.push(item.value);
  });
  return {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      right: 10,
      icon: 'roundRect',
      data: nameList?nameList:[]
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xData,
      axisLabel: {
        textStyle: { 'color': '#666666' },
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
    yAxis: {
      type: 'value',
      splitNumber: 3,
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
    grid: {
      top: 50,
      left: 50,
      right: 20,
      height: 90
    },
    series: [
      {
        name: nameList?nameList[0]:'',
        type: 'line',
        smooth: true,
        itemStyle: {
          color: colorList[0]
        },
        lineStyle: {
          opacity: 0
        },
        areaStyle: {
          color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: colorList[0]
          }, {
            offset: 1,
            color: '#fff'
          }])
        },
        data: lastData
      },
      nowData?{
        name: nameList?nameList[1]:'',
        type: 'line',
        smooth: true,
        itemStyle: {
          color: colorList[1]
        },
        lineStyle: {
          opacity: 0
        },
        areaStyle: {
          color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: colorList[1]
          }, {
            offset: 1,
            color: '#fff'
          }])
        },
        data: nowData
      }:{}
    ]
  };
};
export default {
  manyLine,
  SemicircleLine
};
