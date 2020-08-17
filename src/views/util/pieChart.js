/**
 * @description echarts参数
 * @author Pudding
 */
/**
 * 饼状图
 * @param {array} arr 数据集合
 * @param {array} colorArr 颜色集
 */
const pieChartfn = (arr,colorArr) => {
    let legName = [];
    arr.forEach((p,index) => {
      legName.push(p.name);
      p.itemStyle = colorArr[index];
        if (p.name === 'pc') {
            p.selected = true;
        }
    });
    return {
      legend: {
        bottom: 0,
        left: 'center',
        data: legName,
        itemWidth: 14,
        itemHeight: 14,
      },
      series: [
        {
          type: 'pie',
          startAngle: 60,
          clockwise: false,
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          label: {
            color: '#333',
            formatter: '{d}%'
          },
          data: arr
        }
      ]
    };
  };

  export default { pieChartfn };