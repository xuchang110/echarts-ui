<template>
  <div class="wrap">
    <yui-chart width="100%" height="300px" :options="options"/>
    <yui-chart width="100%" height="300px" :options="manyOptions"/>
    <yui-chart width="100%" height="300px" :options="brokenLine"/>
    <yui-chart width="100%" height="300px" :options="sAndOptions"/>
    <yui-chart width="100%" height="300px" :options="semicircleOptions"/>
    <yui-chart width="100%" height="300px" :options="pieOptions"/>
    <yui-chart width="100%" height="400px" :options="funnelOptions"/>
    <yui-chart width="100%" height="600px" :options="mapOptions"/>
    <yui-chart width="100%" height="300px" :options="annularOptions"/>
    <yui-chart width="100%" height="400px" :options="ringOptions"/>
  </div>
</template>
<script>
import barChart from "../util/barChart";
import sAndChart from "../util/lineChart";
import pieChart from "../util/pieChart";
import funnelChart from "../util/funnelChart";
import mapChart from "../util/mapChart";
import annularChart from "../util/annularChart";
export default {
  data() {
    return {
      options: {}, //单柱状图
      manyOptions: {}, //双柱状图
      brokenLine: {}, //柱状图+折线图
      sAndOptions: {}, //单双折线图
      semicircleOptions: {}, //半圆折线图
      pieOptions: {}, //饼状图
      funnelOptions: {}, //漏斗图
      mapOptions: {}, //地图
      annularOptions: {}, //单环形图
      ringOptions: {} //多环形图
    };
  },
  mounted() {
    //单柱状图
    let data = [
      [
        "开屏",
        "banner",
        "搜索",
        "推荐",
        "猜你喜欢",
        "开屏",
        "banner",
        "搜索",
        "推荐",
        "猜你喜欢"
      ],
      [22.2, 17.7, 13.3, 6.6, 5.5, 22.2, 17.7, 13.3, 6.6, 5.5]
    ]; //x、y轴数据
    this.options = barChart.barSingle(data, {
      rotate: 0, //x轴旋转度数
      show: true, //是否显示y轴及刻度
      yname: "(万元)", //y轴top文案
      // colorList:["#3DC06A", "#4184D5"],//单柱状图颜色
      legend: "商品库存数量", //右侧提示文案
      // chartStyle:{},//图表是否实线显示
      tooltip: true //是否显示鼠标悬浮样式
    });

    //双柱状图
    let manyData = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [22.2, 17.7, 13.3, 6.6, 5.5],
      [33, 22, 18, 42, 55]
    ]; //x、y轴数据
    this.manyOptions = barChart.manyChart(manyData, {
      rotate: 0, //x轴旋转度数
      show: true, //是否显示y轴及刻度
      // yname: "(万元)", //y轴top文案
      colorList: ["#189CEA", "#3DC06A"], //双柱状图颜色
      legend: ["订单量", "下单药店数"], //右侧提示文案
      // chartStyle:{},//图表是否实线显示
      tooltip: true, //是否显示鼠标悬浮样式
      right: 0 //legend位置设置(默认居中)
    });

    //柱状图+折线图
    let lineData = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [5000, 10000, 15000, 20000, 25000],
      [22.2, 17.7, 13.3, 6.6, 5.5]
    ]; //x、y轴、折线图数据
    this.brokenLine = barChart.barLine(lineData, {
      bar: { name: "商品销量", value: "number" }, //y轴top文案
      line: {
        name: "下单药店个数",
        value: "pharmacyNumber",
        axisLeft: "商品销量",
        axisRight: "下单药店数"
      } //柱状图提示文案
    });

    //单双折线图
    let sAndData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
    let yData = [[22.2, 17.7, 13.3, 6.6, 5.5], [10, 17.7, 24, 8, 30]]; //y轴数据
    this.sAndOptions = sAndChart.manyLine(
      sAndData,
      ["曝光商品数", "点击商品数"],
      yData,
      {
        yname: "(元)", //y轴top文案
        // ifSmoth: true,//折线图是否为实心
        // icon:true,//icon形状是否为折线
        setlineType: true, //是否实线、虚线结合
        ifLegend: true //不显示右侧文案
      }
    );

    //半圆折线图
    let lastArr = [
      {
        hour: 0,
        value: 0
      },
      {
        hour: 6,
        value: 5500
      },
      {
        hour: 12,
        value: 3200
      },
      {
        hour: 18,
        value: 1010
      }
    ]; //x轴数据、y轴对比数据
    let nowArr = [
      {
        value: 100
      },
      {
        value: 7600
      }
    ]; //y轴数据
    let dataName = ["今日", "昨日"]; //是否显示右侧文案
    let styleColor = ["#189CEA", "#3DC06A"]; //折线图颜色
    this.semicircleOptions = sAndChart.SemicircleLine(lastArr, nowArr, {
      nameList: dataName,
      colorList: styleColor
    });

    //饼状图
    let pieData = [
      {
        name: "pc",
        value: 0
      },
      {
        name: "app",
        value: 0
      }
    ]; //数据集合
    let colorArr = [{ color: "#189CEA" }, { color: "#3DC06A" }]; //颜色集
    this.pieOptions = pieChart.pieChartfn(pieData, colorArr);

    //漏斗图
    let funnelData = [
      {
        value: 2500,
        name: "下单",
        itemStyle: {
          color: "#4CCBCB"
        }
      },
      {
        value: 5000,
        name: "浏览",
        itemStyle: {
          color: "#3DC06A"
        }
      },
      {
        value: 7500,
        name: "加购",
        itemStyle: {
          color: "#FFC119"
        }
      },
      {
        value: 10000,
        name: "曝光",
        itemStyle: {
          color: "#189CEA"
        }
      }
    ]; //左侧漏斗数据
    let processNum = [[88, 88, 0], [47, 47, 1], [66, 66, 2]]; //右侧漏斗数据
    this.funnelOptions = funnelChart.funnelChartfn(funnelData, processNum);

    //地图
    let mapData = [{ value: 2, name: "上海" }, { value: 3, name: "北京" }];
    this.$nextTick(() => {
      this.mapOptions = mapChart.mapChartfn(mapData);
    });

    //单环形图
    this.annularOptions = annularChart.annularChartfn({
      innerColor: "#189CEA", //内环颜色
      outerColor: "#E7F5FB", //外环颜色
      process: 88, //占比
      percent: { num: 88, oldNum: 12 } //得分占比、未得分占比
    });

    //多环形图
    let ringData = [
      {
        name: "山西省",
        value: 17.8
      },
      {
        name: "湖北省",
        value: 17.8
      },
      {
        name: "浙江省",
        value: 17.8
      },
      {
        name: "四川省",
        value: 17.8
      },
      {
        name: "江苏省",
        value: 17.8
      },
      {
        name: "山东省",
        value: 17.8
      },
      {
        name: "湖南省",
        value: 17.8
      }
    ]; //数据集合
    let colorAggregate = ""; //颜色集合
    this.ringOptions = annularChart.ringDiagram(ringData, colorAggregate);
  }
};
</script>