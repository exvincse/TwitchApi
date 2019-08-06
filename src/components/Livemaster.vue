<template>
  <div>
    <div class="container text-white">
      <div class="h3 text-center">已搜尋"{{this.$route.query.name}}"</div>
      <div v-if='masterdata.length'>
        <div class="row">
          <div class="col-lg-3 col-6 mb-3"
            v-for="item in masterdata" :key="item._id">
            <div class="card border-l-gray">
              <img :src="item.logo" class="card-img-top" alt="">
              <div class="card-body bg-l-gray">
                <h5 v-if="item.display_name">{{item.display_name}}({{item.name}})</h5>
                <h5 v-else>{{item.name}}</h5>
                <a class="go-channel" :href="item.url" :title="item.status"></a>
              </div>
            </div>
          </div>
        </div>
        <pages :ary="total"
            :backone="backone"
            @getdata="livemaster"></pages>
      </div>
      <div class="h3 text-center vh-100 mb-0" v-else>沒有搜尋到任何人</div>
    </div>
  </div>
</template>

<script>
import pages from '../components/Pages';
export default {
  components:{
    pages,
  },
  data() {
    return {
      masterdata: [],
      total: 0,
      backone: false,
    }
  },
  created() {
    this.livemaster();
  },
  watch: {
    '$route'(to, from) {
      this.livemaster();
      this.backone = !this.backone;
    }
  },
  methods: {
    livemaster(stardata = 0) {
      if (this.$route.query.name === '') return false;
      this.$store.dispatch('Loading', true);
      const api = `${process.env.VUE_APP_APIPATH}/kraken/search/channels?query=${this.$route.query.name}&offset=${stardata}`;
      this.$http.get(api, {
				headers: {
					'Accept': 'application/vnd.twitchtv.v5+json',
					'Client-ID': `${process.env.VUE_APP_CUSTOMPATH}`,
				},
			}).then((response) => {
        this.total = response.data._total;
        this.masterdata = response.data.channels;
        this.$store.dispatch('Loading', false);
      });
    }
  },
}
</script>
