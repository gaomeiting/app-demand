<template>
    <div class="task-item" @click.stop="goTaskDetail">
            <h2> 不要播音腔<!-- {{ item.demoRequirement }} --></h2>
            <div class="tags-wrap">
                <div class="tags">
                    <span>女性</span>
                    <span>标准语速</span>
                    <span v-for="(tag, tagIndex) in voiceStyle" :key="tagIndex">{{tag}}</span>
                </div>
                <strong>
                    ¥ 500  ~ ¥ 1000 
                </strong>
            </div>
            <!-- <p class="text">
                配音需求简介需求简介需求简介需求简介需求简介需求简简介需求简介介需求简介需求简介需求简介需求简介需求简介需求简介简介需求简介需求简介需求简介介简介需求简介需求。
            </p> -->
            <div class="footer">
                <time>2017-10-08</time>
                <p class="statu">
                    <!-- <small :class="{'active' : item.status != 1}"></small> -->
                    <!-- <span>{{item.status == 1 ? '进行中' : '结束'}}</span> -->
                    <span> 进行中 </span>
                </p>
                <!-- <p>共0人参加</p> -->
            </div>
    </div>
</template>

<script type="text/ecmascript-6">
/* import { formatTime } from 'assets/js/until' */
  export default {
    props: {
      voiceStyle: {
        type: Array,
        default() {
            return ['大气稳重', '大气稳重']
        }
      }
    },
    methods: {
        goTaskDetail() {
            this.$emit('goTaskDetail')
        }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/variable";
  @import "~assets/scss/mixin";

.task-item {
    padding: 8px 16px 0;
    border-bottom: 8px solid $color-background;
    background-color: $color-background-d;
    cursor: pointer;
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
    }
    .title {
        display: flex;
        align-items: center;
        .header {
            flex: 0 0 44px;
            width: 44px;
            height: 44px;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 100%;
                min-height: 70px;

            }
        }
        .name-wrap {
            flex: 1;
            display: flex;
            padding-left: 8px;
            align-items: center;
            h3 {
                line-height: 1.5;
                padding-right: 4px;
                color: $color-text-l;
                @include ellipsis(1)
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
        
    }
    > h2 {
        font-size: $font-size-large;
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
        line-height: 1.2;
        padding-bottom: 12px;
        border: 1px solid $color-background;
    }
    > .footer {
        display: flex;
        padding: 8px 0;
        font-size: $font-size-small;
        color: $color-text-d;
        time {
            flex: 1;
        }
    }
}
  
</style>