<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"
            :class="{'disabled':nowpage===1}"
            v-if="ary">
          <a class="page-link"
             href="#"
             @click.prevent="pagedata(nowpage-1)"
             aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li class="page-item"
            v-for="page in limitPage"
            :key="page"
            :class="{'active':nowpage===page}">
          <a class="page-link"
             href="#"
             @click.prevent="pagedata(page)">{{page}}</a>
        </li>

        <li class="page-item"
            :class="{'disabled':nowpage===TotalPage}"
            v-if="ary">
          <a class="page-link"
             href="#"
             @click.prevent="pagedata(nowpage+1)"
             aria-label="Next">
            <span aria-hidden="
               true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['ary','name'],
  data() {
    return {
      nowpage: 1,
      limit: 25,
      TotalLength: 0,
      totalpage: 0,
    };
  },
  created() {
    this.Datadefault();
  },
  watch: {
    name() {
      this.nowpage = 1;
    }
  },
  computed: {
    TotalPage() {
      return Math.ceil(this.ary / this.limit);
    },
    //  limitPage,顯示分頁限制為5頁
    limitPage() {
      const PageRange = [];
      const totalpage = Math.ceil(this.ary / this.limit);
      if (totalpage <= 0) return false;
      if (this.nowpage <= 3) {
        let page = 5;
        if (totalpage <= 5) {
          page = totalpage;
        }
        for (let i = 1; i <= page; i ++) {
          PageRange.push(i);
        }
      } else if (this.nowpage >= 3 && this.nowpage < totalpage - 2) {
        for (let i = this.nowpage - 2; i <= this.nowpage + 2; i ++) {
          PageRange.push(i);
        }
      } else if (this.nowpage >= totalpage - 2) {
        for (let i = this.nowpage - 2; i <= totalpage; i++) {
          PageRange.push(i);
        }
      }
      return PageRange;
    },
  },
  methods: {
    Datadefault() {
      this.TotalLength = this.ary;
      this.totalpage = Math.ceil(this.ary / this.limit);
      this.pagedata(1);
    },
    //  當前頁資料
    pagedata(page) {
      this.nowpage = page;
      const end = (page - 1) * this.limit;
      this.$emit('getdata', end);
    },
  },
};
</script>
