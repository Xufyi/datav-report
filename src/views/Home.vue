<template>
  <div class="home">
    <top-view />
    <sale-view />
    <bottom-view />
    <map-view />
    <!-- <v-chart :options="data"/>
    <ve-line :data="chartData" /> -->


  </div>
</template>

<script>
import topView from "../components/topView";
import saleView from "../components/saleView";
import bottomView from "@/components/bottomView";
import mapView from "@/components/mapView";
import { wordCloud, screenData, mapScatter } from "@/api";

export default {
  name: "Home",
  components: {
    topView,
    saleView,
    bottomView,
    mapView
  },
  data() {
    return {
      data: {
        xAxis: {
          data: ["a", "b", "c"]
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 34]
          }
        ]
      },
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      reportData: null,
      screenData: null,
      mapScatter: null
    };
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getScreenData: this.getScreenData,
      getMapScatter: this.getMapScatter
    };
  },
  methods: {
    getReportData() {
      return this.reportData;
    },
    getScreenData() {
      return this.screenData;
    },
    getMapScatter() {
      return this.mapScatter;
    }
  },
  mounted() {
    // 没有服务器，用成了前端mock数据代替
    wordCloud().then(res => {
      this.reportData = res;
    });
    screenData().then(res => {
      this.screenData = res;
    });
    mapScatter().then(res => (this.mapScatter = res));
    console.log('test')
  }
};
</script>

<style>
.home {
  background: #eee;
  box-sizing: border-box;
  padding: 20px;
}
</style>
