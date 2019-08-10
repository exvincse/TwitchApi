<template>
  <div id="app">
    <loading :active.sync="isLoading"
             style="z-index:9999;overflow-y:hidden;"></loading>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>

<style lang='scss'>
@import "./assets/all";
</style>
