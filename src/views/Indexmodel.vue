<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand"
          to="/">Twitch</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group mx-auto w-25">
          <input type="text" class="form-control" placeholder="請輸入實況主名稱"
            v-model="name"
            @keyup.enter="liveselect()">
          <div class="input-group-append">
            <button class="btn btn-primary"
              @click.prevent="liveselect()">查詢</button>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="mt-3"></router-view>
  </div>
</template>

<script>
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
    }
  },
}
</script>

