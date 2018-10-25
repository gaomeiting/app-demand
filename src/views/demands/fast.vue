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
            @blur="loseFocus"
            style="border: none; margin-top: 20px; font-size: 14px;"
            :autosize="{ minRows: 15, maxRows: 15 }" />
          <span class="test_number">{{content.length}}</span>
        </div>
        <div class="header_num">
          <p>
            <span class="num_sign">￥</span>
            <span class="num_number">{{demandPrice}}</span>
            <span class="num_problem" @click="showProblem">计价规则？</span>
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
                           @change="chooseIdentity"
                           size="small">
              <a-radio :value=1>个人</a-radio>
              <a-radio :value=2>公司</a-radio>
            </a-radio-group>
            <a-input
              v-if="identity == 2"
              class="identity_innput title_input"
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
        <p class="gender_title"><span class="color">*</span>性别要求</p>
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
        <p class="gender_title"><span class="color">*</span>期望语速</p>
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
      <!--选择风格-->
      <div class="right_style">
        <p class="gender_title"><span class="color">*</span>期望风格</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="style"
                         size="small">
            <a-radio value="新闻播报">新闻播报</a-radio>
            <a-radio value="大气稳重">大气稳重</a-radio>
            <a-radio value="家常聊天">家常聊天</a-radio>
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
      <!--主播等级-->
      <div class="right_speed">
        <p class="gender_title"><span class="color">*</span>主播等级</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="level"
                         @change="chooseLevel"
                         size="small">
            <a-radio :value=0>优质主播</a-radio>
            <a-radio :value=1>专业主播</a-radio>
            <a-radio :value=2>知名主播</a-radio>
          </a-radio-group>
        </div>
      </div>
      <!--是否试音-->
      <div class="right_speed">
        <p class="gender_title"><span class="color">&nbsp;</span>是否试音</p>
        <div class="gender_choose">
          <a-radio-group class="gender_radio"
                         name="radioGroup"
                         v-model="tryAudio"
                         :defaultValue="tryAudio"
                         disabled
                         size="small">
            <a-radio :value=0>试音</a-radio>
          </a-radio-group>
        </div>
      </div>
      <!--试音要求-->
      <div class="right_speed">
        <p class="gender_title"><span class="color">*</span>试音要求</p>
        <div class="gender_choose">
          <a-input v-model="demoRequirement" placeholder="简单描述您的配音要求，少于50字" maxlength="50"/>
        </div>
      </div>
      <!--试音文稿-->
      <div class="right_text">
        <p class="gender_title"><span class="color">*</span>试音文稿</p>
        <div class="gender_choose">
          <a-textarea
            class="text_textarea"
            v-model="tryText"
            placeholder="请输入正文"
            style="font-size: 14px"
            maxlength="150"
            :autosize="{ minRows: 5, maxRows: 5}" />
        </div>
      </div>
      <!--试音期限-->
      <div class="right_speed" style="margin-top: 30px">
        <p class="gender_title"><span class="color">*</span>试音期限</p>
        <div class="gender_choose">
          <a-select placeholder="请选择试音期限"
                    @change="ChangeTime"
                    style="width: 100%">
            <a-select-option :value=2>2小时</a-select-option>
            <a-select-option :value=4>4小时</a-select-option>
            <a-select-option :value=10>10小时</a-select-option>
            <a-select-option :value=24>24小时</a-select-option>
          </a-select>
        </div>
      </div>
      <p class="right_publish" @click="addDemand">发布</p>
    </div>
    <a-modal title="快捷配音计费方式" v-model="visible" @ok="handleOk" cancelText="关闭" okText="确定">
      <p>主播基本价格：</p>
      <p>顶级主播：10元/100字<br/>
        知名主播：5元/100字<br/>
        优质主播：2元/100字</p>
      <p>男、女声、风格特点等都不影响计费。</p>
      <p>其他计费计算规则：</p>
      <p>500字起录，不足500字按照500字计算。
        字数计算按照直接入1位的方式计算有多少百字，即523字按照600字计算。
        需要加急配音价格为基础价格的2倍。</p>
    </a-modal>
  </div>
</template>

<script>
  import PageLayout from '@/layout/PageLayout'
  import axios from 'axios'
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
        demandPrice:0,
        title:'',
        content:'',
        identity:null,
        gender:null,
        speed:null,
        level:null,
        style:[],
        tryAudio:0,
        company:'',
        deliveryTime:'',
        bidTime:'',
        demoRequirement:'',
        requirementTitle:1,
        tryText:'',
        changeUseful:null,
        visible:false,
      }
    },
    methods:{
      showProblem(){
        this.visible = true
      },
      handleOk(){
        this.visible = false
      },
      //配音正文输入完毕
      loseFocus(){
        this.tryText = this.content.substring(0,150)
        if(this.content.length > 0){
          if(this.level == null){
            this.level = 0
          }
          axios.get('api/customer/demand/price?dubberLevel='+this.level+'&wordCount=' + this.content.length).then(res => {
            this.demandPrice = res.data
          }).catch(err => {
            const errorStatus = err.response.status
            if(errorStatus == '500'){
              this.error = 1
            }else{
              handlerError(err.response.data)
            }
          })
        }
      },
      //选择身份
      chooseIdentity(){
        console.log(this.identity)
        if(this.identity == 2){
          axios.get('api/customer/company').then(res => {
            if(res.data != ''){
              this.company = res.data
            }
          }).catch(err => {
            const errorStatus = err.response.status
            if(errorStatus == '500'){
              this.error = 1
            }else{
              handlerError(err.response.data)
            }
          })
        }
      },
      onChangeTitle(value){
        console.log(value)
        if(value){
          this.requirementTitle = 1
        }else{
          this.requirementTitle = 0
        }
      },
      //交付时间
      chooseDeliveryTime(date, dateString){
        this.deliveryTime = dateString + ' 00:00:00'
      },
      chooseLevel(value){
        console.log(value.target.value)
        if(this.content.length > 0){
          axios.get('api/customer/demand/price?dubberLevel='+value.target.value+'&wordCount=' + this.content.length).then(res => {
            this.demandPrice = res.data
          }).catch(err => {
            const errorStatus = err.response.status
            if(errorStatus == '500'){
              this.error = 1
            }else{
              handlerError(err.response.data)
            }
          })
        }
      },
      ChangeTime(value){
        const myDate = value*3600000
        const currTime = new Date().getTime();
        const time = new Date( myDate+currTime )
        this.bidTime = time.toLocaleString()
      },
      addDemand(){
        const arr = []
        arr.push(this.style)
        this.style = arr
        console.log(this.style)
        const data = {
          'title' : this.title,
          'content' : this.content,
          'voiceStyle' : this.style,
          'voiceSpeed' : this.speed,
          'requiredGender' : this.gender,
          'dubberLevel' : this.level,
          'requiredDemo' : 1,
          'demoRequirement' : this.demoRequirement,
          'deliveryTime' : this.deliveryTime,
          'bidTime' : this.bidTime,
          'demoContent' : this.tryText,
          'requirementTitle' : this.requirementTitle,
          'income' : this.demandPrice,
          'type' : this.identity,
          'publishScope' : 0,
          'companyName' : this.company,
        }
        if(this.title == ''){
          this.$message.error('请输入标题')
        }else if(this.content == ''){
          this.$message.error('请输入正文')
        }else if(this.identity == null){
          this.$message.error('请选择您的身份')
        }else if(this.identity == 2 && this.company == ''){
          this.$message.error('请输入公司名称')
        }else if(this.deliveryTime == ''){
          this.$message.error('请选择交付时间')
        }else if(this.gender == null){
          this.$message.error('请选择性别要求')
        }else if(this.speed == null){
          this.$message.error('请选择期望语速')
        }else if(this.style == ''){
          this.$message.error('请选择期望风格')
        }else if(this.level == null){
          this.$message.error('请选择主播等级')
        }else if(this.demoRequirement == ''){
          this.$message.error('请输入试音要求')
        }else if(this.tryText == ''){
          this.$message.error('请输入试音文稿')
        }else if(this.bidTime == ''){
          this.$message.error('请选择试音期限')
        }else{
          axios.post('/api/customer/demand',data).then(res => {
            this.$router.push({
              name: 'demands_success',
              params:{
                title:this.title,

              }
            })
          }).catch(err => {
            const errorStatus = err.response.status
            if(errorStatus == '500'){
              this.error = 1
            }else{
              handlerError(err.response.data)
            }
          })
        }
      },
    }
  }
  Date.prototype.toLocaleString = function() {
    const y = this.getFullYear()
    let m = this.getMonth() + 1
    if(m < 10){
      m = '0' + m
    }
    let d = this.getDate()
    if(d < 10){
      d = '0' + d
    }
    let h = this.getHours()
    if(h < 10){
      h = '0' + h
    }
    let f = this.getMinutes()
    if(f < 10){
      f = '0' + f
    }
    let s = this.getSeconds()
    if(s < 10){
      s = '0' + s
    }
    return y + "-" + m + "-" + d + " " + h + ":" + f + ":" + s;
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
            &:hover{
              cursor: pointer;
            }
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
          line-height: 40px;
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
        margin-top: 30px;
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
        }

      }
      .right_speed{
        margin-top: 30px;
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
        }

      }
      .right_style{
        margin-top: 30px;
        min-height: 60px;
        max-height: 90px;
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
        }

      }
      .right_text{
        margin-top: 30px;
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
      .right_publish{
        background: #ffd101;
        width: 300px;
        margin: 0 auto;
        height: 42px;
        border-radius: 4px;
        margin-top: 50px;
        color: #333333;
        line-height: 42px;
        text-align: center;
        &:hover{
          cursor: pointer;
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
