<template>
  <div>
    <div class="bg-cover">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <router-link class="navbar-brand mr-0 mr-lg-4" to="/">
          <img class="d-lg-block d-none" src="../assets/img/twitchlogo.png" style="max-width:90px" alt="">
          <img class="d-lg-none d-block" src="../assets/img/rwdlogo.png" style="max-width:20px" alt="">
        </router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-5">
            <li class="nav-item mr-3">
              <router-link class="nav-link l-border"
                      exact-active-class="l-active"
                      to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link l-border"
                      exact-active-class="l-active"
                      to="/game">遊戲</router-link>
            </li>
          </ul>
          <div class="input-group w-50">
            <input type="text" class="form-control rounded-0" placeholder="請輸入實況主名稱"
              v-model="name"
              @keyup.enter="liveselect()">
            <button class="btn btn-success rounded-0 input-group-append"
                @click.prevent="liveselect()">查詢</button>
          </div>
        </div>

        
        <div class="input-group w-60 d-lg-none d-flex">
          <input type="text" class="form-control rounded-0" placeholder="請輸入實況主名稱"
            v-model="name"
            @keyup.enter="liveselect()">
          <button class="btn btn-success rounded-0 input-group-append"
              @click.prevent="liveselect()">查詢</button>
        </div>
        <div class="d-lg-none d-block">
          <button class="btn navbar-toggler"
            @click="slider()">
            <i class="fas fa-bars text-white fa-lg"></i>
          </button>
        </div>
        <div class="navbar-collapse search">
          <ul class="navbar-nav mr-lg-5 w-100">
            <li class="nav-item py-1 mr-lg-3"
              @click="DropHide()">
              <router-link class="nav-link l-border"
                      exact-active-class="l-active"
                      to="/">首頁</router-link>
            </li>
            <li class="nav-item py-1"
              @click="DropHide()">
              <router-link class="nav-link l-border"
                      exact-active-class="l-active"
                      to="/game">遊戲</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view class="fixed-pt"></router-view>
      <footer class="py-5 mt-4 mb-0 bg-primary text-center text-white h6">以上均為學習用途</footer>
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
      if (this.name === '') return false;
      this.$router.push({
        path: '/master',
        query:{
          name:this.name,
        }
      })
      this.name = '';
    },
    slider() {
      $('.search').toggleClass('select-flex');
    },
    DropHide () {
      $('.navbar-toggler').click()
    },
  },
}
</script>
<style lang="scss" scoped>
.bg-cover{
  background-attachment: scroll;
  background-image: none;
  background-color: black;
   @media (min-width: 992px) { 
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-color: transparent;
    background-image:url('../assets/img/bg.jpg');
    min-height: 100vh;
   }
}
</style>

