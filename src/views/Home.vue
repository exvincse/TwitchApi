<template>
  <div>
    <Hotgame @getname='getname'></Hotgame>
    <div class="container mt-5">
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
        <div class="col-xl-3 col-lg-4 col-md-6 mb-3"
          v-for="item in channeldata" :key="item._id">
          <div class="card h-100" style="border:none">
            <img :src="item.preview.large" class="card-img-top" alt="">
            <div class="card-body bg-l-gray p-3 text-white">
              <h6 class="card-title text-over">{{item.channel.status}}</h6>
              <small class="d-block text-over" v-if="item.channel.display_name">觀看人數: {{item.viewers}}．
                <img src="../assets/img/parner.png" width="14px" height="14px" alt=""
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
    </div>
    <div class="text-center text-white vh-100 h4 my-5" v-if="total === 0">無任何直播</div>
    <pages :ary="total"
           :backone="backone"
           @getdata="getdata"></pages>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hotgame from '../components/Hotgame.vue';
import pages from '../components/Pages.vue';

export default {
  components: {
    pages,
    Hotgame,
  },
  data() {
    return {
      name: '',
      lange: '',
      backone: false,
      total: 0,
    };
  },
  watch: {
    name() {
      this.getdata();
      this.backone = !this.backone;
    },
    lange() {
      this.getdata();
      this.backone = !this.backone;
    },
  },
  created() {
    this.getdata();
  },
  computed: {
    ...mapGetters('Mchannel', ['channeldata']),
  },
  methods: {
    getdata(startdata = 0) {
      this.$store.dispatch('Mchannel/getdata', {
        lange: this.lange,
        name: this.name,
        startdata,
      }).then(() => {
        this.total = this.$store.state.Mchannel.total;
      });
    },
    getname(get) {
      this.name = get;
    },
  },
};
</script>
