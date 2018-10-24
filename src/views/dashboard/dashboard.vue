<template>
  <div class="page">
    <div class="head-wrap">
           <div class="logo">
               <img src="/logo.png" alt="">
           </div>
            <head-nav title="我的工作台"></head-nav>
     </div>
     <div class="content-wrap">
        <div class="side-bar-wrap">
            <side-bar></side-bar>
        </div>
        <div class="content">
          <transition name="fadePage" methods="out-in">
            <router-view></router-view>
          </transition>
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
  methods: {
    
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
