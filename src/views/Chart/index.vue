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
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow1" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText1}}</p>
              </div>
            </template>
            <pre>
              <code class="codeText">
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
                    this.options = this.barChart.barSingle(
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
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow2" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText2}}</p>
              </div>
            </template>
            <div>
               <pre>
              <code class="codeText2">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
                    let manyData = [
                      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
                      [40, 57, 77, 60, 53],
                      [33, 42, 68, 42, 55]
                    ]; //x、y轴数据
                    this.options = this.barChart.manyChart(
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
                }
            };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="100%" height="300px" :options="brokenLine"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl3">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText3" v-if="remote.ifShow3">{{remote.copyText3}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow3" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText3}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText3">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
                    let lineData = [
                      ["开屏", "banner", "搜索", "推荐", "猜你喜欢"],
                      [5000, 10000, 15000, 20000, 25000],
                      [22.2, 17.7, 13.3, 6.6, 5.5]
                    ]; //x、y轴、折线图数据
                    this.options = this.barChart.barLine(
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
                }
            };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="折线图" name="line">
        <yui-chart width="1200px" height="300px" :options="singleOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl4">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText4" v-if="remote.ifShow4">{{remote.copyText4}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow4" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText4}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText4">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
                    let singleData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
                    let singleyData = [[22.2, 17.7, 13.3, 6.6, 5.5]]; //y轴数据
                    this.options = this.sAndChart.manyLine(
                      singleData, //x轴数据
                      ["支出"], //右侧文案
                      singleyData, //y轴数据
                      {
                        yname: "(元)", //y轴top文案
                        // ifSmoth: true,//折线图是否为实心
                        // icon:true,//icon形状是否为折线
                        setlineType: true //是否实线、虚线结合
                        // ifLegend: true //是否显示右侧文案
                      }
                    );
                }
            };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="300px" :options="sAndOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl5">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText5" v-if="remote.ifShow5">{{remote.copyText5}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow5" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText5}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText5">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
                    let sAndData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
                    let yData = [[22.2, 17.7, 13.3, 6.6, 5.5], [10, 17.7, 24, 8, 30]]; //y轴数据
                    this.options = this.sAndChart.manyLine(
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
                }
            };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="300px" :options="circularOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl6">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText6" v-if="remote.ifShow6">{{remote.copyText6}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow6" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText6}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText6">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
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
                    this.options = this.sAndChart.SemicircleLine(
                      circularArr, //x轴数据、y轴数据
                      [], //y轴对比数据
                      {
                        nameList: circularName,//是否显示右侧文案
                        colorList: circularColor//折线图颜色
                      }
                    );
                }
            };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="300px" :options="semicircleOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl7">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText7" v-if="remote.ifShow7">{{remote.copyText7}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow7" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText7}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText7">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
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
                    this.options = this.sAndChart.SemicircleLine(
                      lastArr, //x轴数据、y轴对比数据
                      nowArr, //y轴数据
                      {
                        nameList: dataName, //是否显示右侧文案
                        colorList: styleColor //折线图颜色
                      }
                    );
                  }
                };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
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
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow8" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText8}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText8">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
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
                    this.options = this.pieChart.pieChartfn(
                      pieData, //数据集合
                      colorArr //颜色集
                    );
                  }
                };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
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
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow9" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText9}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText9">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;400px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
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
                    this.options = this.funnelChart.funnelChartfn(
                      funnelData, //左侧漏斗数据
                      processNum //右侧漏斗数据
                    );
                  }
                };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
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
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow10" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText10}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText10">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;600px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                import china from "../store/china.json";
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
                    const mapData = china; //数据集合
                    const features = mapData.features;
                    const allData = features.map(e => ({
                      name: e.name,
                      value: Math.round(Math.random() * 100)
                    }));
                    echarts.registerMap(name, mapData);
                    this.options = this.mapChart.mapChartfn(
                      mapData //数据集合
                    );
                  }
                };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
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
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow11" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText11}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText11">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;300px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
                    this.options = this.annularChart.annularChartfn({
                      innerColor: "#189CEA", //内环颜色
                      outerColor: "#E7F5FB", //外环颜色
                      process: 88, //占比
                      percent: { num: 88, oldNum: 12 } //得分占比、未得分占比
                    });
                  }
                };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>

        <yui-chart width="1200px" height="400px" :options="ringOptions"/>
        <el-collapse accordion v-model="remote.activeNames" @change="triggerColl12">
          <el-collapse-item>
            <template slot="title">
              <div class="title">
                <p class="addColor" @click="linkText12" v-if="remote.ifShow12">{{remote.copyText12}}</p>
                <i class="el-icon-success" id="iconStyle" v-if="!remote.ifShow12" @click="(e)=>{e.stopPropagation()}"></i>
                <p class="addColor">{{remote.displayText12}}</p>
              </div>
            </template>
            <div>
              <pre>
              <code class="codeText12">
                &lt;yui-chart width=&quot;100%&quot; height=&quot;400px&quot; :options=&quot;options&quot;/&gt;
                &lt;script&gt;
                export default {
                  data() {
                    return {
                      options: {},
                    };
                  },
                  mounted() {
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
                    this.options = this.annularChart.ringDiagram(
                      ringData, //数据集合
                      colorAggregate //颜色集合
                    );
                  }
                };
            &lt;/script&gt;
          </code>
          </pre>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import china from "../store/china.json";
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
    this.options = this.barChart.barSingle(
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
    this.manyOptions = this.barChart.manyChart(
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
    this.brokenLine = this.barChart.barLine(
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
    console.log(this,'29182212');
    
    //单折线图
    let singleData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
    let singleyData = [[22.2, 17.7, 13.3, 6.6, 5.5]]; //y轴数据
    this.singleOptions = this.sAndChart.manyLine(
      singleData, //x轴数据
      ["支出"], //右侧文案
      singleyData, //y轴数据
      {
        yname: "(元)", //y轴top文案
        // ifSmoth: true,//折线图是否为实心
        // icon:true,//icon形状是否为折线
        setlineType: true //是否实线、虚线结合
        // ifLegend: true //是否显示右侧文案
      }
    );

    //单双折线图
    let sAndData = ["开屏", "banner", "搜索", "推荐", "猜你喜欢"]; //x轴数据
    let yData = [[22.2, 17.7, 13.3, 6.6, 5.5], [10, 17.7, 24, 8, 30]]; //y轴数据
    this.sAndOptions = this.sAndChart.manyLine(
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
    this.circularOptions = this.sAndChart.SemicircleLine(
      circularArr, //x轴数据、y轴数据
      [], //y轴对比数据
      {
        nameList: circularName,//是否显示右侧文案
        colorList: circularColor//折线图颜色
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
    this.semicircleOptions = this.sAndChart.SemicircleLine(
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
    this.pieOptions = this.pieChart.pieChartfn(
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
    this.funnelOptions = this.funnelChart.funnelChartfn(
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
    this.mapOptions = this.mapChart.mapChartfn(
      mapData //数据集合
    );

    //单环形图
    this.annularOptions = this.annularChart.annularChartfn({
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
    this.ringOptions = this.annularChart.ringDiagram(
      ringData, //数据集合
      colorAggregate //颜色集合
    );
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //html反转义
    html_decode(str){ 
        let s = ""; 
        if (str.length == 0) return ""; 
        s = str.replace(/&amp;/g, "&"); 
        s = s.replace(/&lt;/g, "<"); 
        s = s.replace(/&gt;/g, ">"); 
        s = s.replace(/&nbsp;/g, " "); 
        s = s.replace(/&#39;/g, "\'"); 
        s = s.replace(/&quot;/g, "\""); 
        s = s.replace(/<br\/>/g, "\n"); 
        return s; 
    },
    //综合方法
    comprehensive(copy) {
      //复制
      let cont = this.html_decode(copy);
      const input = document.createElement('textarea');
      document.body.appendChild(input)
      input.value = cont;
      input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
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
    linkText1(e) {
      this.comprehensive(document.querySelector('.codeText').innerHTML);
      e.stopPropagation();
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
    linkText2(e) {
      this.comprehensive(document.querySelector('.codeText2').innerHTML);
      e.stopPropagation();
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
    linkText3(e) {
      this.comprehensive(document.querySelector('.codeText3').innerHTML);
      e.stopPropagation();
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
    linkText4(e) {
      this.comprehensive(document.querySelector('.codeText4').innerHTML);
      e.stopPropagation();
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
    linkText5(e) {
      this.comprehensive(document.querySelector('.codeText5').innerHTML);
      e.stopPropagation();
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
    linkText6(e) {
      this.comprehensive(document.querySelector('.codeText6').innerHTML);
      e.stopPropagation();
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
    linkText7(e) {
      this.comprehensive(document.querySelector('.codeText7').innerHTML);
      e.stopPropagation();
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
    linkText8(e) {
      this.comprehensive(document.querySelector('.codeText8').innerHTML);
      e.stopPropagation();
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
    linkText9(e) {
      this.comprehensive(document.querySelector('.codeText9').innerHTML);
      e.stopPropagation();
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
    linkText10(e) {
      this.comprehensive(document.querySelector('.codeText10').innerHTML);
      e.stopPropagation();
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
    linkText11(e) {
      this.comprehensive(document.querySelector('.codeText11').innerHTML);
      e.stopPropagation();
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
    linkText12(e) {
      this.comprehensive(document.querySelector('.codeText12').innerHTML);
      e.stopPropagation();
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
.codeText{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText2{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText3{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText4{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText5{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText6{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText7{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText8{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText9{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText10{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText11{
  width:100%;
  display: flex;
  text-align:left;
}
.codeText12{
  width:100%;
  display: flex;
  text-align:left;
}
</style>