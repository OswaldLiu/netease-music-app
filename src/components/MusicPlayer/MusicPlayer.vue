<template>
  <div class="music-player" v-show="songDetails.id != 0">
    <full-screen-player v-show="isFullScreen"></full-screen-player>
    <mini-player v-show="!isFullScreen"></mini-player>
    <audio :src="songUrl" ref="audio" autoplay preload="auto"></audio>
  </div>
</template>

<script>
import FullScreenPlayer from "./FullScreenPlayer.vue";
import MiniPlayer from "./MiniPlayer.vue";
export default {
  data() {
    return {
      songUrl: "",
    };
  },
  components: { MiniPlayer, FullScreenPlayer },
  computed: {
    songDetails() {
      const preFix = "https://music.163.com/song/media/outer/url?id=";
      this.updateSongUrl(preFix + this.$store.state.songDetails.id + ".mp3");
      return this.$store.state.songDetails;
    },
    isFullScreen() {
      return this.$store.state.isFullScreen;
    },
    playing() {
      return this.$store.state.playing;
    },
  },
  watch: {
    playing() {
      //事先在对应DOM节点用ref属性标记
      if (this.$store.state.playing) this.$refs.audio.play();
      else this.$refs.audio.pause();
    },
  },
  methods: {
    updateSongUrl(url) {
      this.songUrl = url;
    },
  },
};
</script>

<style lang="less">
.music-player {
  background: white;
}
</style>