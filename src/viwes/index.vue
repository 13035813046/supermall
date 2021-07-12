<template>
<div id="index">
  <img src="@/assets/img/index.png" alt="">
  <div class="btn" @click="btn">

  </div>
</div>
</template>
<script>
export default {
  name:'index',
  methods: {
    btn() {
      this.$router.push('/saoyisao')
    }
  },

}
</script>
<style scoped>
  #index {
    position: relative;
    width: 100%;
    height: 667px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    top: 20px;
    right: 10px;
    width: 35px;
    height: 35px;
    /* background-color: brown; */
  }
</style>