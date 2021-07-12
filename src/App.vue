<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      icon: {
        home: 'home',
        home_active: 'home-copy',
        order: 'order',
        order_active: 'order-copy',
        cats: 'gouwuche',
        cats_active: 'gouwuche-copy',
        profile: 'wode',
        profile_active: 'wode-copy',

      },
    };
  },
};
</script>

<style>
  .van-tabbar {
    border-top: #000 solid 0px;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
  }
</style>
