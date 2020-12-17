<template>
  <div class="header">
    <img class="icon" id="menu" :src="require('@/assets/icon/menu.png')" />
    <div class="headline">GMUSIC</div>
    <img class="icon" id="search" :src="require('@/assets/icon/search.png')" @click="goSearch()"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goSearch(){
      this.$router.push('/search');
    }
  },
};
</script>

<style lang="less">
.header {
  width: 100%;
  background: @theme-color;
  color: white;
  font-size: 35px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .icon {
    padding-left: 20px;
    padding-right: 20px;
    height: 25px;
    width: 25px;
  }
}
</style>