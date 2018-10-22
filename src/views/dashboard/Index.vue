<template>
  <div>
    <!--<Exception></Exception>-->
    <div class="dashboard">
      <div class="header">
        <div class="header_left">
          <img src="@/assets/logo.png" class="avatar" alt="姓名">
          <div class="header_message">
            <div class="message_people">
              <h2 class="name">姓名</h2>
            </div>
            <span class="intro">23</span>
          </div>
        </div>
        <div class="header_right">
          <a-icon type="form" />
          <span>发布需求</span>
        </div>
      </div>

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
      width: 80%;
      background: #773f1e;
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
      background: #0366de;
      width: 20%;
      border: 1px solid #aeaeae;
      padding: 10px 0;

      /*display: flex;
      align-items: flex-end;
      justify-content: flex-end;*/
      letter-spacing:3px;
    }
  }
</style>
