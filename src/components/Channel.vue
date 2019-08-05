<template>
  <div>
    <div class="container">
      <h1 class="text-center">{{this.$route.query.name}}</h1>
        <div class="btn-group btn-group-toggle mb-4" data-toggle="buttons">
          <label class="btn btn-outline-secondary a active"
          @click.prevent="lange=''">
            <input type="radio" name="options" id="option1"
            >全部頻道
          </label>
          <label class="btn btn-outline-secondary a"
          @click.prevent="lange='zh-TW'">
            <input type="radio" name="options" id="option2"
            >中文頻道
          </label>
          <label class="btn btn-outline-secondary a"
          @click.prevent="lange='en'">
            <input type="radio" name="options" id="option3"
            >英文頻道
          </label>
        </div>
      <div class="row">
        <div class="col-3 mb-3"
          v-for="item in gamedata" :key="item._id">
          <div class="card">
            <img :src="item.preview.medium" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title text-over">{{item.channel.status}}</h5>
              <p class="card-text" v-if="item.channel.display_name">觀看人數: {{item.viewers}}．{{item.channel.display_name}}({{item.channel.name}})</p>
              <p class="card-text" v-else>觀看人數: {{item.viewers}}．{{item.channel.name}}</p>
              <a class="go-channel" :href="item.channel.url" :title="item.channel.status"></a>
            </div>
          </div>
        </div>
      </div>
      <pages :ary="total"
             :backone="backone"
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
      gamedata: [],
      lange: '',
      backone: false,
      total: 0,
    };
  },
  created() {
    this.getdata();
  },
  watch: {
    lange() {
      this.getdata();
      this.backone = !this.backone;
    }
  },
  methods: {
    getdata(startdata = 0) {
      this.$store.dispatch('Loading', true);
      const api = `${process.env.VUE_APP_APIPATH}/kraken/streams/?client_id=${process.env.VUE_APP_CUSTOMPATH}&language=${this.lange}&game=${this.$route.query.name}&offset=${startdata}`;
      this.$http.get(api).then((response) => {
        this.total = response.data._total;
        this.gamedata = response.data.streams;
        this.$store.dispatch('Loading', false);
      });
    },
  },
};
</script>
