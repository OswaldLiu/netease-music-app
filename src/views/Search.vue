<template>
  <div class="search">
    <div class="search-box-wrapper">
      <div class="icon" @click="goBack()">&lt;</div>
      <div class="search-box">
        <input v-model="searchInput" type="text" placeholder="搜索歌曲、歌手" />
      </div>
      <div class="icon">x</div>
    </div>
    <div class="result-list">
      <song-list class="song-list" :songList="searchResult"></song-list>
    </div>
  </div>
</template>

<script>
import { throtDebounce } from "@/static/utils/util.js";
import { getSearch } from "../api";
import SongList from "../components/SongList.vue";
import { createSongList } from "../static/entities/Song";

export default {
  data() {
    return {
      searchInput: "",
      searchResult: [],
    };
  },
  components: { SongList },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    //在watch中监听，无法保存context
    this.$watch(
      "searchInput",
      throtDebounce(
        () => {
          getSearch(this.searchInput).then((res) => {
            console.log(res);
            this.searchResult = createSongList(res);
            console.log(this.searchResult);
          });
        },
        3000,
        1000
      )
    );
  },
};
</script>

<style lang='less'>
@search-wrapper-height: 60px;

.search {
  background: @theme-color;
  .new-page-position();
  .search-box-wrapper {
    .new-page-position();
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    background: @theme-color;
    z-index: 100;
    .search-box {
      height: 80%;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        height: 50%;
        width: 100%;
        background: rgb(56, 56, 56);
        border: 0px;
        color: white;
      }
      input:focus {
        outline: none;
      }
    }
    .icon {
      width: 10%;
      height: 80%;
      color: aliceblue;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .result-list {
    position: absolute;
    top: @search-wrapper-height;
    height: auto;
    overflow-x: hidden;
    overflow-y: scroll;
    .song-list {
      color: white;
    }
  }
}
</style>