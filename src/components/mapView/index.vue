<template>
  <div class="mapView">
    <div class="left">
      <b-map-scatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          用户月同比增长
        </template>
        <template>
          <div class="chart_wrap">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          热门搜索
        </template>
        <div class="chart_wrap">
          <word-cloud />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from "../BMapScatter";
import liquidFill from "@/components/liquidfill";
import wordCloud from "@/components/wordCloud";

export default {
  name: "mapView",
  components: { BMapScatter, liquidFill, wordCloud },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.mapView {
  color: red;
  display: flex;
  height: 600px;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    height: 100%;
  }
  .right {
    flex: 1;
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .chart_wrap {
      height: 190px;
    }
  }
}
</style>
