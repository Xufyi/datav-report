<template>
  <div class="saleView">
    <el-card  shadow="hover" class="saleView_card" :body-style="{ 'padding':'0 0 10px 0'}">
      <div slot="header" class="header">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          class="header_menu"
        >
          <el-menu-item index="1">销售额</el-menu-item>
          <el-menu-item index="2">访问量</el-menu-item>
        </el-menu>
        <div class="head_right">
          <el-radio-group v-model="radio1">
            <el-radio-button label="今日" />
            <el-radio-button label="本周" />
            <el-radio-button label="本月" />
            <el-radio-button label="今年" />
          </el-radio-group>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            class="header-date-picker">
          </el-date-picker>
        </div>
      </div>
      <div class="saleView-charts-wrap">
        <v-chart :options="options" class="charts"/>
        <div class="rankingList">
          <div class="rank_title">排行榜</div>
          <div v-for="item in rankList" :key="item.no" class="item_wrap">
            <div :class="['item_no',+item.no <= 3 ? 'item_top' : '' ]">{{ +item.no }}</div>
            <span class="item_name">{{item.name}}</span>
            <span class="item_num">{{item.money}}</span>
          </div>
        </div>
      </div>

    </el-card>
  </div>
</template>

<script>
import commonDataMixin from "@/components/mixins/commonDataMixin";
export default {
  mixins: [commonDataMixin],
  components: {},
  data() {
    return {
      activeIndex: "1",
      radio1: "今日",
      value1: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              // debugger;
              picker.$emit("pick", [new Date(), new Date()]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      options: null,
      rankList: []
    };
  },
  watch: {
    //初始回显
    orderFullYear() {
      this.render("年度销售量", this.orderFullYear, this.orderFullYearAxis);
    },
    orderRank() {
      this.rankList = this.orderRank;
    }
  },
  methods: {
    render(title, data, xAxis) {
      this.options = {
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: "#666"
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: "category",
          data: xAxis,
          axisTick: {
            alignWidthLabel: true,
            lineStyle: {
              color: "#999"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            color: "#333"
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false //刻度线
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee"
            }
          }
        },
        series: {
          name: title,
          type: "bar",
          barWidth: "35%",
          data: data
        },
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          righe: 60,
          bottom: 50
        },
        tooltip: {}
      };
    },
    handleSelect(val) {
      if (val === "1") {
        this.render("年度销售量", this.orderFullYear, this.orderFullYearAxis);
        this.rankList = this.orderRank;
      } else if (val === "2") {
        this.render("年度访问量", this.userFullYear, this.userFullYearAxis);
        this.rankList = this.userRank;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.saleView ::v-deep {
  .saleView_card {
    margin-top: 20px;
    .el-card__header {
      height: 60px;
      padding: 0px;
      border-bottom: 0;
      .header {
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 60px;
        justify-content: space-between;
        position: relative;
        .header_menu {
          width: 100%;
        }
        .head_right {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 20px 0 0;
          .header-date-picker {
            margin-left: 20px;
          }
        }
      }
    }
  }
  .saleView-charts-wrap {
    height: 250px;
    display: flex;
    .charts {
      height: 100%;
      flex: 7;
    }
    .rankingList {
      flex: 3;
      height: 100%;
      .rank_title {
        color: "#303133";
        line-height: 40px;
      }
      .item_wrap {
        color: #666;
        padding: 4px 20px 4px 4px;
        display: flex;
        align-items: center;
        .item_no {
          width: 20px;
          height: 20px;
          text-align: center;
          &.item_top {
            background: #000;
            color: #fff;
            border-radius: 50%;
            width: 20px;
            height: 20px;
          }
        }
        .item_name {
          margin-left: 5px;
        }
        .item_num {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
