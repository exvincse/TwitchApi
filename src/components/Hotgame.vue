<template>
    <div>
      <div class="topgame d-flex">
        <div class="col-lg-2 col-6">
          <div class="card game h-100 bg-l-gray text-center">
            <img src="../assets/img/moregame.jpg" class="card-img-top game-pic" alt="">
            <div class="card-body">
              <span class="card-title text-white">更多遊戲</span>
            </div>
            <router-link class="gamename"
                    to="/game"></router-link>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <div class="card game h-100 bg-l-gray text-center">
            <img src="../assets/img/allgame.jpg" class="card-img-top game-pic" alt="">
            <div class="card-body">
              <span class="card-title text-white">全部遊戲</span>
            </div>
            <a href="#" title="全部遊戲"
              @click.prevent="Filterchannel('')"></a>
          </div>
        </div>

        <div class="col-lg-2 col-6"
          v-for="item in ganmedata" :key="item._id">
          <div class="card game border-l-gray">
            <img :src="item.game.box.template" class="card-img-top" alt="">
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
