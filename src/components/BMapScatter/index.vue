<template>
    <ve-bmap
        width='100%'
        height="100%"
        :title="chartTitle"
        :settings="chartSettings"
        :series="chartSeries"
        :tooltip="chartTooltip">
    </ve-bmap>
</template>

<script>
import "echarts/extension/bmap/bmap";
// 假数据
import mapStyle from "@/views/mapStyle";
import mapData from "@/views/mapData";

const { data: cityAndSale, geo: coordinate } = mapData;
const testPoint = calData(cityAndSale, coordinate);
const testPoint2 = calData(
  cityAndSale.sort((a, b) => b.value - a.value).slice(0, 9),
  coordinate
);
function calData(cityAndSale, coordinate) {
  let res = [];
  cityAndSale.forEach(v => {
    res.push({
      name: v.name,
      value: [...coordinate[v.name], v.value]
    });
  });
  return res;
}

export default {
  name: "bmap2",
  components: {},
  data() {
    return {
      chartTitle: {
        text: "外卖销售数据大盘",
        subtext: "销售趋势统计",
        sublink: "https://github.com/Xufyi",
        left: "center"
      },
      chartSettings: {
        key: "oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK",
        bmap: {
          //这里开启才会显示地图
          center: [120, 30],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: mapStyle
          }
        }
      },
      chartSeries: [
        {
          name: "销售额", //tooltip标题
          type: "scatter",
          coordinateSystem: "bmap",
          data: testPoint,
          encode: {
            value: 2 //取值第二项
          },
          itemStyle: {
            color: "purple"
          },
          symbolSize: function(val) {
            return val[2] / 10; //点大小
          },
          label: {
            show: false, // 默认不显示
            position: "right",
            formatter: v => {
              return `${v.data.name}-${v.data.value[2]}`;
            }
          },
          emphasis: {
            // 鼠标移入显示
            label: {
              show: true
            }
          }
        },
        {
          name: "Top 2",
          type: "effectScatter",
          coordinateSystem: "bmap", //百度地图
          data: testPoint2,
          symbolSize: v => {
            return v[2] / 10;
          },
          encode: {
            value: 2
          },
          label: {
            show: false, // 默认不显示
            position: "right",
            formatter: v => {
              return `${v.data.name}-${v.data.value[2]}`;
            }
          },
          hoverAnimation: true, //鼠标移入动画
          rippleEffect: {
            brushType: "stroke" //空心
          },
          itemStyle: {
            color: "purple",
            shandowBlue: 10,
            shadowColor: "#333"
          }
        }
      ],
      chartTooltip: { show: true }
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>





