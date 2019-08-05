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
												v-model="gamename"
												@keyup.enter="selectgame()">
											<div class="input-group-append">
												<a href="#" class="btn btn-primary"
													 @click.prevent="selectgame()">搜尋</a>
											</div>
										</div>
									</div>
								</div>
							</div>
            <div class="col-3 mb-3"
								v-for="item in totalgame" :key="item._id" v-if="!selectdata.length && selectnull">
							<div class="card game">
									<img :src="item.game.box.template" class="card-img-top" alt="">
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
									<img :src="item.box.template" class="card-img-top" alt="">
									<div class="card-body">
									<h6 class="card-title gamename">{{item.name}}</h6>
									</div>
									<a href="#"
										@click.prevent="gotogamne(item.name)"></a>
							</div>
            </div>
          </div>
					<div class="h3 text-center" v-if="!selectnull">找不到符合的遊戲</div>
					<pages :ary="total"
             :backone="backone"
						 :gamelimit="gamelimit"
             @getdata="getdata"></pages>
      </div>
    </div>
</template>

<script>
import pages from '../components/Pages';
export default {
	components: {
    pages,
  },
  data() {
    return {
			totalgame: [],
			selectdata: [],
			gamelimit: 10,
			gamename: '',
			backone: false,
			total: 0,
			selectnull: true,
    }
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata(startdata = 0) {
			this.$store.dispatch('Loading', true);
			const api = `${process.env.VUE_APP_APIPATH}/kraken/games/top?offset=${startdata}`;
			 this.$http.get(api, {
					headers: {
						'Accept': 'application/vnd.twitchtv.v5+json',
						'Client-ID':`${process.env.VUE_APP_CUSTOMPATH}`,
					},
				}).then((response) => {
					const ary = response.data.top;
						ary.forEach((item) => {
							item.game.box.template = item.game.box.template.replace('{width}', '200');
							item.game.box.template = item.game.box.template.replace('{height}', '250');
						});
					this.totalgame = ary;
					this.total = response.data._total;
					this.$store.dispatch('Loading', false);
				});
    },
    gotogamne(name) {
      this.$router.push({
        path: 'game/selectgame',
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
				console.log(response)
				const ary = response.data.games;
				if (ary === null) {
					this.selectnull = false;
					this.selectdata = [];
					this.$store.dispatch('Loading', false);
					return false;
				} else {
					this.selectnull = true;
				}
        ary.forEach((item) => {
          item.box.template = item.box.template.replace('{width}', '200');
          item.box.template = item.box.template.replace('{height}', '300');
				});
				this.selectdata = ary;
        this.$store.dispatch('Loading', false);
      });
    },
  },
};

</script>
