<template>
    <ve-liquidfill :data="chartData" :settings="chartSettings" height="100%" />
</template>

<script>
import commonDataMixin from "@/components/mixins/commonDataMixin";

function getColor(value) {
  return value > 0 && value <= 0.5
    ? "rgba(97,217,0,.7)"
    : value > 0.5 && value <= 0.8
      ? "rgba(204,178,26,.7)"
      : value > 0.8 ? "rgba(241,47,26,.7)" : "#c7c7cb";
  //   三元实现3个判断条件
}

export default {
  name: "mapView",
  mixins: [commonDataMixin],
  data() {
    return {
      chartData: {},
      chartSettings: {}
    };
  },
  mounted() {},
  methods: {
    render() {
      const { userGrowthLastDay } = this.calScreenData;
      this.chartData = {
        columns: ["title", "percent"],
        //percent要求小于 1数字
        rows: [
          { title: "rate", percent: (+userGrowthLastDay / 100).toFixed(2) }
        ]
      };
      this.chartSettings = {
        seriesMap: {
          rate: {
            //对应rows中的 title 值
            radius: "80%", //半径
            label: {
              // normal: {
              //   formatter: v => {
              //     return `${Math.floor(v.data.value * 100)}`;
              //   }
              // },
              textStyle: {
                fontSize: 36,
                color: "#999",
                fontWeight: "normal"
              },
              position: ["50%", "50%"]
              // insideColor: "red" //文字与波浪重叠颜色，需去掉normal配置才生效
            },
            outline: {
              itemStyle: {
                borderColor: "#aaa4a4",
                borderWidth: 1,
                color: "none",
                shadowColor: "#fff"
              },
              borderDistance: 0 //内外边间距0
            },
            backgroundStyle: {
              color: "#fff"
            },
            itemStyle: {
              shadowBlue: 0,
              shadowColor: "#fff"
            },
            amplitude: 8,
            color: [getColor(this.chartData.rows[0].percent)] //颜色
          }
        }
      };
    }
  },
  watch: {
    calScreenData() {
      this.render();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
