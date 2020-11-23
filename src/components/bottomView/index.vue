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
                <div class="chart_data">{{ totalUser | format }}</div>
                <v-chart :options="searchUserOptions" />
              </div>
              <div class="chart2">
                <div class="chart_title">搜索量</div>
                <div class="chart_data">{{ totalSearch | format }}</div>
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
                :total="total"
                :page-size="pageSize"
                @current-change="currentChange">
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
          <el-radio-group v-model="radio1" @change="radioChange" size="small">
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
import commonDataMixin from "@/components/mixins/commonDataMixin";
const colors = [
  "#8d7fec",
  "#5085f2",
  "#f8726b",
  "#e7e702",
  "#78f283",
  "#6bc1fc"
];
export default {
  mixins: [commonDataMixin],
  components: {},

  data() {
    return {
      searchUserOptions: {},
      searchNumOptions: {},
      tableData: [],
      radio1: "品类",
      salePieOptions: {},
      total: 0,
      pageSize: 4,
      totalUser: 0,
      totalSearch: 0
    };
  },
  methods: {
    currentChange(val) {
      this.tableData = this.totalData.slice(
        (val - 1) * this.pageSize,
        val * this.pageSize
      );
    },
    radioChange(val) {
      if (val === "品类") {
        this.renderPieChart(this.categorData1, "品类");
      } else {
        this.renderPieChart(this.categorData2, "商品");
      }
    },
    renderPieChart(categorData, type) {
      if (!categorData || !categorData.data1) {
        return;
      }
      const total = categorData.data1.reduce((s, i) => s + i, 0);
      const chartData = categorData.data1.map((item, index) => {
        const percent = (item / total).toFixed(2);
        return {
          legendname: categorData.axisX[index],
          name: `${type}分类 | ${percent}%`, //配置lagen显示文字
          value: item,
          percent: percent,
          itemStyle: {
            // 实际项目可多配置几个颜色，或是显示默认前6个数据
            color: colors[index % colors.length]
          }
        };
      });

      this.salePieOptions = {
        title: [
          {
            text: `${type}分类`,
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
            data: chartData,
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
    },
    renderLineChart() {
      const render = key => {
        const data = [];
        const xAxis = [];
        this.totalData.forEach(item => {
          data.push(item[key]);
          xAxis.push(item.keyWord);
        });
        return {
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: xAxis
          },
          yAxis: {
            show: false
          },
          tooltip: {},
          series: [
            {
              type: "line",
              data,
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
        };
      };

      this.searchUserOptions = render("userNum");
      this.searchNumOptions = render("searchNum");
    }
  },
  mounted() {
    this.renderPieChart();
  },
  watch: {
    calReportData() {
      this.totalData = this.calReportData.map((item, index) => {
        return {
          no: index++,
          keyWord: item.word,
          searchNum: item.count,
          userNum: item.user,
          clickRate: `${(item.user / item.count).toFixed(2) * 100}%`
        };
      });
      this.tableData = this.totalData.slice(0, this.pageSize);
      this.total = this.totalData.length;
      // reduce,第二参数表示s初始值
      this.totalUser = this.totalData.reduce((s, i) => s + i.userNum, 0);
      this.totalSearch = this.totalData.reduce((s, i) => s + i.searchNum, 0);

      this.renderLineChart();
    },
    categorData1() {
      this.renderPieChart(this.categorData1, "品牌");
    }
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
