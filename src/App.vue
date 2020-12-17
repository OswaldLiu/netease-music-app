<template>
  <div id="app">
    <div class="whole-header">
      <main-header id="main-header"></main-header>
      <tab id="tab"></tab>
    </div>
    <keep-alive>
      <router-view class="content" />
    </keep-alive>
    <music-player class="player"></music-player>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer.vue";
import Tab from "./components/Tab.vue";

export default {
  components: {
    MainHeader,
    Tab,
    MusicPlayer,
  },
};
</script>

<style lang="less">
#app {
  z-index: 0; //最底层堆叠
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  .content {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .player {
    z-index: 100;
  }
}
</style>
