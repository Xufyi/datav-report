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
      }
    };
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
