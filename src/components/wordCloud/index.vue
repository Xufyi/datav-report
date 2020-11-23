<template>
    <ve-wordcloud :data="chartData" :settings="chartSettings" height="100%"></ve-wordcloud>
</template>

<script>
import commonDataMixin from "@/components/mixins/commonDataMixin";
export default {
  name: "mapView",
  mixins: [commonDataMixin],
  data() {
    this.chartSettings = {
      color: [
        "rgba(97,216,0,.7)",
        "rgba(204,178,26,.7)",
        "rgba(245,166,35,.7)",
        "rgba(156,13,113,.7)"
      ]
    };
    return {
      chartData: {}
    };
  },
  watch: {
    calReportData() {
      this.renderWordCloud();
    }
  },
  methods: {
    renderWordCloud() {
      const rows = this.calReportData.map(item => {
        return {
          word: item.word,
          count: item.count
        };
      });
      this.chartData = {
        columns: ["word", "count"],
        rows
      };
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
