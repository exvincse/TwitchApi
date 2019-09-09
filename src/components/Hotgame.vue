<template>
    <div>
      <div class="topgame d-flex">
        <div class="col-xl-2 col-md-3 col-sm-6 col-7">
          <div class="card game h-100 bg-l-gray text-center" style="border:none;">
            <img src="../assets/img/moregame.jpg" class="card-img-top game-pic"
            width='200' height="250" alt="">
            <div class="card-body">
              <div class="card-title text-white">更多遊戲</div>
            </div>
            <router-link class="gamename"
                    to="/game"></router-link>
          </div>
        </div>

        <div class="col-xl-2 col-md-3 col-sm-6 col-7">
          <div class="card game h-100 bg-l-gray text-center" style="border:none;">
            <img src="../assets/img/allgame.jpg" class="card-img-top game-pic"
              height="250" alt="">
            <div class="card-body">
              <div class="card-title text-white">全部遊戲頻道</div>
            </div>
            <a href="#" title="全部遊戲"
              @click.prevent="Filterchannel('')"></a>
          </div>
        </div>

        <div class="col-xl-2 col-md-3 col-sm-6 col-7"
          v-for="item in ganmedata" :key="item._id">
          <div class="card game border-l-gray" style="border:none;">
            <img :src="item.game.box.template" class="card-img-top"
              height="250" alt="">
            <div class="card-body bg-l-gray text-white text-center">
              <div class="card-title gamename">{{item.game.name}}</div>
            </div>
            <a href="#" :title="item.game.name"
             @click.prevent="Filterchannel(item.game.name)"></a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.getdata();
  },
  computed: {
    ...mapGetters('Mgame', ['ganmedata']),
  },
  methods: {
    ...mapActions('Mgame', ['getdata']),
    Filterchannel(name) {
      this.$emit('getname', name);
    },
  },
};
</script>
