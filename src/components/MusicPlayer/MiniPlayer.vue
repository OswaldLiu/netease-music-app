<template>
  <div class="mini-player" @click="toFullScreenPlayer()">
    <img class="cover" />
    <div class="details">
      <div class="songName"></div>
      <div class="artists"></div>
    </div>
    <img class="start-pause" @click.stop="toggleStatus()" :src="playPauseIcon" />
  </div>
</template>

<script>
export default {
  computed: {
    playPauseIcon() {
      let startPath = require("@/assets/icon/play1.png");
      let pausePath = require("@/assets/icon/pause1.png");
      return this.$store.state.playing ? pausePath : startPath;
    },
  },
  methods: {
    toFullScreenPlayer() {
      this.$store.commit("togglePlayerMode", true);
    },
    toggleStatus() {
      //切换播放状态
      this.$store.commit("togglePlayingStatus");
    },
  },
};
</script>

<style lang="less">
.mini-player {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background: @theme-color;
  opacity: 0.95;
  display: flex;
  flex-direction: row;
  align-items: center;
  .details {
    height: 100;
    width: 60%;
  }
  .start-pause {
    height: 70%;
    width: auto;
  }
}
</style>