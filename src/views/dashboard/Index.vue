<template>
  <div>
    <!--<Exception></Exception>-->
    <div class="dashboard">


    </div>
  </div>

</template>

<script>
import ACard from 'ant-design-vue/lib/card'
import PageLayout from '@/layout/PageLayout'
import axios from 'axios'
import Exception from '../exception/500'

export default {
  data(){
    return{
      error:0,
      name: "我的工作台",
      dashboardMes:{},
    }
  },
  components: {ACard, PageLayout, Exception},
  computed: {
      currentUser () {
          return {
              'nickname': '系统管理员',
              'avatar': 'http://st.ddpei.cn/hv/avatar/2wJfH4mR6TCFKyd5DwsWXK.jpg?x-oss-process=style/avatar120png'
          }
      }
  },
  mounted(){
   /* axios.get('api/user/workPlatformInfo').then(res => {
      this.dashboardMes = res.data
      console.log( this.dashboardMes)
    }).catch(err => {
      const errorStatus = err.response.status
      if(errorStatus == '500'){
        this.error = 1
      }else{
        //handlerError(err.response.data)
      }
    })*/
  },
}
</script>
<style lang="scss" scoped>
  .header{
    padding: 30px 80px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    .header_left{
      display: flex;
      align-items: flex-end;
      .avatar{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #f2f2f2;
        margin-right: 20px;
      }
      .header_message{
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        .message_people{
          display: flex;
          .level_icon{
            height: 20px;
            margin-top: 3px;
            margin-left: 10px;
          }
        }
      }
    }
    .header_right{
      width: 45%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      letter-spacing:3px;
      .right_icon{
        font-size: 20px;
        color: #222222;
      }
      .right_number{
        font-size: 52px;
        color: #222222;
        margin-bottom: -4px;
      }
    }
  }
  .content{
    height: 160px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    .numbers{
      width: 24%;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: #c1c1c1 2px 1px 15px;
      padding: 20px 0;
      .text{
        width: 100%;
        margin-top: 20px;
        text-align: center;
      }
      .number{
        text-align: center;
        font-size: 42px;
        color: #222222;
      }
    }
  }
  .banner{
    margin: 0px 20px;
    .banner_img{
      width: 100%;
      border-radius: 4px;
    }
  }
</style>
