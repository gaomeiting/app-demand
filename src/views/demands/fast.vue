<template>
  <div class="fast_demand">
    <div class="add_left">
      <div class="left_header">
        <div class="header_title">
          <span class="title_sign"> </span>
          <span class="title_title">配音内容</span>
        </div>
        <div class="header_content">
          <div class="content_title">
            <a-input
              v-model="title"
              maxlength="50"
              class="title_input"
              placeholder="请输入标题"/>
            <div class="read_title">
              <a-switch defaultChecked @change='onChangeTitle' size="small"/>
              <p class="title">需读标题</p>
            </div>
          </div>
          <a-textarea
            class="title_textarea"
            v-model="content"
            placeholder="请输入正文"
            style="border: none; margin-top: 20px; font-size: 14px;"
            :autosize="{ minRows: 15, maxRows: 15 }" />
          <span class="test_number">5500</span>
        </div>
        <div class="header_num">
          <p>
            <span class="num_sign">￥</span>
            <span class="num_number">454</span>
            <span class="num_problem">计价规则？</span>
          </p>
        </div>
      </div>
      <div class="left_footer">
        <div class="footer_title">
          <span class="title_sign"> </span>
          <span class="title_title">配音要求</span>
        </div>
        <!--选择身份-->
        <div class="footer_identity">
          <p class="identity_title"><span class="color">*</span>您的身份</p>
          <div class="identity_choose">
            <a-radio-group class="identity_radio"
                           name="radioGroup"
                           v-model="identity"
                           size="small">
              <a-radio :value=1>个人</a-radio>
              <a-radio :value=2>公司</a-radio>
            </a-radio-group>
            <a-input
              v-if="identity == 2"
              class="identity_innput"
              v-model="company"
              maxlength="50"
              style="font-size: 14px;width: 55%;"
              placeholder="请输入公司名称"/>
          </div>
        </div>
        <!--选择交付时间-->
        <div class="footer_identity">
          <p class="identity_title"><span class="color">*</span>交付时间</p>
          <div class="identity_choose">
            <a-date-picker @change="chooseDeliveryTime" placeholder="请选择交付时间"/>
          </div>
        </div>
      </div>
    </div>
    <div class="add_right">
      <div class="right_title">
        <span class="title_sign"> </span>
        <span class="title_title">配音要求</span>
      </div>
      <!--选择性别-->
      <div class="right_gender">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="gender"
                         size="small">
            <a-radio :value=1>男</a-radio>
            <a-radio :value=2>女</a-radio>
          </a-radio-group>
        </div>
      </div>
      <!--选择语速-->
      <div class="right_speed">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="speed"
                         size="small">
            <a-radio :value=0>慢速</a-radio>
            <a-radio :value=1>标准</a-radio>
            <a-radio :value=2>快速</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="right_style">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-radio-group class="identity_radio"
                         name="radioGroup"
                         v-model="style"
                         @change="styleChange"
                         size="small">
            <a-radio value="新闻播报">新闻播报</a-radio>
            <a-radio value='大气稳重'>大气稳重</a-radio>
            <a-radio value='家常聊天'>家常聊天</a-radio>
            <a-radio value='激昂气势'>激昂气势</a-radio>
            <a-radio value='悠扬抒情'>悠扬抒情</a-radio>
            <a-radio value='动感活力'>动感活力</a-radio>
            <a-radio value='庄重威严'>庄重威严</a-radio>
            <a-radio value='冷淡感性'>冷淡感性</a-radio>
            <a-radio value='走心煽情'>走心煽情</a-radio>
            <a-radio value='浑厚沧桑'>浑厚沧桑</a-radio>
            <a-radio value='甜美可爱'>甜美可爱</a-radio>
            <a-radio value='纯真童声'>纯真童声</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="right_speed">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="level"
                         size="small">
            <a-radio :value=0>优质主播</a-radio>
            <a-radio :value=1>专业主播</a-radio>
            <a-radio :value=2>知名主播</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="right_speed">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="tryAudio"
                         :defaultValue="tryAudio"
                         disabled
                         size="small">
            <a-radio :value=0>试音</a-radio>
            <a-radio :value=1 >不试音</a-radio>
          </a-radio-group>
        </div>
      </div>
      <div class="right_speed">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-input placeholder="简单描述您的配音要求，少于50字"/>
        </div>
      </div>
      <div class="right_text">
        <p class="gender_title"><span class="color">*</span>交付时间</p>
        <div class="gender_choose">
          <a-textarea
            class="text_textarea"
            v-model="tryText"
            placeholder="请输入正文"
            style="font-size: 14px"
            :autosize="{ minRows: 5, maxRows: 5}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageLayout from '@/layout/PageLayout'
  const styleOption = [
    '新闻播报', '大气稳重', '家常聊天',
    '激昂气势', '悠扬抒情', '动感活力',
    '庄重威严', '冷淡感性', '走心煽情',
    '浑厚沧桑', '甜美可爱', '纯真童声',]
  export default {
    components: {PageLayout},
    data() {
      return {
        styleOption,
        styleDesable:[],
        title:'',
        content:'',
        identity:null,
        gender:null,
        speed:null,
        style:[],
        tryAudio:0,
        company:'',
        deliveryTime:'',
        level:'',
        tryText:'',

      }
    },
    methods:{
      onChangeTitle(){},
      chooseDeliveryTime(date, dateString){},
      styleChange(){

      },
    }
  }
</script>
<style lang="scss" scoped>
  .fast_demand{
    margin:0 20px;
    margin-top: 20px;
    display: flex;
    height: 88.5vh;
    justify-content: space-between;
    .add_left{
      width: 46%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .left_header{
        padding:0 20px;
        height: 67%;
        background: #ffffff;
        border-radius: 4px;
        box-shadow: #c1c1c1 2px 1px 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .header_title{
          margin-top: 30px;
          margin-left: 5px;
          display: flex;
          .title_sign{
            background: #ffd101;
            padding: 0 2px;
          }
          .title_title{
            font-size: 20px;
            height: 21px;
            margin-left: 10px;
            color: #333333;
          }
        }
        .header_content{
          position: relative;
          margin-top: -10px;
          .content_title{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .read_title{
              position: absolute;
              right: 0px;
              display: flex;
              align-items: center;
              margin-left: 10px;
              justify-content: flex-end;
              font-size: 12px;
              color: #666666;
              .title{
                margin-left: 10px;
                margin-bottom: 0px;
              }
            }
          }
          .test_number{
            position: absolute;
            right: 0px;
            bottom: -25px;
          }
        }
        .header_num{
          background: #f4f4f4;
          margin: 0px -20px;
          height: 50px;
          border-radius: 0 0 4px 4px;
          display: flex;
          line-height: 50px;
          justify-content: center;
          .num_sign{
            color: #333333;
          }
          .num_number{
            font-size: 20px;
            color: #333333;
          }
          .num_problem{
            margin-left: 5px;
            color: #773F1E;
          }
        }
      }
      .left_footer{
        padding:0 25px;
        border-radius: 4px;
        height: 30%;
        background: #ffffff;
        box-shadow: #c1c1c1 2px 1px 15px;
        .footer_title{
          margin-top: 30px;
          display: flex;
          .title_sign{
            background: #ffd101;
            padding: 0 2px;
          }
          .title_title{
            font-size: 20px;
            height: 21px;
            margin-left: 10px;
            color: #333333;
          }
        }
        .footer_identity{
          height: 40px;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          .identity_title{
            height: 40px;
            line-height: 40px;
            margin: 0px;
            width: 20%;
            .color{
              color: red;
              margin-right: 5px;
            }
          }
          .identity_choose{
            width: 80%;
            display: flex;
            align-items: center;
            .identity_radio{

              width: 45%;
            }
            .identity_innput{

            }
          }

        }
      }
    }
    .add_right{
      padding: 0 25px;
      width: 52%;
      height: 100%;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: #c1c1c1 2px 1px 15px;
      .right_title{
        margin-top: 30px;
        display: flex;
        .title_sign{
          background: #ffd101;
          padding: 0 2px;
        }
        .title_title{
          font-size: 20px;
          height: 21px;
          margin-left: 10px;
          color: #333333;
        }
      }
      .right_gender{
        margin-top: 20px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        line-height: 32px;
        .gender_title{
          height: 32px;
          line-height: 32px;
          margin: 0px;
          width: 20%;
          .color{
            color: red;
            margin-right: 5px;
          }
        }
        .gender_choose{
          width: 80%;
          display: flex;
          align-items: center;
         /* .identity_radio{
            width: 45%;
          }
          .identity_innput{

          }*/
        }

      }
      .right_speed{
        margin-top: 10px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        line-height: 32px;
        .gender_title{
          height: 32px;
          line-height: 32px;
          margin: 0px;
          width: 20%;
          .color{
            color: red;
            margin-right: 5px;
          }
        }
        .gender_choose{
          width: 80%;
          display: flex;
          align-items: center;
          /* .identity_radio{
             width: 45%;
           }
           .identity_innput{

           }*/
        }

      }
      .right_style{
        margin-top: 10px;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .gender_title{
          line-height: 16px;
          margin: 0px;
          width: 20%;
          .color{
            color: red;
            margin-right: 5px;
          }
        }
        .gender_choose{
          width: 80%;
          display: flex;
          align-items: center;
          /* .identity_radio{
             width: 45%;
           }
           .identity_innput{

           }*/
        }

      }
      .right_text{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
        .gender_title{
          //line-height: 32px;
          margin: 0px;
          width: 20%;
          .color{
            color: red;
            margin-right: 5px;
          }
        }
        .gender_choose{
          width: 80%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          border: 1px solid #ffffff;
          &:hover{
            box-sizing: border-box;
            border-radius: 4px;
            //border: 1px solid #ffd101;
          }
          /* .identity_radio{
             width: 45%;
           }
           .identity_innput{

           }*/
        }

      }
    }
  }

</style>

<style lang="scss">
  .title_input{
    border: none;
    border-bottom: 1px solid #cccccc;
    background: none;
    border-radius: 0;
    font-size: 18px;
    &:hover{
      border: none;
      border-bottom: 1px solid #ffd101;
    }
    &:focus{
      outline: none;
      border: none;
      border-bottom: 1px solid #ffd101;
      box-shadow:none;
    }
  }
  .title_textarea{
    &:focus{
      outline: none;
      border: none;
      box-shadow:none;
    }
  }
</style>
