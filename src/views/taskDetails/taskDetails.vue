<template>
<div>
        <task-item :item="taskItem"></task-item>
        <div class="audio-list-wrap">
            <h2><span>全部试音</span></h2>
            <audio-list :list="list"></audio-list>
            <div class="no-result-wrap" v-if="list.length == 0">
                <no-result title="暂时没有试音文件~~"></no-result>
            </div>
        </div>
</div>
</template>

<script>
import TaskItem from 'components/task-title/task-title'
import AudioList from 'components/audio-list/audio-list'
import NoResult from 'components/no-result/no-result'
import { handlerError } from 'api/catch'
import { CreateArticle } from 'assets/js/article'
import { formatTime } from 'assets/js/until'


export default {
    mixins: [ handlerError ],
    data() {
        return {
			loading: false,
            finished: false,
            id: 0,
            taskItem: {},
            list: [],
            uploadSeveId: false
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getTaskDetails()
        this.getDemoList()
    },
    methods: {
		
       getTaskDetails() {
           /*  this.$axios(`/api/demand/${this.id}`).then(res => {
                this.taskItem = this._normalize(res)
            }).catch(err => {
                handlerError(err.response.data)
            }) */
        },
        getDemoList() {
            /* this.$axios(`/api/demand/${this.id}/apply`).then(res => {
                this.list = res
                this.list.forEach(item => {
                    item.self = item.userId === JSON.parse(sessionStorage.user).uid
                    if(item.self) {
                        this.uploadSeveId = true;
                    }
                })
                
            }).catch(err => {
                handlerError(err.response.data)
            }) */
        },
        
        _normalize(res) {
            let id = this.id;
            let status = res.status;
            let time = formatTime(res.creatTime);
            let tags = res.voiceStyle;
            let gender = res.requiredGender == 1 ? '男性' : res.requiredGender == 2 ? '女性' : 0;
            let speed = res.voiceSpeed == 0 ? '慢速语速' : res.voiceSpeed == 1 ? '标准语速' : '快速语速';
            let demoTitle = res.demoRequirement;
            let demoContent = res.demoContent;
            let joinNum = res.joinNum;
            let incomeFrom = res.incomeFrom;
            let incomeTo = res.incomeTo;
            let publisher = {
                name: res.publisher,
                avatar: res.publishAvatar,
                official: res.officialPublish
            }
            return CreateArticle({
                id,
                status,
                time,
                tags,
                gender,
                speed,
                demoTitle,
                demoContent,
                joinNum,
                publisher,
                incomeFrom,
                incomeTo
            })
        }
    },
    components: {
        TaskItem,
		AudioList,
        NoResult
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.btn {
    display: block;
	width: 100%;
	height: 46px;
	border-radius: 6px;
	text-align: center;
	line-height: 46px;
	font-size: $font-size-medium-x;
	background-color: $color-background;
    color: $color-text-l;
	&.active {
		background-color: $color-theme-d;
		color: $color-text-l;
	}
}  
.record-wrap {
    background-color: $color-background-d;
    padding: 20px 44px 0;
    text-align: center;
    border-bottom: 8px solid $color-background;

    h4 {
        color: $color-text-l;
        font-size: $font-size-medium-x;
        padding-bottom: 12px;
    }

    p {
        line-height: 1.4;
        margin-bottom: 40px;

        &:last-of-type {
            padding-bottom: 16px;
        }
    }
}

.audio-list-wrap {
    background-color: $color-background-d;

    >h2 {
        height: 44px;
        line-height: 44px;
        font-size: $font-size-large;
        color: $color-text-l;
        padding: 0 16px;
        border: 1px solid $color-background;
        span {
            display: inline-block;
            height: 100%;
            border-bottom: 3px solid $color-text-l;
        }
    }
}
</style>
