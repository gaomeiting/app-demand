<template>
    <div class="task-item">
        <h2>男童音</h2>
        <div class="tags-wrap">
            <div class="tags">
                <span> 男 </span>
                <span>快速</span>
                <span v-for="(tag, index) in 3" :key="index">深沉</span>
            </div>
            <strong>
                ¥ 500 ~ ¥ 1000
            </strong>
        </div>
        <div class="title">
            <figure class="header">
                <img src="https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=047b418c923df8dcb93d8991fd1072bf/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg">
            </figure>
            <div class="title-content">
                <div class="name-wrap">
                    <h3>会上树的^(*￣(oo)￣)^</h3>
                    <div class="icon-wrap">
                        <img src="./authority_icon.png">
                    </div>
                </div>
                 <time>2017-12-8</time>
            </div>
            
            <p class="statu">
                <!-- <small :class="{'active' : item.status != 1}"></small>
                <span>{{item.status == 1 ? '进行中' : '结束'}}</span> -->
                <span> 进行中 </span>
            </p>
        </div>
        <p class="text">
            我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介
        </p>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      item: {
        type: Object,
        default() {
            return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/variable";
  @import "~assets/scss/mixin";
.task-item {
    background-color: $color-background-d;
    padding: 8px 16px 0;
    .title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        .header {
            flex: 0 0 44px;
            width: 44px;
            height: 44px;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 100%;

            }
        }
        .title-content {
            flex: 1;
            padding-left: 8px;
            .name-wrap {
                display: flex;
                align-items: center;
                margin-bottom: 4px;
                h3 {
                    font-size: $font-size-medium;
                    line-height: 1.5;
                    padding-right: 4px;
                    font-size: $font-size-medium-x;
                    color: $color-text-l;
                    @include ellipsis(1)
                }

            }
            time {
                font-size: $font-size-small;
            }
        }
        
        .icon-wrap {
            flex: 0 0 12px;
            width: 12px;
            height: 14px;
            img {
                width: 100%;
                min-height: 100%;
            }
        }
        .statu {
            display: flex;
            align-items: center;
            small {
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                border: 2px solid $color-theme;
                margin: 0 4px;
                &.active {
                    border: 2px solid $color-text;
                }
            }
            span {

            }
        }
    }
    > h2 {
        font-size: $font-size-large-x;
        color: $color-text-l;
        line-height: 1.5;
        margin-bottom: 8px;
        @include ellipsis(2)
    }
    
    > .tags-wrap {
            display: flex;
            justify-content: space-between;
           .tags {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 8px;
                span {
                    font-size: $font-size-small;
                    padding: 0.4em 0.6em;
                    background-color: $color-background;
                    margin: 0 6px 6px 0;
                    border-radius: 14px;
                    &.active {
                        background-color: $color-theme-d;
                        color: $color-background-d;
                    }
                }
           }
           strong {
                color: #d54542;
                padding-top: 4px;
            }
    }
    > .text {
        line-height: 1.5;
        padding-bottom: 12px;
        border: 1px solid $color-background;
    }
}

  
</style>