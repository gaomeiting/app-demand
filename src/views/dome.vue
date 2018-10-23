<template>
  <div class="page">
    <div class="head-wrap">
           <div class="logo">
               <img src="/logo.png" alt="">
           </div>
            <head-nav :user="currentUser" title="我的工作台"></head-nav>
     </div>
     <div class="content-wrap">
        <div class="side-bar-wrap">
            <side-bar></side-bar>
        </div>
        <div class="content">
        </div>
     </div>
  </div>
</template>

<script>
import SideBar from 'components/sidebar/SidebarMenu';
import HeadNav from 'components/head-nav/head-nav';

export default {
  data(){
    return{
    }
  },
  components: {
    SideBar,
    HeadNav
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/variable";
.head-wrap {
    display: flex;
    align-items: center;
    .logo {
        flex: 0 0 200px;
        width: 200px;
        img {

        }
    }
    .nav-head {
        flex: 1;
    }
}
.content-wrap {
    display: flex;
    .side-bar-wrap {
        flex: 0 0 200px;
        width: 200px;
        height: 100%;
        min-height: 100vh;
        background-color: #001529;
    }
    .content {
        flex: 1;
        padding: 20px;
        background: $color-background;
    }
}
</style>
