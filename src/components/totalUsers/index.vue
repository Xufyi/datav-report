<template>
  <div class="totalUser">
    <common-card
      title="累计用户数"
      value="81,014"
    >
      <template>
        <div class="total-users-chart" ref="total-users-chart" :style="{height:'100%',width:'100%'}">
        </div>
      </template>
      <template v-slot:footer>
        <div class="footer_wrap">
          <span class="red">日同比</span>
          <span class="emphasize">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasize">35.91%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>

<!-- <svg t="1605592559848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3277" width="200" height="200"><path d="M928 721.8L510.8 304.5l-416 416 833.2 1.3z m0 0" p-id="3278"></path></svg>

<svg t="1605592580809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3416" width="200" height="200"><path d="M94.8 304.5L512 721.8l416-416-833.2-1.3z m0 0" p-id="3417"></path></svg> -->
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
   mounted(){
    const charts = this.$echarts.init( this.$refs['total-users-chart'] )
    charts.setOption({
      xAxis:{
        type:"value", 
        show :false,
      },
      yAxis:{
        type:"category", //y轴为category（分类） x轴为value（数值） ，柱子横向显示
        show:false, //隐藏
      },
      grid:{
        top:0,
        right:0,
        bottom:0,
        left:0
      },
      series:[
        {
          type:"bar",
          data:[100],
          barWidth:10,
          stack:"总量", //同一行显示柱子
          itemStyle:{
            color:"#45c946"
          }
        },
        {
          type:"bar",
          data:[250],
          barWidth:10,
          stack:"总量", //同一行显示柱子
          itemStyle:{
            color:"#eee"
          }
        },
        // 以下为两个自定义三角
        {
          type:"custom",
          stack:"总量",
          data:[100], //这里的值和series第一个值的data保持一致才会动态变更
          renderItem:(params,api)=>{
            const value = api.value(0) //拿到当前点的数据
            const endPoint = api.coord([value,0]) //拿到坐标
            console.log(params,api,value,endPoint);
            return {
              type:"group", //当有children时使用
              position:endPoint, //点位置
              children:[{
                type:"path",
                shape:{
                  d:"M94.8 304.5L512 721.8l416-416-833.2-1.3z m0 0", //路径，去iconfont找svg的d路径
                  x:-5, //偏移
                  y:-20,
                  width:10,
                  height:10,
                  layout:'corver' //充满容器
                },
                style:{
                  fill:"#45c946"
                }
              },{
                type:"path",
                shape:{
                  d:"M928 721.8L510.8 304.5l-416 416 833.2 1.3z m0 0",
                  x:-5,
                  y:10,
                  width:10,
                  height:10,
                  layout:'corver'
                },
                style:{
                  fill:"#45c946"
                }
              }],
            }
          }
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
  .footer_wrap{
    display: flex;
    align-items: center;
    .month{
      padding-left: 10px;
    }
  }

</style>
