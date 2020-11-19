<template>
  <div class="bottomView">
    <div class="view">
      <el-card shadow="hover" :body-style="{ 'padding':'10px 0'}">
        <template v-slot:header>
          <div class="view_title">关键词搜索</div>
        </template>
        <template>
          <div class="view_body">
            <div class="charts_wrap">
              <div class="chart1">
                <div class="chart_title">搜索用户数</div>
                <div class="chart_data">93,270</div>
                <v-chart :options="searchUserOptions" />
              </div>
              <div class="chart2">
                <div class="chart_title">搜索量</div>
                <div class="chart_data">179,497</div>
                <v-chart :options="searchNumOptions" />
              </div>
            </div>
            <div class="table_wrap">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="no" label="排名" width="180"/>
                <el-table-column prop="keyWord" label="关键词" width="180" />
                <el-table-column prop="searchNum" label="总搜索量" />
                <el-table-column prop="userNum" label="搜索用户数" />
                <el-table-column prop="clickRate" label="点击率" />
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover" :body-style="{ 'padding':'10px 0'}">
        <template v-slot:header>
          <div class="view_title">分类销售排行</div>
          <el-radio-group v-model="radio1" size="small">
            <el-radio-button label="品类" />
            <el-radio-button label="商品" />
          </el-radio-group>
        </template>
        <template>
          <div class="view_body">
            <v-chart :options="salePieOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchUserOptions: {
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: "line",
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            areaStyle: {
              color: "rgba(95,187,255,.5)"
            },
            lineStyle: {
              color: "rgba(95,187,255,.5)"
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      searchNumOptions: {
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: "line",
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            areaStyle: {
              color: "rgba(95,187,255,.5)"
            },
            lineStyle: {
              color: "rgba(95,187,255,.5)"
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      tableData: [
        {
          no: "1",
          keyWord: "牛肉",
          searchNum: "8869",
          userNum: "8199",
          clickRate: "92.45%"
        },
        {
          no: "2",
          keyWord: "跑腿",
          searchNum: "8159",
          userNum: "7719",
          clickRate: "94.61%"
        },
        {
          no: "3",
          keyWord: "麦当劳",
          searchNum: "9127",
          userNum: "7433",
          clickRate: "92.45%"
        },
        {
          no: "4",
          keyWord: "大连",
          searchNum: "7646",
          userNum: "6261",
          clickRate: "92.45%"
        }
      ],
      radio1: "品类",
      salePieOptions: {}
    };
  },
  methods: {
    renderPieChart() {
      const mockData = [
        {
          legendname: "粉面粥店",
          name: "品牌分类 | 15.40%", //配置lagen显示文字
          value: 67,
          percent: "15.40",
          itemStyle: {
            color: "#e7e782"
          }
        },
        {
          legendname: "简易便当",
          name: "品牌分类 | 23.30%", //配置lagen显示文字
          value: 97,
          percent: "23.30%",
          itemStyle: {
            color: "#8d7fec"
          }
        },
        {
          legendname: "汉堡披萨",
          name: "累计订单量 | 21.150%",
          value: 92,
          percent: "21.15%",
          itemStyle: {
            color: "#5885f2"
          }
        }
      ];
      this.salePieOptions = {
        title: [
          {
            text: "品牌分类",
            textStyle: {
              fontSize: 14,
              color: "#666"
            },
            left: 20,
            top: 20
          },
          {
            text: "累计订单量",
            subtext: "320",
            x: "34.5%",
            y: "42.5%",
            textStyle: {
              fontSize: 14,
              color: "#999"
            },
            subtextStyle: {
              fontSize: 20,
              color: "#333"
            },
            textAlign: "center"
          }
        ],
        series: [
          {
            type: "pie",
            data: mockData,
            label: {
              normal: {
                show: true,
                position: "outter", //inner
                formatter: params => {
                  return params.data.legendname;
                }
              }
            },
            center: ["35%", "50%"], //画布最短一边计算的比例
            radius: ["45%", "60%"], //环状 ，默认最长75%
            labelLine: {
              //label两引线长度，样式
              normal: {
                length: 5,
                legnth2: 3,
                smooth: true
              }
            },
            clockwise: false, //逆时针取数
            itemStyle: {
              //每块饼的间距
              borderWidth: 4,
              borderColor: "#fff"
            }
          }
        ],
        legend: {
          type: "scroll", //多值出现滚动条
          orient: "vartical", //垂直居中
          height: 250,
          left: "70%",
          top: "middle",
          textStyle: {
            color: "#8c8c8c"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: params => {
            //params.marker 圆点
            return `标题
              </br>
              ${params.marker}${params.data.legendname}
              </br>
              数量：${params.value}
              </br>
              占比: ${params.percent}
              `;
          }
        }
      };
    }
  },
  mounted() {
    this.renderPieChart();
  }
};
</script>

<style lang="scss" scoped>
.bottomView ::v-deep {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
      .el-card__header {
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .view_title {
      padding-left: 20px;
    }
    .view_body {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      height: 452px;
      .charts_wrap {
        display: flex;
        justify-content: flex-end;
        .chart1,
        .chart2 {
          width: 50%;
          box-sizing: border-box;
          .chart_title {
            font-size: 14px;
            color: #999;
            line-height: 25px;
          }
          .chart_data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 7px;
          }
          .echarts {
            width: 100%;
            height: 50px;
          }
        }
        .chart1 {
          padding-right: 10px;
        }
        .chart2 {
          padding-left: 10px;
        }
      }
      .table_wrap {
        padding: 10px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
