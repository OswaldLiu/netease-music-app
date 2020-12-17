<template>
  <div class="songlist">
    <ul>
      <li
        class="song"
        v-for="song in songList"
        :key="song.id"
        @click="selectSong(song)"
      >
        <div class="number">{{ songList.indexOf(song) + 1 }}</div>
        <div class="content">
          <div class="songname">{{ song.name }}</div>
          <div class="artists">{{ song.artists }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["songList"],
  methods: {
    selectSong(song) {
      //歌单里面点击歌曲触发的事件
      //传递歌曲详情（不包括歌曲链接），切换页面
      this.$store.commit("deliverSongDetails", song);
      this.$store.commit("songListAppend", song);
      this.$store.commit("togglePlayerMode", true);
      if (!(this.$store.state.playing)) this.$store.commit("togglePlayingStatus");
    },
  },
};
</script>

<style lang='less'>
.songlist {
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  overflow-x: hidden;
  .playall {
    height: 60px;
    .list-item();
    .text {
      height: 100%;
      vertical-align: middle;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    .song {
      display: flex;
      flex-direction: row;
      list-style: none;
      .list-item();
      height: 60px;
      .content {
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
      }
      .number {
        padding-right: 10px;
      }
    }
  }
}
</style>