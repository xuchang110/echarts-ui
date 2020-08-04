<template>
  <div class="wrap">
    <h1>BarChart 柱状图</h1>
    <p>基于echarts的柱状图组件。为了优化组件库构建包的体积，使用该组件需要将echarts在主文件中引入。</p>
    <h4>基础功能</h4>
    <p>通过options prop 渲染图表。</p>
    <div class="box">
      <singleChart
        width="60%"
        height="400px"
        :xAxisList="xAxisList"
        :yAxisList="yAxisList"
        :nameTxt="nameTxt"
      ></singleChart>
      <p class="tip">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="显示代码" name="1">
             {{'html'}}
          </el-collapse-item>
        </el-collapse>
      </p>
    </div>
  </div>
</template>
<script>


import singleChart from "../components/singleChart";
export default {
  components: {
    singleChart
  },
  data() {
    return {
      remote: {
        activeNames: ["1"]
      },
      asycnData: {},
      xAxisList: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //x轴数组集
      yAxisList: [10, 22, 33, 44, 54, 77, 66], //y轴数组集
      nameTxt: "报名数量"
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
  box-sizing: border-box;
}
h1 {
  margin: 0;
}
h4 {
  margin-top: 20px;
  margin-bottom: 0px;
}
.box {
  width: 60%;
  height: 500px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tip{
  width:100%;
  height: auto;
  border-top:1px solid #eee;
  margin-top:40px;
  padding-top:20px;
}
</style>
