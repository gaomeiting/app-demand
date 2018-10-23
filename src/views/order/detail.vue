<template>
  <div class="order_detail">
    <img src="@/assets/going.png" alt="" style="position: absolute;top: 0;right: 0;">
    <div class="title">
      <span class="title_title">标题：</span>
      <span class="title_name">标题字数测试标题字数测试标题字数测试标题字数测试标题字数测试标题字数测试标题字数测试标</span>
      <p class="dowload">
        <span style="font-size: 14px;margin-top: 15px">￥</span>
        678
      </p>
    </div>
    <div class="ask">
      <span class="ask_title">要求：</span>
      <div class="ask_list">
        <span class="each_ask" >不限</span>
        <span class="each_ask">voiceStyle</span>
        <span class="each_ask">快速</span>
        <span class="each_ask">读标题</span>
      </div>
    </div>
    <div class="text">
      <span class="text_title">文稿：</span>
      <span class="text_text" v-show="!isAllText">text
        <span class="click_all" @click="showAllText">查看全部 >></span>
      </span>
      <span class="text_text" v-show="isAllText">allText
        <span class="click_all" @click="showShortText">收起 >></span>
      </span>
    </div>
    <p class="demands_title"><span class="color">&nbsp;</span>交付记录</p>
    <div class="demands_list">
      <a-list itemLayout="horizontal" :dataSource="tryList">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <div class="list_item">
            <div class="header">
              <a-avatar slot="avatar"
                        class="avatar"
                        src="@/assets/logo.png"/>
              <div class="message">
                <p slot="title" class="mess_title">{{item.nickname}}</p>
                <p class="time">item.creatTime</p>
              </div>
            </div>
            <div class="middle">
              <p class="middle_text">上传了音频</p>
              <div class="middle_icons">
                <p><a-icon type="download" class="icon_icon" />下载</p>
                <p class=icon_green><a-icon type="like-o" class="icon_icon" />满意</p>
                <p class="icon_red"><a-icon type="dislike-o" class="icon_icon" />不满意</p>
              </div>
            </div>
            <div class="content">
              <a-icon type="caret-up" class="up_icon" />
              <div class="header">
                <a-avatar slot="avatar"
                          class="avatar"
                          src="http://st.ddpei.cn/avatar/BhTrDkWK6TvikB8jZvnRXj.png" />
                <div class="message">
                  <p slot="title" class="header_mes_title">叮当配</p>
                  <p class="time">item.replayTime</p>
                </div>
              </div>
              <p class="opinion">item.replay</p>
            </div>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
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
      }
    },
    methods:{
      showAllText(){
        this.isAllText = true
      },
      showShortText(){
        this.isAllText = false
      },
    }
  }
</script>
<style lang="scss" scoped>
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
          height: 60px;
          display: flex;
          .avatar{
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .message{
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 15px;
            .mess_title{
              // margin-top: 10px;
            }
            .time{
              font-size: 12px;
              color: #aeaeae;
              margin-bottom: 8px;
            }
          }
        }
        .middle{
          width: 100%;
          display: flex;
          padding-left: 65px;
          display: flex;
          justify-content: space-between;
          .middle_icons{
            display: flex;
            width: 15%;
            justify-content: space-between;
            .icon_green{
              color: #00cb00;
            }
            .icon_red{
              color: red;
            }
          }
        }
        .content{

          padding: 10px;
          margin-left: 65px;
          background: #f2f2f2;
          position: relative;
          min-height: 85px;
          margin-top: 10px;
          border-radius: 4px;
          .up_icon{
            position: absolute;
            top: -8px;
            left: 25px;
            color: #f2f2f2;
          }
          .header{
            height: 50px;
            display: flex;
            .avatar{
              width: 40px;
              height: 40px;
            }
            .message{
              height: 50px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-left: 15px;
              .header_mes_title{
                margin-top: 3px;
              }
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
