<template>
  <div id="test">
    <div class="imgBox">
      <img v-if="flag" class="img" src="@/assets/img/d.png" alt="" />
      <img v-else class="img" src="@/assets/img/e.png" alt="" />
      <!-- <img class="touxiang" src="@/assets/img/c.png" alt="" /> -->
    </div>
    <div class="time" @click="getTime">
          扫码时间: {{ month }}月{{ day }}日 {{ hour }}:{{ minute }}
    </div>
    <div class="number">198352</div>
    <div class="name">姓名 郭尚保</div>
    <div class="name">学号 1807119313</div>
    <div class="name">学院 软件学院</div>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      flag: true,
      month: "",
      day: "",
      hour: "",
      minute: "",
    };
  },
  methods: {
    getTime() {
      
    },
  },
  created() {
    let now = new Date();
      this.month =
        10 > now.getMonth() + 1
          ? "0" + (now.getMonth() + 1)
          : now.getMonth() + 1;
      this.day = 10 > now.getDate() ? "0" + now.getDate() : now.getDate();
      this.hour = 10 > now.getHours() ? "0" + now.getHours() : now.getHours();
      this.minute =
        10 > now.getMinutes() ? "0" + now.getMinutes() : now.getMinutes();
    setInterval(() => {
      this.flag = !this.flag;
    }, 500);
  },
};
</script>
<style scoped>
.imgBox {
  position: relative;
  width: 100%;
  height: 500px;
  /* background-color: brown; */
}
.img {
  width: 100%;
  height: 100%;
}
.touxiang {
  position: fixed;
  top: 92px;
  left: 63px;
  z-index: 2;
  width: 266px;
  height: 362px;
}
.time {
  width: 100%;
  /* height: 50px; */
  text-align: center;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: rgb(236, 234, 234) solid 1px;
  font-size: 27px;
  /* background-color: crimson; */
}
.number {
  width: 100%;
  /* height: 50px; */
  text-align: center;
  font-weight: 600;
  padding: 7px 0;
  border-bottom: rgb(236, 234, 234) solid 1px;
  font-size: 35px;
}
.name {
  font-size: 25px;
  padding-left: 35px;
  padding-bottom: 10px;
  /* background-color: darkred; */
}
</style>