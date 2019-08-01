<template>
    <div>
      <div class="container">
					<h1 class="text-center">所有遊戲</h1>
          <div class="row">
							<div class="col-12">
								<div class="row justify-content-center">
									<div class="col-6">
										<div class="input-group mb-3">
											<input type="text" class="form-control" placeholder="請輸入遊戲名稱" 
												v-model="gamename">
											<div class="input-group-append">
												<a href="#" class="btn btn-primary"
													 @click.prevent="selectgame()">搜尋</a>
											</div>
										</div>
									</div>
								</div>
							</div>
            <div class="col-3"
								v-for="item in totalgame" :key="item.game._id" v-if="!selectdata.length && selectnull">
							<div class="card game">
									<img :src="item.game.logo.template" class="card-img-top" alt="">
									<div class="card-body">
									<h6 class="card-title gamename">{{item.game.name}}</h6>
									</div>
									<a href="#"
										@click.prevent="gotogamne(item.game.name)"></a>
							</div>
            </div>

						<div class="col-3"
								v-for="item in selectdata" :key="item._id" v-if="selectdata.length">
							<div class="card game">
									<img :src="item.logo.template" class="card-img-top" alt="">
									<div class="card-body">
									<h6 class="card-title gamename">{{item.name}}</h6>
									</div>
									<a href="#"
										@click.prevent="gotogamne(item.name)"></a>
							</div>
            </div>
          </div>
					<div v-if="!selectnull">找不到符合的遊戲</div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
			totalgame: [],
			selectdata: [],
			gamename:'',
			selectnull:true,
    }
  },
  created() {
    this.get();
  },
  methods: {
    get() {
			this.$store.dispatch('Loading', true);
      const api = `${process.env.VUE_APP_APIPATH}/kraken/games/top?limit=100`;
      this.$http.get(api, {
        headers: {
					'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID':`${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
				const ary = response.data.top;
        ary.forEach((item) => {
          item.game.logo.template = item.game.logo.template.replace('{width}', '200');
          item.game.logo.template = item.game.logo.template.replace('{height}', '150');
        });
				this.totalgame = ary;
				this.$store.dispatch('Loading', false);
      });
    },
    gotogamne(name) {
      this.$router.push({
        path: '/selectgame',
        query: {
					name,
				},
      });
    },
    selectgame() {
			if (this.gamename === '') return false;
      this.$store.dispatch('Loading', true);
			const api = `${process.env.VUE_APP_APIPATH}/kraken/search/games?query=${this.gamename}`;
      this.$http.get(api, {
				headers: {
					'Accept': 'application/vnd.twitchtv.v5+json',
					'Client-ID': `${process.env.VUE_APP_CUSTOMPATH}`,
				},
			}).then((response) => {
				const ary = response.data.games;
				if (ary === null) {
					this.selectnull = false;
					this.$store.dispatch('Loading', false);
					return false;
				} else {
					this.selectnull = true;
				}
        ary.forEach((item) => {
          item.logo.template = item.logo.template.replace('{width}', '200');
          item.logo.template = item.logo.template.replace('{height}', '150');
				});
				this.selectdata = ary;
				this.gamename = '';
        this.$store.dispatch('Loading', false);
      });
    },
  },
};

</script>
