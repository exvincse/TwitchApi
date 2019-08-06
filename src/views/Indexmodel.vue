<template>
  <div>
    <div class="bg-cover">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <router-link class="navbar-brand" to="/">
          <img class="d-lg-block d-none" src="../assets/img/twitchlogo.png" style="max-width:90px" alt="">
          <img class="d-lg-none d-block" src="../assets/img/rwdlogo.png" style="max-width:20px" alt="">
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="input-group mx-auto w-50">
            <input type="text" class="form-control rounded-0" placeholder="請輸入實況主名稱"
              v-model="name"
              @keyup.enter="liveselect()">
            <button class="btn btn-success rounded-0 input-group-append"
                @click.prevent="liveselect()">查詢</button>
          </div>
        </div>

        <div class="input-group mx-auto d-none search" style="width:70%">
          <input type="text" class="form-control form-control-sm rounded-0" placeholder="請輸入實況主名稱"
            v-model="name"
            @keyup.enter="liveselect()">
          <button class="btn btn-sm btn-success selectname rounded-0 input-group-append"
              @click.prevent="liveselect()">
            <i class="fas fa-search text-white fa-lg"></i>
          </button>
        </div>
        <div class="d-lg-none d-block">
          <button class="btn"
            @click="slider()">
            <i class="fas fa-search text-white fa-lg"></i>
          </button>
        </div>

      </nav>
      <router-view class="fixed-pt"></router-view>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    liveselect() {
      this.$router.push({
        path: '/master',
        query:{
          name:this.name,
        }
      })
      this.name = '';
    },
    slider() {
      $('.search').toggleClass('d-flex');
    }
  },
}
</script>
<style lang="scss" scoped>
.bg-cover{
   background-image:url('../assets/img/bg.jpg');
   min-height: 100vh;
}
.navbar{
  position: fixed;
  width: 100%;
  z-index: 3333;
}
.fixed-pt{
  padding-top: 60px;
}
</style>

