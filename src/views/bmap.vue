<template>
  <div class="bmap">
      <v-chart :options="options"></v-chart>
  </div>
</template>

<script>
import "echarts/extension/bmap/bmap";

// 假数据
import mapStyle from "./mapStyle";
import mapData from "./mapData";

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
// calData(cityAndSale, coordinate);

export default {
  name: "bmap",
  components: {},
  data() {
    return {
      options: null
    };
  },
  mounted() {
    this.options = {
      title: {
        text: "外卖销售数据大盘",
        subtext: "销售趋势统计",
        sublink: "https://github.com/Xufyi",
        left: "center"
      },
      bmap: {
        key: "wflf0FwhppUfGfCbhdx96l0XP47H70gZ",
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: mapStyle
        }
      },
      tooltip: {},
      series: [
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
          //   hoverAnimation: true, //移入动画 ？？
          rippleEffect: {
            brushType: "stroke" //空心
          },
          itemStyle: {
            color: "purple",
            shandowBlue: 10,
            shadowColor: "#333"
          }
        }
      ]
    };
  }
};
</script>

<style>
.bmap {
  background: #eee;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>
