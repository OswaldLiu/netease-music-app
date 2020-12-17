<template>
  <div class="collection-page">
    <img class="cover" :src="cltnDetails.picUrl" />
    <div class="page-header">
      <span class="back" @click="goBack()">&lt; </span>
      {{ headline }}
    </div>
    <div class="content">
      <div class="blank"></div>
      <div class="discription"></div>
      <div class="playall">播放全部</div>
      <song-list class="song-list" :songList="songList"></song-list>
    </div>
  </div>
</template>

<script>
// 歌单详情
import { getSongCollectionDetails } from "../api/index";
import SongList from "../components/SongList.vue";
import { createSongList, getCollectionCover } from "../static/entities/Song";

export default {
  data() {
    return {
      songList: [],
    };
  },
  props: ["id"],
  computed: {
    headline() {
      return "歌单";
    },
    cltnDetails() {
      return this.$store.state.cltnDetails;
    },
  },
  components: { SongList },
  async beforeMount() {
    //获取歌单详情
    //抽取封面url到coverPicUrl属性
    //抽取歌曲信息到songList
    // console.log("SongList");
    getSongCollectionDetails(this.id).then((res) => {
      // console.log("SongList", res.data);
      this.coverPicUrl = getCollectionCover(res);
      this.songList = createSongList(res);
      // console.log(this.songList, this.coverPicUrl);
    });
  },
  methods: {
    //返回上个页面
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.collection-page {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: @theme-color*1;
  overflow-y: scroll;
  overflow-x: hidden;
  color: white;
  font-weight: 100;
  .cover {
    z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }
  .page-header {
    width: 100%;
    margin: 10px;
    position: fixed;
    text-align: left;
  }
  .content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .blank {
      width: 100%;
      height: 40%;
      z-index: -100;
    }
    .playall {
      background: @theme-color*1;
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;
      vertical-align: middle;
      width: 100%;
      height: 60px;
      font-size: 15px;
    }
    .song-list {
      background: @theme-color*1;
    }
  }
}
</style>