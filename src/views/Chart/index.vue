<template>
  <div class="wrap">
    <yui-chart width="100%" height="300px" :options="options"/>
    <yui-chart width="100%" height="300px" :options="manyOptions"/>
    <yui-chart width="100%" height="300px" :options="brokenLine"/>
    <yui-chart width="100%" height="300px" :options="sAndOptions"/>
  </div>
</template>
<script>
import barChart from "../util/barChart";
import sAndChart from '../util/lineChart'
export default {
  data() {
    return {
      options: {},//单柱状图
      manyOptions: {},//双柱状图
      brokenLine:{},//柱状图+折线图
      sAndOptions:{},//单双折线图
    };
  },
  mounted() {
    //单柱状图
    let data = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [22.2, 17.7, 13.3, 6.6, 5.5]
    ];//x、y轴数据
    this.options = barChart.barSingle(data, {
      rotate: 0, //x轴旋转度数
      show: true, //是否显示y轴及刻度
      yname: "(万元)", //y轴top文案
      // colorList:["#3DC06A", "#4184D5"],//单柱状图颜色
      legend: "商品库存数量", //右侧提示文案
      // chartStyle:{},//图表是否实线显示
      tooltip:true,//是否显示鼠标悬浮样式
    });
    
    //双柱状图
    let manyData = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [22.2, 17.7, 13.3, 6.6, 5.5],
      [33, 22, 18, 42, 55],
    ];//x、y轴数据
    this.manyOptions = barChart.manyChart(manyData, {
      rotate: 0, //x轴旋转度数
      show: true, //是否显示y轴及刻度
      // yname: "(万元)", //y轴top文案
      colorList:["#189CEA", "#3DC06A"],//双柱状图颜色
      legend: ["订单量","下单药店数"], //右侧提示文案
      // chartStyle:{},//图表是否实线显示
      tooltip:true,//是否显示鼠标悬浮样式
      right:0,//legend位置设置(默认居中)
    });


    //柱状图+折线图
    let lineData = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [5000, 10000, 15000, 20000, 25000],
      [22.2, 17.7, 13.3, 6.6, 5.5]
    ];//x、y轴、折线图数据
    this.brokenLine = barChart.barLine(lineData, {
      bar: { name: "商品销量", value: "number" },//y轴top文案
      line: {
        name: "下单药店个数",
        value: "pharmacyNumber",
        axisLeft: "商品销量",
        axisRight: "下单药店数"
      },//柱状图提示文案
    });


    //单双折线图
    let sAndData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"];//x轴数据
    let yData = [[22.2, 17.7, 13.3, 6.6, 5.5],[10, 17.7, 24, 8, 30]]//y轴数据
    this.sAndOptions = sAndChart.manyLine(sAndData,
    ['曝光商品数', '点击商品数'],
    yData,
    {
      yname: "(元)", //y轴top文案
      // ifSmoth: true,//折线图是否为实心
      // icon:true,//icon形状是否为折线
      setlineType:true,//是否实线、虚线结合
      ifLegend:true,//不显示右侧文案
    }
    );
  }
};
</script>