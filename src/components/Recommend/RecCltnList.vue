<template>
  <div class="recList">
    <ul class="recCltn">
      <li v-for="item in cltnDataList" v-bind:key="item.id">
        <rec-cltn-item :itemData="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecommendSongCollection } from "@/api/index.js";
import RecCltnItem from "./RecCltnItem.vue";
import {createCollectionList} from '@/static/entities/SongCollection'

export default {
  data() {
    return {
      cltnDataList: [],
    };
  },
  components: {
    RecCltnItem,
  },
  async beforeMount() {
    let res = await getRecommendSongCollection();
    this.cltnDataList = createCollectionList(res);
    // console.log(this.cltnDataList);
  },
};
</script>

<style lang="less">
.recList {
  width: 100%;
  .recCltn {
    padding-left: 0;
    li {
      display: inline-block;
      vertical-align: top;
      list-style-type: none;
      width: 33%;
    }
  }
}
</style>