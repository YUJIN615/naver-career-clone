<template>
  <footer class="footer">
    <div class="wrap">
      <div class="policy">
        <h4 class="title">개인정보 처리방침</h4>
        <span class="content">© NAVER Corp.</span>
      </div>
      <div class="relative_site">
        <a href="#null" class="site_select" @click="openSiteList">관련사이트</a>
        <ul class="site_list" v-if="isSiteList">
          <li class="list">
            <a href="#">NAVER Corporation</a>
          </li>
          <li class="list">
            <a href="#">NAVER Developers</a>
          </li>
          <li class="list">
            <a href="#">NAVER Design</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      isSiteList: false,
    };
  },
  methods: {
    openSiteList() {
      this.isSiteList = !this.isSiteList;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  border-top: 1px solid #ddd;
  background: #eee;
  .wrap {
    display: flex;
    justify-content: space-between;
    .policy {
      .title {
        display: inline-block;
        margin-right: 10px;
        font-size: 12px;
      }
      .content {
        font-size: 12px;
      }
    }
    .relative_site {
      position: relative;
      .site_select {
        display: block;
        width: 220px;
        padding: 10px 20px;
        border: 1px solid #ccc;
        font-size: 12px;
        background: #eee;
      }
      .site_list {
        position: absolute;
        bottom: 37px;
        left: 0;
        width: 220px;
        padding: 10px 0;
        border: 1px solid #ccc;
        background: #fff;
        li {
          a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 5px 20px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
