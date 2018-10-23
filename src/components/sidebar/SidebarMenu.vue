<template>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectedMenuItem" :defaultOpenKeys="openedSubMenu">
      <a-menu-item key="dashboard">
        <router-link to="/index">
          <a-icon type="dashboard" />
          <span>我的工作台</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="demands">
        <span slot="title">
          <a-icon type="team" />
          <span>发布需求</span>
        </span>
        <a-menu-item key="demands_fast">
          <router-link to="/demands/fast">快捷需求</router-link>
        </a-menu-item>
        <a-menu-item key="demands_project">
          <router-link to="/demands/project">项目需求</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="order">
        <router-link to="/order">
          <a-icon type="dashboard" />
          <span>我的订单</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="wallet">
        <router-link to="/wallet">
          <a-icon type="dashboard" />
          <span>资金管理</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="news">
        <router-link to="/news">
          <a-icon type="dashboard" />
          <span>消息中心</span>
        </router-link>
      </a-menu-item>
    </a-menu>
</template>

<script>
  export default {
    data () {
      return {
        selectedMenuItem: ['dashboard'],
        openedSubMenu: []
      }
    },
    watch: {
      '$route' () {
        this.getCurrentMenuItem()
      }
    },
    created() {this.getCurrentMenuItem()},
    methods: {
      getCurrentMenuItem() {
        if (this.$route.name === 'dashboard') {
          this.selectedMenuItem  = ['dashboard']
          this.openedSubMenu = []
        } else if(this.$route.name === 'order' || this.$route.name === 'order_detail') {
          this.selectedMenuItem  = ['order']
          this.openedSubMenu = []
        } else if(this.$route.name === 'wallet'){
          this.selectedMenuItem  = ['wallet']
          this.openedSubMenu = []
        } else {
          const routeNameArray = this.$route.name.split('_', 3)
          this.selectedMenuItem.splice(0, 1, routeNameArray[0] + '_' + routeNameArray[1])
          this.openedSubMenu = [ routeNameArray[0] ]
        }
      }
    }
  }
</script>
