<template>
  <div class="page">
    <div class="head-wrap">
           <div class="logo">
               <img src="/logo.png" alt="">
           </div>
            <head-nav title="资金管理"></head-nav>
     </div>
     <div class="content-wrap">
        <div class="side-bar-wrap">
            <side-bar></side-bar>
        </div>
        <div class="content">
          <div class="money-wrap">
            <div class="money">
              <h4>
                <span>
                  托管中的订单费用
                </span>
                <strong>
                  共0个项目
                </strong>
              </h4>
              <h2>
                <small> ¥ </small> 0.00
              </h2>
            </div>
            <div class="money">
              <h4>
                <span>
                  可用余额
                </span>
                <strong>
                  提现
                </strong>
              </h4>
              <h2>
                <small> ¥ </small> 0.00
              </h2>
            </div>
          </div>
          <div class="money-list-wrap">
            <h3>
              <span class="active">交易记录</span>
              <span>提现记录</span>
            </h3>
            <div class="no-result-wrap">
              <no-result title="还未产生任何记录~~"></no-result>
            </div>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import SideBar from 'components/sidebar/SidebarMenu';
import HeadNav from 'components/head-nav/head-nav';
import NoResult from 'components/no-result/no-result';

export default {
  data(){
    return {
      
    }
  },
  components: {
    SideBar,
    HeadNav,
    NoResult
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
    .money-list-wrap {
      background-color: $color-background-d;
      padding: 30px 0;
      border-radius: 4px;
      box-shadow: 1px 1px 4px rgba(0,0,0,0.1), -1px -1px 4px rgba(0,0,0,0.1);
      h3 {
        border-bottom: 1px solid $color-background;
        padding: 0 40px;
        span {
          display: inline-block;
          padding-bottom: 14px;
          margin-right: 46px;
          color: $color-text;
          &:hover {
            cursor: pointer;
            color: $color-text-l;
          }
          &.active {
            color: $color-text-l;
            border-bottom: 3px solid $color-text-l;
          }
        }
      }
    }
    .money-wrap {
      display: flex;
      margin-bottom: 20px;
      .money {
        flex: 1;
        background-color: $color-background-d;
        margin-right: 20px;
        padding: 30px 40px;
        border-radius: 4px;
        box-shadow: 1px 1px 4px rgba(0,0,0,0.1), -1px -1px 4px rgba(0,0,0,0.1);
        &:last-of-type {
          margin-right: 0;
        }
        h4 {
          display: flex;
          span {
            flex: 1;
          }
          strong {
            text-align: right;
            color: $color-sub-theme;
          }
        }
        h2 {
          font-size: 30px;
          small {
            font-size: 70%;
          }
        }
      }
    }
}
</style>
