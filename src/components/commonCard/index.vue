<template>
  <div class="commonCard"> 
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
  
<script>

export default {
  props:{
    title:String,
    value:String
  },
  components: {
    
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  .title{
    font-size: 12px;
    line-height: 18px;
    color: #999;
  }
  .chart{
    height: 50px;
    /* background: red; */
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    font-size: 12px;
  }
 

</style>

<style>
  /* 公用样式 */
  .emphasize{
    margin-left: 6px;
    color: '#333' !important;
    font-weight: 700;
  }
  .increase{
    width: 0;
    height: 0;
    border-width: 3px;
    border-color:transparent transparent red transparent;
    border-style: solid;
    /* margin: 6px 0 0 6px; */
    margin:0 3px;
  }
  .decrease{
    width: 0;
    height: 0;
    border-width: 3px;
    border-color:green transparent transparent transparent;
    border-style: solid;
      margin:0 3px;
    /* margin: 6px 0 0px 6px; */
  }
</style>
  