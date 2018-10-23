/*
 * @Author: Cicy 
 * @Date: 2018-10-23 10:40:24 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-23 15:33:32
 */
<template>
    <div class="page">
        <div class="logo-wrap">
            <img src="./logo.png">
            <h2>让有价值的声音得到更广泛的传播</h2>
        </div>
        <div class="form-wrap">
            <span>&nbsp;</span>
            <figure>
            </figure>
            <p>
                <label> <strong>·</strong>姓名</label>
                <input type="text" placeholder="请输入真实姓名" v-model="form.name" @blur="checkRules(0)">
            </p>
            <!-- <transition name="fadePage" mode="out-in"> -->
                <p v-if="error[0]" class="error"> {{error[0].msg}} </p>
            <!-- </transition> -->
            <p>
                <label>邮箱</label>
                <input type="text" placeholder="请输入真实邮箱" v-model="form.email" @blur="checkRules(1)">
            </p>
            <!-- <transition name="fadePage" mode="out-in"> -->
                <p v-if="error[1]" class="error"> {{error[1].msg}} </p>
            <!-- </transition> -->
            <p>
                <label>QQ</label>
                <input type="text" placeholder="请输入QQ号" v-model="form.qq" @blur="checkRules(2)">
            </p>
            <!-- <transition name="fadePage" mode="out-in"> -->
                <p v-if="error[2]" class="error"> {{error[2].msg}} </p>
            <!-- </transition> -->
            <p>
                <label><strong>·</strong>手机</label>
                <input type="text" placeholder="请输入手机号" v-model="form.mobile" @blur="checkRules(3)">
            </p>
            <transition name="fadePage" mode="out-in">
                <p v-if="error[3]" class="error"> {{error[3].msg}} </p>
            </transition>
            <p>
                <label><strong>·</strong>验证</label>
                <input type="text" placeholder="请输入验证码" v-model="form.code" @blur="checkRules(4)">
                <a href="javascrip:;" class="btn active">获取验证码</a>
                
            </p>
            <transition name="fadePage" mode="out-in">
                <p v-if="error[4]" class="error"> {{error[4].msg}} </p>
            </transition>
            <a href="javascrip:;" class="btn active" @click="submit">确认</a>
        </div>
        
    </div>
</template>

<script>

export default {
  data(){
    return{
        form : {
            name: '',
            email: '',
            qq: '',
            mobile: '',
            code: ''
        },
        error: []
    }
  },
methods: {
  submit() {
       this.checkRules()
  },
  
  checkRules(index) {
     
      let error = this.error
      switch (index) {
          case 0:
              if(/^[\u0391-\uFFE5\w]+$/.test(this.form.name) == false) {
                    error[0] = {msg: '请输入真实姓名'}
                    
              }
              else {
                  error[0] = {msg: ''}
              }
              this.error = error;
              break;
            case 1:
                 if(this.form.email && (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.form.email) == false) ) {
                        error[1] = {msg: '请填写正确的邮箱格式'}
                        
                 }
                 else {
                     error[1] = {msg: ''}
                 }
                 this.error = error;
                break;
            case 2:
                 if(this.form.qq && (/^[1-9]\d{4,8}$/.test(this.form.qq) == false)) {
                        error[2] = {msg: '请填写正确的qq格式'}
                 }
                 else {
                     error[2] = {msg: ''}
                 }
                break;
            case 3:
                if(/^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/.test(this.form.mobile) == false) {
                    error[3] = {msg: '请填写正确的手机号码'}
                     this.error = error;
                }
                else {
                     error[3] = {msg: ''}
                 }
                this.error = error;
                break;
            case 4:
                if(!this.form.code) {
                    error[4] ={ msg: '验证码不能为空'}
                }
                else {
                     error[4] = {msg: ''}
                 }
                this.error = error;
                break;
            default: 
             this.error = error;
                break;
          
      }
    
      
  }
},
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/variable";

.page {
    background-color: $color-background;
}
.logo-wrap {
    padding-top: 52px;
    margin-bottom: 72px;
    img {
        display: block;
        width: 140px;
        margin: 0 auto;
    }
    h2 {
        color: $color-theme-l;
        text-align: center;
        font-size: $font-size-medium-x;
        padding-top: 10px;
    }
}
.form-wrap {
    width: 432px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.1), -2px -2px 4px rgba(0,0,0,0.1);
    border-radius: 4px;
    background-color: $color-background-d;
    padding: 0 30px 50px;
    margin: 0 auto;
    > figure {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background-image: url('https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=047b418c923df8dcb93d8991fd1072bf/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg');
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        margin: -46px auto 34px;
    }
    
    p {
        display: flex;
        align-items: center;
        &.error {
            color: red;
            padding-left: 66px;
        }
        label {
            flex: 0 0 46px;
            width: 46px;
            text-align: right;
            margin-right: 20px;
            strong {
                color: red;
                padding-right: 6px;
            }
        }
        input {
            padding: 1em;
            flex: 1;
            border: 1px solid $color-text;
            background-color: $color-text-ll;
            /* border: none; */
            border-radius: 2px;
            box-sizing: border-box;
            ::selection {
                border: none;

            }
        }
        .btn {
            width: 100px;
            flex: 0 0 100px;
            font-size: $font-size-medium;
            margin: 0;
            margin-left: 20px;
        }
    }
    .btn {
        display: block;
        height: 46px;
        border-radius: 6px;
        text-align: center;
        line-height: 46px;
        font-size: $font-size-medium-x;
        background-color: $color-background;
        margin: 0 46px;
        &.active {
            background-color: $color-theme-d;
            color: $color-text-l;
        }
    }
}
</style>
