<template>
  <div>
    <Hotgame @getname='getname'></Hotgame>
    <div class="container">
      <div class="row">
        <div class="col-3 mb-3"
          v-for="item in channel" :key="item._id">
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
    </div>
    <pages :ary="total"
           :name="name"
           @getdata="getdata"></pages>
  </div>
</template>

<script>
import Hotgame from '../components/Hotgame';
import pages from '../components/Pages';

export default {
  components: {
    pages,
    Hotgame,
  },
  data() {
    return {
      channel: [],
      name: '',
      total: 0,
    };
  },
  watch: {
    name() {
      this.getdata();
    },
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata(startdata = 0) {
      const limit = 25;
      const api = `${process.env.VUE_APP_APIPATH}/kraken/streams/?client_id=${process.env.VUE_APP_CUSTOMPATH}&game=${this.name}&limit=${limit}&offset=${startdata}`;
      this.$http.get(api).then((response) => {
        this.total = response.data._total;
        this.channel = response.data.streams;
        console.log(this.channel);
      });
    },
    getname(get) {
      this.name = get;
    },
  },
};
</script>
