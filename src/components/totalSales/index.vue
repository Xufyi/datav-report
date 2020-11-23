<template>
    <div class="topView">
      <common-card
        title="累计销售额"
        :value="salesToday"
      >
        <template>
          <div class="compare_wrap">
            <div class="compare">
              <span> 日同比 </span>
              <span class="emphasize">{{ salesGrowthLastDay }}</span>
              <div class="increase"></div>
            </div>
            <div class="compare">
                <span> 月同比 </span>
                <span class="emphasize">{{ salesGrowthLastMonth }}</span>
                <div class="decrease"></div>
              </div>
          </div>
        </template>
        <template v-slot:footer>
          <span>昨日销售额</span>
          <span class="emphasize">￥32,039,166</span>
        </template>
      </common-card>
      <!-- {{ calReportData }} -->
    </div>
</template>

<script>
import commonCardMixin from "@/components/mixins/commonCardMixin";
import commonDataMixin from "@/components/mixins/commonDataMixin";
import { setTimeout } from "timers";

export default {
  mixins: [commonCardMixin, commonDataMixin],
  components: {},
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      console.log(
        // this.calReportData,
        this.calScreenData,
        // this.calMapScatter,
        9999
      );
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.compare_wrap {
  font-size: 12px;
  height: 100%;
  .compare {
    padding: 2px 0;
    height: 50%;
    display: flex;
    align-items: center;
  }
  .total {
    font-style: 12px;
    color: #666;
  }
}
</style>
