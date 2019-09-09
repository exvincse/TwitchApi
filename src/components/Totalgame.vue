<template>
    <div>
      <div class="container text-white mt-4">
          <div class="row">
							<div class="col-12">
								<div class="row justify-content-center">
									<div class="col-lg-6">
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
							<template v-if="!selectdata.length && selectnull">
								<div class="col-lg-3 col-6 mb-3"
									v-for="item in ganmedata" :key="item._id">
									<div class="card game bg-l-gray">
											<img :src="item.game.box.template" class="card-img-top" alt="">
											<div class="card-body">
											<h6 class="card-title gamename text-over">{{item.game.name}}</h6>
											</div>
											<a href="#"
												@click.prevent="gotogamne(item.game.name)"></a>
									</div>
								</div>
							</template>

							<template v-if="selectdata.length">
								<div class="col-lg-3 col-6 mb-3"
										v-for="item in selectdata" :key="item._id">
									<div class="card game bg-l-gray">
											<img :src="item.box.template" class="card-img-top" alt="">
											<div class="card-body">
											<h6 class="card-title gamename">{{item.name}}</h6>
											</div>
											<a href="#"
												@click.prevent="gotogamne(item.name)"></a>
									</div>
								</div>
							</template>
          </div>
					<div class="h3 text-center vh-100" v-if="!selectnull">找不到符合的遊戲</div>
					<pages :ary="total"
									:gamelimit="gamelimit"
								@getdata="getdata"></pages>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pages from './Pages.vue';

export default {
  components: {
    pages,
  },
  data() {
    return {
      selectdata: [],
      gamelimit: 10,
      gamename: '',
      total: 0,
      selectnull: true,
    };
  },
  created() {
    this.getdata();
  },
  computed: {
    ...mapGetters('Mgame', ['ganmedata']),
  },
  methods: {
    getdata(startdata = 0) {
      this.$store.dispatch('Mgame/getdata', startdata).then(() => {
        this.total = this.$store.state.Mgame.total;
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
      this.total = 0;
      this.$store.dispatch('Loading', true);
      const api = `${process.env.VUE_APP_APIPATH}/kraken/search/games?query=${this.gamename}`;
      this.$http.get(api, {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-ID': `${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        const ary = response.data.games;
        if (ary === null) {
          this.selectnull = false;
          this.selectdata = [];
          this.$store.dispatch('Loading', false);
          return false;
        }
        this.selectnull = true;
        ary.forEach(item => item.box.template.replace('{width}', '200').replace('{height}', '250'));
        this.selectdata = ary;
        this.$store.dispatch('Loading', false);
        return true;
      });
      return true;
    },
  },
};

</script>
