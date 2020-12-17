<template>
  <div class="recCltnItem">
      <div class="icon">
          <img class="cover" v-lazy='itemData.picUrl' @click="selectCollection()">
          <p class="playcount">
              <i class="headphone-icon"></i>
              {{Math.floor((itemData.playCount)/10000)}}万
          </p>
      </div>
      <div class="describe">{{itemData.name}}</div>
  </div>
</template>

<script>
export default {
    data(){return{
    }},
    props:['itemData'],
    methods:{
        selectCollection(){
            const path = this.$route.fullPath + '/' + this.itemData.id;
            this.$store.commit('deliverCltnDetails',this.itemData);
            this.$router.push(path);
        }
    }
}
</script>

<style lang="less">
    .icon{
        .cover{
            width:100%;
            height:100%
        }
    }
</style>