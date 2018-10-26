<template>
    <div class="task-item">
        <h2>{{ item.demoTitle }}</h2>
        <div class="tags-wrap">
            <div class="tags">
                <span v-if="item.gender">{{ item.gender }}</span>
                <span>{{ item.speed }}</span>
                <span v-for="(tag, index) in item.tags" :key="index">{{tag}}</span>
            </div>
            <strong v-if="item.income">
                ¥ {{ item.income }}
            </strong>
        </div>
        <div class="title">
            <figure class="header">
                <img :src="item.publisher && item.publisher.avatar">
            </figure>
            <div class="title-content">
                <div class="name-wrap">
                    <h3>{{item.publisher && item.publisher.name}}</h3>
                    <div class="icon-wrap" v-if="item.publisher && !item.publisher.official">
                        <img src="./authority_icon.png">
                    </div>
                </div>
                 <time>{{item.time}}</time>
            </div>
            
            <p class="statu">
                <small :class="{'active' : item.status != 1}"></small>
                <span>{{item.status == 1 ? '进行中' : '结束'}}</span>
            </p>
        </div>
        <p class="text">
            {{ item.demoContent }}
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
            margin: 0;
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
                    margin: 0;
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
        padding: 12px 0;
        border-top: 1px solid $color-background;
    }
}

  
</style>