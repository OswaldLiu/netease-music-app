<template>
  <div class="normal-player">
    <!-- 第一层filter过滤背景边缘不够模糊的地方 -->
    <div class="img-filter"></div>
    <img class="background" :src="songDetails.albumPicUrl" />
    <div class="img-filter"></div>
    <div class="content">
      <div class="toMini" @click="toMiniPlayer()">&lt;</div>
      <div class="animate-cover"></div>
      <div class="progress-wrapper"></div>
      <div class="controller">
        <img class="cycle-play" />
        <img class="prev" />
        <img class="start-pause" @click="toggleStatus()" :src="playPauseIcon"/>
        <img class="next" />
        <img class="like" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    songDetails() {
      return this.$store.state.songDetails;
    },
    isPlaying(){
      return this.$store.state.playing;
    },
    playPauseIcon(){
      let startPath = require('@/assets/icon/play1.png');
      let pausePath = require('@/assets/icon/pause1.png');
      return this.$store.state.playing?pausePath:startPath;
    }
  },
  methods: {
    toMiniPlayer() {
      //切换播放器样式
      this.$store.commit("togglePlayerMode", false);
    },
    toggleStatus() {
      //切换播放状态
      this.$store.commit("togglePlayingStatus");
    },
  },
};
</script>

<style lang="less">
.normal-player {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  .img-filter {
    position: fixed;
    top: -50px;
    left: -50px;
    width: 200%;
    height: 200%;
    background: black;
    opacity: 0.85;
  }
  .background {
    position: fixed;
    left: -50px;
    top: -50px;
    height: 120%;
    overflow: hidden;
    filter: blur(20px);
  }
  .content {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .toMini {
      height: 5%;
      width: 100%;
      margin: 10px;
      text-align: left;
      color: aliceblue;
    }
    .animate-cover {
      height: 70%;
    }
    .progress-wrapper {
      height: 7%;
    }
    .controller {
      height: 18%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .start-pause{
        height: 30%;
        width:auto;
      }
    }
  }
}
</style>