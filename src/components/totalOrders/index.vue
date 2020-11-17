<template>
  <div class="totalOrders">
    <common-card 
      title="累计订单额"
      value="2,157,420"
    >
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasize">2,000,000</span>
      </template>
    </common-card> 
  </div>
</template>
  
<script>
  import commonCardMixin from '@/components/mixins/commonCardMixin'

  export default {
    mixins:[
      commonCardMixin
    ],
    components: {
    },
    data(){
      return{

      }
    },
    methods:{
      getOptions(){
        return {
          xAxis:{
            type:"category", 
            //类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据
            show :false,
            boundaryGap:false //去掉x轴默认预留的y轴位置位置
          },
          yAxis:{
            show:false, //隐藏
          },
          grid:{
            top:0,
            right:0,
            bottom:0,
            left:0
          },
          series:[{
            type:"line",
            data:[620,432,220,534,790,430,220,320,532,320,834,690],
            areaStyle:{ //显示面积
              color:"purple"
            },
            lineStyle:{ //不显示线
              width:0
            },
            itemStyle:{ //不显示点
              opacity:0
            },
            smooth:true //线条平滑度
          }]
        }
      }
    }
  }
</script>

<style>
</style>
  