<template>
    <div>
      <div class="topgame d-flex">
        <div class="col-2">
          <div class="card game h-100">
            <router-link class="card-title gamename"
                    to="/game">所有遊戲</router-link>
          </div>
        </div>
        <div class="col-2"
          v-for="item in topdata" :key="item.id">
          <div class="card game">
            <img :src="item.box_art_url" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title gamename">{{item.name}}</h5>
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
    }
  },
  created() {
    this.getgame();
  },
  methods: {
    getgame() {
      const api =`${process.env.VUE_APP_APIPATH}/helix/games/top`;
      this.$http.get(api, {
        headers: {
					'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID':`${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        const ary = response.data.data;
        ary.forEach((item) => {
          item.box_art_url = item.box_art_url.replace('{width}', '200');
          item.box_art_url = item.box_art_url.replace('{height}', '250');
        });
				this.topdata = ary;
      })
    },
    Filterchannel(name) {
      this.$emit('getname', name);
    },
  },
};
</script>
