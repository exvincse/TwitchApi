<template>
    <div>
      <div class="topgame d-flex">
        <div class="col-lg-2 col-6">
          <div class="card game h-100 bg-l-gray text-center">
            <img src="../assets/img/moregame.jpg" class="card-img-top game-pic" alt="">
            <div class="card-body">
              <span class="card-title text-white">更多遊戲</span>
            </div>
            <router-link class="gamename"
                    to="/game"></router-link>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <div class="card game h-100 bg-l-gray text-center">
            <img src="../assets/img/allgame.jpg" class="card-img-top game-pic" alt="">
            <div class="card-body">
              <span class="card-title text-white">全部遊戲</span>
            </div>
            <a href="#" title="全部遊戲"
              @click.prevent="Filterchannel('')"></a>
          </div>
        </div>

        <div class="col-lg-2 col-6"
          v-for="item in topdata" :key="item.id">
          <div class="card game border-l-gray">
            <img :src="item.box_art_url" class="card-img-top" alt="">
            <div class="card-body bg-l-gray text-white text-center">
              <div class="card-title gamename">{{item.name}}</div>
            </div>
            <a href="#" :title="item.name"
             @click.prevent="Filterchannel(item.name)"></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      topdata: [],
    };
  },
  created() {
    this.getgame();
  },
  methods: {
    getgame() {
      const api = `${process.env.VUE_APP_APIPATH}/helix/games/top`;
      this.$http.get(api, {
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': `${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        const ary = response.data.data;
        ary.forEach((item) => {
          item.box_art_url = item.box_art_url.replace('{width}', '200').replace('{height}', '250');
        });
        this.topdata = ary;
      });
    },
    Filterchannel(name) {
      this.$emit('getname', name);
    },
  },
};
</script>
