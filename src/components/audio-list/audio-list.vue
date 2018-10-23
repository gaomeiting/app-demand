<template>
    <div class="audio-list">
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
                                <img :src="'/anchor_'+item.dubberLevel+'.png'">
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
                <img v-if="item.status == 1" src="/selected.png" alt="">
                <img v-if="item.status == 2 && item.self" src="/unselected.png" alt="">
            </li>
        </ul>
        <audio :src="list[currentSongIndex] && list[currentSongIndex].voiceUrl" ref="audio" @timeupdate="updateTime" @play="ready" @ended="end"></audio>
    </div>
</template>

<script type="text/ecmascript-6">
import { audioHandler } from 'assets/js/mixins'
  export default {
    mixins: [ audioHandler ],
   
    props: {
      list: {
        type: Array,
        default() {
            return []
        }
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
}

li {
    padding: 16px 0;
    position: relative;
    border: 1px solid $color-background;
    &:last-of-type {
        border: 1px solid $color-background-d;
    }
    > img {
        position: absolute;
        top: 0;
        right: 0;
        width: 26px;
        height: 26px;
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
                    background-image: url('/pause.gif');
                }
                &.icon_play {
                    background-image: url('/play.png');
                }
                &.icon_loading {
                    background-image: url('/loading.gif');
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