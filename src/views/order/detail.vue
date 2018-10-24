<template>
  <div class="order_detail">
    <img src="@/assets/going.png" alt="" style="position: absolute;top: 0;right: 0;">
    <div class="title">
      <span class="title_name">标题字数测试标题字数测试标题字数测试标题字数测试标题字数测试标题字数测试标题字数测试标</span>
    </div>
    <div class="ask">
      <div class="ask_list">
        <span class="each_ask" >不限</span>
        <span class="each_ask">voiceStyle</span>
        <span class="each_ask">快速</span>
        <span class="each_ask">读标题</span>
      </div>
    </div>
    <div class="text">
      <span class="text_text" v-show="!isAllText">text
        <span class="click_all" @click="showAllText">查看全部 >></span>
      </span>
      <span class="text_text" v-show="isAllText">allText
        <span class="click_all" @click="showShortText">收起 >></span>
      </span>
    </div>
    <p class="demands_title"><span class="color">&nbsp;</span>交付记录</p>
    <div class="demands_list">
      <!--<a-list itemLayout="horizontal" :dataSource="tryList">
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
      </a-list>-->
      <a-list itemLayout="horizontal"
              rowKey="id"
              :dataSource="tryList"
              :grid="{ gutter: 15,column:3 }">
        <a-list-item slot="renderItem" slot-scope="item, index" class="item_lists">
          <a-list-item-meta class="item_meta">
            <p style="font-size: 16px" slot="title">{{item.nickname}}
              <span style="margin-left: 15px;font-size: 14px;color: #aeaeae;">2018-08-30 12:30:30</span>
            </p>
            <div slot="description" class="item_play" style="margin-top: -5px">
              <!--播放按钮-->
              <div class="item_play_icons" @click="toPlay(index)" style="width: 200px;height :27px;background: #e7e7e7;border-radius: 8px;line-height: 27px;cursor: pointer;display: flex">
                <img src="../../assets/go_play.gif"
                     class="icon_playing"
                     style="height: 15px;margin-left: 10px; margin-top:5px; display: none" alt="">
                <img src="../../assets/play_icon.png"
                     class="icon_pause"
                     style="height: 15px;margin-left: 10px; margin-top:5px; display: block" alt="">
              </div>
              <!--淘汰与中标-->
              <div style="display: flex;width: 200px;justify-content: space-between;margin-top: 15px">
                <a-popconfirm
                  title="确定让该音频中标吗?"
                  @confirm="confirm()"
                  okText="确认"
                  cancelText="取消">
                  <p style="margin-bottom:0;text-align:center;color:#aeaeae;background:#dcdadb;width: 90px;line-height: 27px;cursor: pointer;border-radius: 4px">淘汰</p>
                </a-popconfirm>
                <a-popconfirm
                  title="确定淘汰该音频吗?"
                  @confirm="weedOut()"
                  okText="确定"
                  cancelText="取消">
                  <p style="margin-bottom:0;text-align:center;color:#333333;background:#fecf01;width: 90px;line-height: 27px;cursor: pointer;border-radius: 4px">中标</p>
                </a-popconfirm>
              </div>
            </div>
            <a-avatar slot="avatar" src="@/assets/logo.png" style="width: 40px;
height: 40px;border-radius: 50%"/>
          </a-list-item-meta>
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
      toPlay(){},
      confirm(){},
      weedOut(){},
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
      .item_lists{
        margin-top: 20px;
        .item_meta{

        }
      }
    }
  }
</style>
