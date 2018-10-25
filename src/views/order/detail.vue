<template>
  <div class="order_detail">
    <img src="@/assets/started.png" alt="" v-if="orderMess.status == 0" style="position: absolute;top: 0;right: 0;">
    <img src="@/assets/going.png" alt="" v-if="orderMess.status == 1" style="position: absolute;top: 0;right: 0;">
    <img src="@/assets/over.png" alt="" v-if="orderMess.status == 9" style="position: absolute;top: 0;right: 0;">
    <img src="@/assets/change.png" alt="" v-if="orderMess.status == 2" style="position: absolute;top: 0;right: 0;">
    <div class="title">
      <span class="title_title">标题：</span>
      <span class="title_name">{{orderMess.title}}</span>
      <p class="dowload">
        <span style="font-size: 14px;margin-top: 15px">￥</span>
        {{orderMess.income}}
      </p>
    </div>
    <div class="ask">
      <span class="ask_title">要求：</span>
      <div class="ask_list">
        <div class="ask_list">
          <span class="each_ask" v-if="orderMess.requiredGender == 0">不限</span>
          <span class="each_ask" v-if="orderMess.requiredGender == 1">男</span>
          <span class="each_ask" v-if="orderMess.requiredGender == 0">女</span>
          <span class="each_ask">{{voiceStyle}}</span>
          <span class="each_ask" v-if="orderMess.voiceSpeed == 1">标准</span>
          <span class="each_ask" v-if="orderMess.voiceSpeed == 0">慢速</span>
          <span class="each_ask" v-if="orderMess.voiceSpeed == 2">快速</span>
          <span class="each_ask" v-if="orderMess.requirementTitle == 0">读标题</span>
          <span class="each_ask" v-if="orderMess.requirementTitle == 1">不读标题</span>
        </div>
      </div>
    </div>
    <div class="text">
      <span class="text_title">文稿：</span>
      <span class="text_text" v-show="!isAllText">{{text}}
        <span class="click_all" v-if="text.length > 150" @click="showAllText">查看全部 >></span>
      </span>
      <span class="text_text" v-show="isAllText">{{allText}}
        <span class="click_all" v-if="text.length > 150 "@click="showShortText">收起 >></span>
      </span>
    </div>
    <p class="demands_title"><span class="color">&nbsp;</span>交付记录</p>
    <div class="demands_list">
      <a-list itemLayout="horizontal" :dataSource="deliveryList">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <div class="list_item">
            <div class="header">
              <a-avatar slot="avatar"
                        class="avatar"
                        :src="item.avatar"/>
              <div class="message">
                <p slot="title" class="mess_title">{{item.nickname}}<span>{{item.creatTime}}</span></p>
                <div class="middle">
                  <p class="middle_text">上传了音频</p>
                  <div class="middle_icons">
                    <p class="icon_download" @click="downLoad(item.voiceUrl)"><a-icon type="download" class="icon_icon" />下载</p>
                    <!--不满意初始状态-->
                    <div class="icon" @click="noWell" v-if="item.status == 0">
                      <a-icon type="dislike-o" class="icon_icon" />
                      <a-modal
                        title="意见反馈"
                        v-model="visibleNo"
                        @ok="sureOpinion(item.id)"
                        okText="确认"
                        cancelText="取消">
                        <div>
                          <a-input v-model="opinion" placeholder="请输入对该音频不满意的理由，配音员会重新录制"/>
                        </div>
                      </a-modal>
                      <span class="icon_text">不满意</span>
                    </div>
                    <!--不满意选中状态-->
                    <div class="icon" v-if="item.status == 1">
                      <a-icon type="dislike-o" class="icon_icon" style="color: red;" />
                      <span class="icon_text" style="color: red;">不满意</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--满意，不满意评论显示-->
            <div class="content" v-if="item.status == 1">
              <a-icon type="caret-up" class="up_icon" />
              <div class="con_header">
                <a-avatar slot="avatar"
                          class="con_avatar"
                          src="http://st.ddpei.cn/avatar/BhTrDkWK6TvikB8jZvnRXj.png" />
                <div class="con_message">
                  <p slot="title" class="header_mes_title">叮当配</p>
                  <p class="time">{{item.replayTime}}</p>
                </div>
              </div>
              <p class="opinion">{{item.replay}}</p>
            </div>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PageLayout from '@/layout/PageLayout'
  const tryList = [
    {
      nickname:'nihao'
    }
  ]
  export default {
    components: {PageLayout},
    data() {
      return {
        tryList,
        isAllText:false,
        visibleNo:false,
        orderMess:{},
        deliveryList:[],
        voiceStyle:'',
        text:'',
        allText:'',
        opinion:'',
      }
    },
    methods:{
      showAllText(){
        this.isAllText = true
      },
      showShortText(){
        this.isAllText = false
      },
      downLoad(url){
        window.open(url)
      },
      noWell(status){
        this.visibleNo = true
      },
      sureOpinion(id){
        const data = {
          'status': 1,
          'reply' : this.opinion,
        }
        if(this.opinion == ''){
          this.$message.error('请输入意见');
        }else{
          axios.post('/api/customer/order/'+id+'/voice',data).then(res => {
            this.$message.error('订单不满意，请联系配音员');
            this.visibleNo = false
            this.reload()
          }).catch(err => {
            const errorStatus = err.response.status
            if(errorStatus == '401'){
              this.$router.replace('/login')
            }
            if(errorStatus == '500'){
              this.error = 1
            }
          })
        }
      },
    },
    mounted(){
      console.log(this.$route.params.id)
      axios.get('/api/customer/order/'+this.$route.params.id+'/detail').then(res => {
        this.orderMess = res.data
        this.voiceStyle = this.orderMess.voiceStyle.toString()
        let text = this.orderMess.content
        this.allText = text
        let textNum = text.length
        if(textNum > 150){
          this.text = text.substring(0,150) + '...'
        }else{
          this.text = text
        }
      }).catch(err => {
        const errorStatus = err.response.status
        if(errorStatus == '500'){
          this.error = 1
        }else{
          handlerError(err.response.data)
        }
      }).catch(err => {
        const errorStatus = err.response.status
        if(errorStatus == '401'){
          this.$router.replace('/login')
        }
        if(errorStatus == '500'){
          this.error = 1
        }
      })
      axios.get('/api/order/'+this.$route.params.id+'/delivery').then(res => {
        this.deliveryList = res.data
        console.log(this.deliveryList)
      }).catch(err => {
        const errorStatus = err.response.status
        if(errorStatus == '500'){
          this.error = 1
        }else{
          handlerError(err.response.data)
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  p{
    margin-bottom: 0px;
  }
  .order_detail{
    position: relative;
    background: #ffffff;
    min-height: 85vh;
    margin: 20px;
    border-radius: 4px;
    padding: 40px 20px;
    .title{
      margin-bottom: 40px;
      position: relative;
      .dowload{
        position: absolute;
        right: 30px;
        top: 0px;
        display: flex;
        align-items: center;
        color: #773F1E;
        font-size: 36px;
      }
      .title_title{
        width: 50px;
      }
      .title_name{
        font-size: 22px;
        color: #222222;
      }
    }
    .ask{
      display: flex;
      margin-bottom: 40px;
      .ask_title{
        width: 50px;
      }
      .ask_list{
        .each_ask{
          background: #eaeaea;
          margin-right: 10px;
          border-radius: 16px;
          padding: 5px 10px;
          font-size: 12px;
        }
      }
    }
    .text{
      display: flex;
      margin-bottom: 50px;
      .text_title{
        width: 50px;
      }
      .text_text{
        width: 85%;
        color: #222222;
        letter-spacing:1px;
        line-height: 18px;
        .click_all{
          color: #4a1d05;
          font-weight: bold;
          text-decoration:underline;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .demands_title{
      font-size: 18px;
      color: #222222;
      margin-bottom: 20px;
      .color{
        background: #ffd101;
        margin-right: 10px;
      }
    }
    .demands_list{
      .list_item{
        width: 100%;
        .header{
          width: 100%;
          height: 55px;
          display: flex;
          .avatar{
            width: 55px;
            height: 55px;
            border-radius: 50%;
          }
          .message{
            padding: 5px 0;
            width: 100%;
            height: 55px;
            margin-left: 15px;
            .mess_title{
              margin-bottom: 0;
              font-size: 16px;
              >span{
                font-size: 14px;
                margin-left: 10px;
                color: #aeaeae;
              }
            }
            .middle{
              margin-top: 5px;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .middle_text{
                margin-bottom: 0px;
              }
              .middle_icons{
                display: flex;
                width: 15%;
                justify-content: space-between;
                align-items: center;
                .icon_download{
                  margin-bottom: 0px;
                  &:hover{
                    cursor: pointer;
                  }
                }
                .icon_green{
                  color: #00cb00;
                  margin-bottom: 0px;
                }
                .icon_red{
                  color: red;
                  margin-bottom: 0px;
                }
              }
            }
          }
        }

        .content{
          padding: 10px;
          margin-left: 65px;
          background: #f2f2f2;
          position: relative;
          min-height: 85px;
          margin-top: 20px;
          border-radius: 4px;
          .up_icon{
            position: absolute;
            top: -8px;
            left: 25px;
            color: #f2f2f2;
          }
          .con_header{
            height: 50px;
            display: flex;
            .con_avatar{
              width: 40px;
              height: 40px;
            }
            .con_message{
              height: 40px;
              margin-left: 15px;

              .time{
                font-size: 12px;
                color: #aeaeae;
                margin-bottom: 8px;
              }
            }
          }
          .opinion{
            margin-left: 55px;
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>
