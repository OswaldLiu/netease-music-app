<template>
  <div class="recommend">
      <div class="cltnText">推荐歌单</div>
      <rec-cltn-list></rec-cltn-list>
      <router-view></router-view>
  </div>
</template>

<script>
import RecCltnList from '@/components/Recommend/RecCltnList.vue'

export default {
    name:'Recommend',
    components:{
        RecCltnList,
    }
}
</script>

<style lang='less'>
.recommend{
    background: rgb(252, 252, 252);
    .cltnText{
        padding-top: 10px;
    }
}
</style>