<template>
  <div class="wrap">
    <el-tabs v-model="remote.activeName" @tab-click="handleClick">
      <el-tab-pane label="柱状图" name="bar">
        <yui-chart width="100%" height="300px" :options="options"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl1">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText1" v-if="remote.ifShow1">{{remote.copyText1}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow1"></i>
                <p class="addColor">{{remote.displayText1}}</p>
              </div>
            </template>
            <pre>
              <code style="display:flex;">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                  return {
                    options: {},
                  };
                  },
                  mounted() {
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
                    this.options = barChart.barSingle(data,//x、y轴数据
                      {
                      rotate: 0, //x轴旋转度数
                      show: true, //是否显示y轴及刻度
                      yname: "(万元)", //y轴top文案
                      // colorList:["#3DC06A", "#4184D5"],//单柱状图颜色
                      legend: "商品库存数量", //右侧提示文案
                      // chartStyle:{},//图表是否实线显示
                      tooltip: true //是否显示鼠标悬浮样式
                    });
                }
            };
                &lt;/script&gt;
              </code>
            </pre>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="100%" height="300px" :options="manyOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl2">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText2" v-if="remote.ifShow2">{{remote.copyText2}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow2"></i>
                <p class="addColor">{{remote.displayText2}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="100%" height="300px" :options="brokenLine"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl3">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText3" v-if="remote.ifShow3">{{remote.copyText3}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow3"></i>
                <p class="addColor">{{remote.displayText3}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="折线图" name="line">
        <yui-chart width="1200px" height="300px" :options="singleOptions4"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText4" v-if="remote.ifShow4">{{remote.copyText4}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow4"></i>
                <p class="addColor">{{remote.displayText4}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="300px" :options="sAndOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl5">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText5" v-if="remote.ifShow5">{{remote.copyText5}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow5"></i>
                <p class="addColor">{{remote.displayText5}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="300px" :options="circularOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl6">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText6" v-if="remote.ifShow6">{{remote.copyText6}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow6"></i>
                <p class="addColor">{{remote.displayText6}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="300px" :options="semicircleOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl7">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText7" v-if="remote.ifShow7">{{remote.copyText7}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow7"></i>
                <p class="addColor">{{remote.displayText7}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="饼图" name="pie">
        <yui-chart width="1200px" height="300px" :options="pieOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl8">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText8" v-if="remote.ifShow8">{{remote.copyText8}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow8"></i>
                <p class="addColor">{{remote.displayText8}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

      <el-tab-pane label="漏斗图" name="funnel">
        <yui-chart width="1200px" height="400px" :options="funnelOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl9">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText9" v-if="remote.ifShow9">{{remote.copyText9}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow9"></i>
                <p class="addColor">{{remote.displayText9}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

      <el-tab-pane label="地图" name="map">
        <yui-chart width="1200px" height="600px" :options="mapOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl10">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText10" v-if="remote.ifShow10">{{remote.copyText10}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow10"></i>
                <p class="addColor">{{remote.displayText10}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

      <el-tab-pane label="环形图" name="annular">
        <yui-chart width="1200px" height="300px" :options="annularOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl11">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText11" v-if="remote.ifShow11">{{remote.copyText11}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow11"></i>
                <p class="addColor">{{remote.displayText11}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="400px" :options="ringOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl12">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText12" v-if="remote.ifShow12">{{remote.copyText12}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow12"></i>
                <p class="addColor">{{remote.displayText12}}</p>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import barChart from "../util/barChart";
import sAndChart from "../util/lineChart";
import pieChart from "../util/pieChart";
import funnelChart from "../util/funnelChart";
import mapChart from "../util/mapChart";
import annularChart from "../util/annularChart";
import china from "../util/china.json";
export default {
  data() {
    return {
      remote: {
        activeName: "bar",
        activeNames: [""],
        ifColl: true,
        copyText1: "复制代码",
        displayText1: "显示代码",
        ifShow1: true,
        copyText2: "复制代码",
        displayText2: "显示代码",
        ifShow2: true,
        copyText3: "复制代码",
        displayText3: "显示代码",
        ifShow3: true,
        copyText4: "复制代码",
        displayText4: "显示代码",
        ifShow4: true,
        copyText5: "复制代码",
        displayText5: "显示代码",
        ifShow5: true,
        copyText6: "复制代码",
        displayText6: "显示代码",
        ifShow6: true,
        copyText7: "复制代码",
        displayText7: "显示代码",
        ifShow7: true,
        copyText8: "复制代码",
        displayText8: "显示代码",
        ifShow8: true,
        copyText9: "复制代码",
        displayText9: "显示代码",
        ifShow9: true,
        copyText10: "复制代码",
        displayText10: "显示代码",
        ifShow10: true,
        copyText11: "复制代码",
        displayText11: "显示代码",
        ifShow11: true,
        copyText12: "复制代码",
        displayText12: "显示代码",
        ifShow12: true
      },
      asyncData: {},
      options: {}, //单柱状图
      manyOptions: {}, //双柱状图
      brokenLine: {}, //柱状图+折线图
      singleOptions: {}, //单折线图
      sAndOptions: {}, //单双折线图
      circularOptions: {}, //单圆折线图
      semicircleOptions: {}, //双圆折线图
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
    this.options = barChart.barSingle(
      data, //x、y轴数据
      {
        rotate: 0, //x轴旋转度数
        show: true, //是否显示y轴及刻度
        yname: "(万元)", //y轴top文案
        // colorList:["#3DC06A", "#4184D5"],//单柱状图颜色
        legend: "商品库存数量", //右侧提示文案
        // chartStyle:{},//图表是否实线显示
        tooltip: true //是否显示鼠标悬浮样式
      }
    );

    //双柱状图
    let manyData = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [40, 57, 77, 60, 53],
      [33, 42, 68, 42, 55]
    ]; //x、y轴数据
    this.manyOptions = barChart.manyChart(
      manyData, //x、y轴数据
      {
        rotate: 0, //x轴旋转度数
        show: true, //是否显示y轴及刻度
        // yname: "(万元)", //y轴top文案
        colorList: ["#189CEA", "#3DC06A"], //双柱状图颜色
        legend: ["订单量", "下单药店数"], //右侧提示文案
        // chartStyle:{},//图表是否实线显示
        tooltip: true, //是否显示鼠标悬浮样式
        right: 0 //legend位置设置(默认居中)
      }
    );

    //柱状图+折线图
    let lineData = [
      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
      [5000, 10000, 15000, 20000, 25000],
      [22.2, 17.7, 13.3, 6.6, 5.5]
    ]; //x、y轴、折线图数据
    this.brokenLine = barChart.barLine(
      lineData, //x、y轴、折线图数据
      {
        // rotate:50,//x轴旋转度数
        bar: { name: "商品销量", value: "number" }, //y轴top文案
        line: {
          name: "下单药店个数",
          value: "pharmacyNumber",
          axisLeft: "商品销量",
          axisRight: "下单药店数"
        } //柱状图提示文案
      }
    );

    //单折线图
    let singleData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
    let singleyData = [[22.2, 17.7, 13.3, 6.6, 5.5]]; //y轴数据
    this.singleOptions = sAndChart.manyLine(
      singleData, //x轴数据
      ["支出"], //右侧文案
      singleyData, //y轴数据
      {
        yname: "(元)", //y轴top文案
        // ifSmoth: true,//折线图是否为实心
        // icon:true,//icon形状是否为折线
        setlineType: true //是否实线、虚线结合
        // ifLegend: true //不显示右侧文案
      }
    );

    //单双折线图
    let sAndData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
    let yData = [[22.2, 17.7, 13.3, 6.6, 5.5], [10, 17.7, 24, 8, 30]]; //y轴数据
    this.sAndOptions = sAndChart.manyLine(
      sAndData, //x轴数据
      ["曝光商品数", "点击商品数"], //右侧文案
      yData, //y轴数据
      {
        yname: "(元)", //y轴top文案
        // ifSmoth: true,//折线图是否为实心
        // icon:true,//icon形状是否为折线
        setlineType: true, //是否实线、虚线结合
        ifLegend: true //不显示右侧文案
      }
    );

    //单圆折线图
    let circularArr = [
      {
        hour: 0,
        value: 0
      },
      {
        hour: 6,
        value: 5500
      },
      {
        hour: 12
      },
      {
        hour: 18
      }
    ]; //x轴数据、y轴数据
    let circularName = ["今日", "昨日"]; //是否显示右侧文案
    let circularColor = ["#189CEA", "#3DC06A"]; //折线图颜色
    this.circularOptions = sAndChart.SemicircleLine(
      circularArr, //x轴数据、y轴数据
      [], //y轴对比数据
      {
        nameList: circularName,
        colorList: circularColor
      }
    );

    //双圆折线图
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
    this.semicircleOptions = sAndChart.SemicircleLine(
      lastArr, //x轴数据、y轴对比数据
      nowArr, //y轴数据
      {
        nameList: dataName, //是否显示右侧文案
        colorList: styleColor //折线图颜色
      }
    );

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
    this.pieOptions = pieChart.pieChartfn(
      pieData, //数据集合
      colorArr //颜色集
    );

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
    this.funnelOptions = funnelChart.funnelChartfn(
      funnelData, //左侧漏斗数据
      processNum //右侧漏斗数据
    );

    //地图
    const mapData = china; //数据集合
    const features = mapData.features;
    const allData = features.map(e => ({
      name: e.name,
      value: Math.round(Math.random() * 100)
    }));
    echarts.registerMap(name, mapData);
    this.mapOptions = mapChart.mapChartfn(
      mapData //数据集合
    );

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
    this.ringOptions = annularChart.ringDiagram(
      ringData, //数据集合
      colorAggregate //颜色集合
    );
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //显示、隐藏代码
    triggerColl1(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText1 = "隐藏代码";
        });
      } else {
        this.remote.displayText1 = "显示代码";
      }
    },
    //复制代码
    linkText1() {
      this.remote.ifShow1 = false;
      setTimeout(() => {
        this.remote.ifShow1 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl2(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText2 = "隐藏代码";
        });
      } else {
        this.remote.displayText2 = "显示代码";
      }
    },
    //复制代码
    linkText2() {
      this.remote.ifShow2 = false;
      setTimeout(() => {
        this.remote.ifShow2 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl3(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText3 = "隐藏代码";
        });
      } else {
        this.remote.displayText3 = "显示代码";
      }
    },
    //复制代码
    linkText3() {
      this.remote.ifShow3 = false;
      setTimeout(() => {
        this.remote.ifShow3 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl4(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText4 = "隐藏代码";
        });
      } else {
        this.remote.displayText4 = "显示代码";
      }
    },
    //复制代码
    linkText4() {
      this.remote.ifShow4 = false;
      setTimeout(() => {
        this.remote.ifShow4 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl5(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText5 = "隐藏代码";
        });
      } else {
        this.remote.displayText5 = "显示代码";
      }
    },
    //复制代码
    linkText5() {
      this.remote.ifShow5 = false;
      setTimeout(() => {
        this.remote.ifShow5 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl6(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText6 = "隐藏代码";
        });
      } else {
        this.remote.displayText6 = "显示代码";
      }
    },
    //复制代码
    linkText6() {
      this.remote.ifShow6 = false;
      setTimeout(() => {
        this.remote.ifShow6 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl7(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText7 = "隐藏代码";
        });
      } else {
        this.remote.displayText7 = "显示代码";
      }
    },
    //复制代码
    linkText7() {
      this.remote.ifShow7 = false;
      setTimeout(() => {
        this.remote.ifShow7 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl8(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText8 = "隐藏代码";
        });
      } else {
        this.remote.displayText8 = "显示代码";
      }
    },
    //复制代码
    linkText8() {
      this.remote.ifShow8 = false;
      setTimeout(() => {
        this.remote.ifShow8 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl9(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText9 = "隐藏代码";
        });
      } else {
        this.remote.displayText9 = "显示代码";
      }
    },
    //复制代码
    linkText9() {
      this.remote.ifShow9 = false;
      setTimeout(() => {
        this.remote.ifShow9 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl10(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText10 = "隐藏代码";
        });
      } else {
        this.remote.displayText10 = "显示代码";
      }
    },
    //复制代码
    linkText10() {
      this.remote.ifShow10 = false;
      setTimeout(() => {
        this.remote.ifShow10 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl11(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText11 = "隐藏代码";
        });
      } else {
        this.remote.displayText11 = "显示代码";
      }
    },
    //复制代码
    linkText11() {
      this.remote.ifShow11 = false;
      setTimeout(() => {
        this.remote.ifShow11 = true;
      }, 1000);
    },
    //显示、隐藏代码
    triggerColl12(num) {
      if (num) {
        this.$nextTick(() => {
          this.remote.displayText12 = "隐藏代码";
        });
      } else {
        this.remote.displayText12 = "显示代码";
      }
    },
    //复制代码
    linkText12() {
      this.remote.ifShow12 = false;
      setTimeout(() => {
        this.remote.ifShow12 = true;
      }, 1000);
    }
  }
};
</script>
<style>
.title {
  width: 100%;
  display: flex;
  justify-content: center;
}
.addColor {
  color: #00b377;
  margin-right: 20px;
}
#iconStyle {
  font-size: 15px;
  color: #00b377;
  display: flex;
  align-items: center;
  margin-right: 40px;
}
</style>