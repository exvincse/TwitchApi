<template>
  <div>
    <div class="container text-white">
      <h1 class="text-center">{{this.$route.query.name}}</h1>
        <div class="btn-group btn-group-toggle mb-4" data-toggle="buttons">
          <label class="btn btn-primary pointer active"
          @click.prevent="lange=''">
            <input type="radio" name="options" id="option1"
            >全部頻道
          </label>
          <label class="btn btn-primary pointer"
          @click.prevent="lange='zh-TW'">
            <input type="radio" name="options" id="option2"
            >中文頻道
          </label>
          <label class="btn btn-primary pointer"
          @click.prevent="lange='en'">
            <input type="radio" name="options" id="option3"
            >英文頻道
          </label>
        </div>
      <div class="row">
        <div class="col-lg-3 mb-3"
          v-for="item in channeldata" :key="item._id">
          <div class="card border-l-gray">
            <img :src="item.preview.medium" class="card-img-top" alt="">
            <div class="card-body bg-l-gray">
              <h6 class="card-title text-over">{{item.channel.status}}</h6>
              <small class="d-block text-over" v-if="item.channel.display_name">觀看人數: {{item.viewers}}．
                <img src="../assets/img/43e848f758.webp" width="14px" height="14px" alt=""
                  style="vertical-align:baseline;"
                  v-if="item.channel.partner">
                {{item.channel.display_name}}({{item.channel.name}})
              </small>
              <small class="d-block text-over" v-else>觀看人數: {{item.viewers}}．{{item.channel.name}}</small>
              <a class="go-channel" :href="item.channel.url" :title="item.channel.status"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center text-white h4 my-5" v-if="total === 0">無任何直播</div>
      <pages :ary="total"
             :backone="backone"
             @getdata="getdata"></pages>
    </div>
  </div>
</template>

<script>
import pages from '../components/Pages';
import { mapGetters } from 'vuex';

export default {
  components: {
    pages,
  },
  data() {
    return {
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
  computed: {
    ...mapGetters('Mchannel', ['channeldata']),
  },
  methods: {
    getdata(startdata = 0) {
      let lange = this.lange;
      let name = this.$route.query.name;
      this.$store.dispatch('Mchannel/getdata', { lange, name, startdata }).then(() => {
        this.total = this.$store.state.Mchannel.total;
      });
    },
  },
};
</script>
