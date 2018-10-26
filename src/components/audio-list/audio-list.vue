<template>
    <div class="audio-list" v-if="list.length>0">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <div class="title">
                    <figure class="header" :style="'background-image: url('+item.avatar+')'">
                        <!-- <img :src="item.avatar"> -->
                    </figure>
                    <div class="title-content">
                        <div class="name-wrap">
                            <h3>{{item.nickname}}</h3>
                            <div class="icon-wrap">
                                <img :src="'/customer/publicImages/anchor_'+item.dubberLevel+'.png'">
                            </div>
                        </div>
                         <time>{{ item.creatTime }}</time>
                    </div>
                </div>
                <div class="content" @click.stop="settingCurrentSong(index)">
                    <span><!-- 30s --></span>
                    <div class="icon-wrap">
                        <div :class="song && index === currentSongIndex && flag ? 'icon_loading' : ''"></div>
                        <div v-if="(index != currentSongIndex) || (index === currentSongIndex && !song) " :class="index === currentSongIndex && flag ? 'icon_pause' : 'icon_play'"></div>
                        <!-- <img src="./pause.gif"> -->
                        <span> {{ index != currentSongIndex || !diff || (song && index === currentSongIndex && flag) ? format(item.voiceMeta.duration) : currentTime }} </span>
                    </div>
                </div>
                <img v-if="item.status == 1" src="/customer/publicImages/selected.png" alt="">
                <img v-if="item.status == 2" src="/customer/publicImages/unselected.png" alt="">
                <div class="btn-wrap" v-if="item.status == 0">
                    <a href="javascript:;" class="btn" v-for="(btn,btnIndex) in btns" :class="{ 'active': btnIndex=== 0 }" v-if=" btnIndex || !btnIndex && !taskFlag" @click.top="showConfirm(btnIndex, item, index)">{{btn.text}}</a>
                </div>
            </li>
            <li v-if="list.length % 3 == 2"></li>
        </ul>
        <audio :src="list[currentSongIndex] && list[currentSongIndex].voiceUrl" ref="audio" @timeupdate="updateTime" @play="ready" @ended="end"></audio>
    </div>
</template>

<script type="text/ecmascript-6">
import { audioHandler } from 'assets/js/mixins'
  export default {
    mixins: [ audioHandler ],
   data() {
       return {
           btns: [
               { text: '中标'},
               { text: '淘汰'}
           ]
       }
   },
    props: {
      list: {
        type: Array,
        default() {
            return []
        }
      },
      taskFlag: {
          type: Number,
          default: 0
      }
    },
    methods: {
        showConfirm(btnIndex, item, index) {
            let title = btnIndex ? '确定让该音频淘汰？' : '确定让该音频中标？'
            this._showConfirm({
                title,
                okFn: () => {
                    
                    this.$emit('changeSatus', btnIndex, item, index)
                }
            })
        },
        _showConfirm({title, content, okFn}) {
            this.$confirm({
                title,
                content,
                cancelText: '取消',
                okText: '确定',
                onOk() {
                    if(okFn) {
                        okFn()
                    }
                },
                onCancel() {},
            });
        }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "~assets/scss/variable";
  @import "~assets/scss/mixin";
.audio-list {
    background-color: $color-background-d;
    padding: 0 16px;
    ul {
        display: flex;
    }
}

li {
    flex: 0 0 32%;
    min-width: 320px;
    padding: 16px 0;
    position: relative;
    border-bottom: 1px solid $color-background;
    margin-right: 2%;
    &:nth-of-type(3n) {
        margin-right: 0;
    }

    &:last-of-type {
        border-bottom: 1px solid $color-background-d;
    }
    > img {
        position: absolute;
        top: 0;
        right: 0;
        width: 26px;
        height: 26px;
    }
    > .btn-wrap {
        position: absolute;
        right: 0;
        top: 0;
        .btn {
            display: inline-block;
            width: 112px;
            height: 34px;
            border-radius: 6px;
            text-align: center;
            line-height: 34px;
            font-size: $font-size-medium;
            background-color: $color-btn;
            color: $color-btn-text;
            margin-left: 10px;
            &.active {
                background-color: $color-theme-d;
                color: $color-text-l;
            }
        }
    }
   .title {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        .header {
            flex: 0 0 44px;
            width: 44px;
            height: 44px;
            overflow: hidden;
            border-radius: 50%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            /* img {
                width: 100%;
                min-height: 70px;

            } */
        }
        .title-content {
            flex: 1;
            padding-left: 8px;
            .name-wrap {
                display: flex;
                align-items: center;
                margin-bottom: 4px;
                h3 {
                    line-height: 1.5;
                    padding-right: 4px;
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
            flex: 0 0 46px;
            width: 46px;
            height: 16px;
            img {
                width: 100%;
                min-height: 100%;
            }
        }
    } 
    .content {
        display: flex;
        align-items: center;
        span {
            flex: 0 0 46px;
            width: 46px;
            text-align: right;
            line-height: 40px;
            color: $color-background-d;
            padding-right: 16px;
        }
        .icon-wrap {
            flex: 1;
            display: flex;
            height: 40px;
            padding-left: 12px;
            background-color: $color-theme-d;
            border-radius: 4px;
            cursor: pointer;
            span {
                flex: 1;
            }
            .icon_pause, .icon_play, .icon_loading {
                flex: 0 0 10px;
                width: 10px;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                &.icon_pause {
                    background-image: url('/customer/publicImages/pause.gif');
                }
                &.icon_play {
                    background-image: url('/customer/publicImages/play.png');
                }
                &.icon_loading {
                    background-image: url('/customer/publicImages/loading.gif');
                    flex: 0 0 16px;
                    width: 16px;
                    height: 16px;
                    margin-top: 12px; 
                }
                &.icon_pause, &.icon_play {
                    height: 15px;
                    margin-top: 12px; 
                }
            }
        }
    }
}

  
</style>