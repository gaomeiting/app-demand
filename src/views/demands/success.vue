/*
 * @Author: Cicy
 * @Date: 2018-10-23 18:33:58
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-23 18:56:37
 */
<template>
  <div class="content-wrap">
    <div class="content">
      <h2>
        <span>订单支付</span>
      </h2>
      <div class="title">
        <p>文稿标题发布成功</p>
      </div>
      <div class="pay-wrap">
        <h3>应付金额：<strong>1154元</strong></h3>
        <div class="pay">
          <figure>
            <img src="https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0fd5d24f9f45d688bc02b4a494c27dab/4b90f603738da977f53a9d57bd51f8198618e3b1.jpg">
            <p>微信支付</p>
          </figure>
          <div class="text">
            <h5>公对公转账</h5>
            <p>公司：北京市诺听科技有限公司</p>
            <p>银行卡号：234343555555555555555</p>
          </div>
        </div>
        <p class="pay-footer">
          返回我的工作台
        </p>
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
.page {
    background: $color-background;
}
.content-wrap {
    display: flex;
    .side-bar-wrap {
        flex: 0 0 200px;
        width: 200px;
        height: 100%;
        //min-height: 100vh;
        background-color: #001529;
    }
    .content {
        flex: 1;
        padding: 20px;
        background: $color-background-d;
        height: 86vh;
        border-radius: 4px;
        margin: 20px;
        > h2 {
            padding: 30px;
            span {
                border-left: 3px  solid $color-theme-d;
                padding-left: 14px;
            }
        }
        .title {
            padding: 42px 0;
            border-bottom: 1px solid $color-background;
            p {
                text-align: center;
                font-size: $font-size-medium-x;
                color: $color-text-l;
            }
        }
        .pay-wrap {
            .pay-footer {
                margin-top: 50px;
                color: $color-sub-theme;
                text-align: center;
                text-decoration: underline;
                cursor: pointer;
            }
            > h3 {
                font-size: $font-size-large;
                font-weight: normal;
                text-align: center;
                padding: 46px 0;
                strong {
                    font-size: 140%;
                    color: #fd661d;
                }
            }
            .pay {
                display: flex;
                align-items: center;
                justify-content: center;
                figure {
                    flex: 0 0 198px;
                    width: 198px;
                    height: 198px;
                    overflow: hidden;
                    margin-right: 80px;
                    border: 1px solid #4bb515;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .text {
                    flex: 0 0 300px;

                    h5 {
                        padding-bottom: 30px;
                        font-size: $font-size-large;
                        color: $color-text;
                    }
                    p {
                        color: $color-text-l;
                        padding-bottom: 14px;
                        font-size: $font-size-large;
                    }
                }
            }


        }
    }
}
</style>
