<template>
    <div class="todayUsers">
      <common-card
        title="今日建议用户数"
        value="81,014"
      >
        <template>
          <v-chart :options="getOptions()" />
        </template>
        <template v-slot:footer>
          <span>退货率</span>
          <span class="emphasize">5.34%</span>
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
          color:['#3398DB'],
          xAxis:{
            show :false,
            boundaryGap:false, //去掉x轴默认预留的y轴位置位置
            data:['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00',]
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
            type:"bar",
            data:[410,82,200,334,390,330,220,150,82,200,134,290,330,150],
            barWidth :'60%'
          }]
        }
      }
    }
  }
</script>
  
<style>
</style>
  