<template>
  <div class="tab">
    <div>
      <router-link to="/recommend" id="recommend-tab">推荐</router-link>
    </div>
    <div>
      <router-link to="/rank" id="rank-tab">排行</router-link>
    </div>
    <div>
      <router-link to="/singer" id="singer-tab">歌手</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    focus: function () {
      console.log(this.$route);
      return this.$route;
    },
  },
};
</script>

<style lang="less">


.tab {
  display: flex;
  background: @tab-color;
  opacity: @tab-opacity;
  flex-direction: row;
  height:@tab-height;
  div{
    flex-grow:1;
    a{
      line-height: @tab-height;
      color: white;
      text-decoration:none;
      &.router-link-exact-active{
        text-decoration: underline;
      }
    }
  }
}
</style>