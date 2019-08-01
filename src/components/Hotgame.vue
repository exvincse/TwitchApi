<template>
    <div>
      <div class="topgame d-flex">
        <div class="col-2">
          <div class="card game h-100">
            <router-link class="card-title gamename"
                    to="/game">所有遊戲</router-link>
          </div>
        </div>
        <div class="col-2"
          v-for="item in topgame" :key="item.game._id">
          <div class="card game">
            <img :src="item.game.logo.medium" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title gamename">{{item.game.name}}</h5>
            </div>
            <a href="#"
             @click.prevent="Filterchannel(item.game.name)"></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  created() {
    this.getgame();
  },
  computed: {
    topgame() {
      return this.$store.state.Hotgmae;
    },
  },
  methods: {
    getgame() {
      this.$store.dispatch('gethotgame');
    },
    Filterchannel(name) {
      this.$emit('getname', name);
    },
  },
};
</script>
