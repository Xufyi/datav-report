<template>
  <div class="contanier" ref="contanier" :style="{'height':'300px'}">
<!-- 1212 -->
  </div>
</template>

<script>
import "echarts-liquidfill";
export default {
  name: "chartsLiquidFill",
  components: {},
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    const chart = this.$echarts.init(this.$refs.contanier);
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3] //大到小
        }
      ]
    });
  },
  methods: {}
};
</script>

<style>
</style>
