<template>
<div>
        <div class="task-item-wrap">
            <task-item :item="taskItem"></task-item>
        </div>
        <div class="audio-list-wrap">
            <h2><span>全部试音</span></h2>
            <audio-list :list="list" @changeSatus="changeSatus" :taskFlag="taskFlag"></audio-list>
            <div class="no-result-wrap" v-if="list.length == 0 && !loading">
                <no-result title="暂时没有试音文件~~"></no-result>
            </div>
            <div class="loading-wrap" v-if="loading">
                <loading></loading>
            </div>
        </div>
        
</div>
</template>

<script>
import TaskItem from 'components/task-title/task-title'
import AudioList from 'components/audio-list/audio-list'
import NoResult from 'components/no-result/no-result'
import Loading from 'components/loading/loading'
import { handlerError } from 'api/catch'
import { CreateArticle } from 'assets/js/article'
import { formatTime } from 'assets/js/until'


export default {
    data() {
        return {
			loading: true,
            finished: false,
            id: 0,
            taskItem: {},
            list: [],
            uploadSeveId: false,
            taskFlag: 0
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getTaskDetails()
        this.getDemoList()
    },
    methods: {
		changeSatus(index, item, itemIndex) {
            let status= index ? 'out' : 'in'
            let demandId = item.demandId;
            let dubberId = item.dubberId;
            this.$axios.put(`/api/customer/demand/${demandId}/apply/${dubberId}/${status}`).then(res => {
                this.list[itemIndex].status = index+1;
            }).catch(err => {
                handlerError(err.response.data)
            })
            //console.log(index, item, "as;lfajks;lf")
        },
       getTaskDetails() {
            this.$axios(`/api/customer/demand/${this.id}`).then(res => {
                this.taskItem = this._normalize(res.data)
            }).catch(err => {
                handlerError(err.response.data)
            })
        },
        getDemoList() {
            this.loading = true;
            this.$axios(`/api/customer/demand/${this.id}/apply`).then(res => {
                this.loading = false;
                this.list = res.data
                //需求是否有中标
                this.list.forEach(item => {
                    if(item.status == 1) {
                        this.taskFlag = 1;
                        return;
                    }
                })
            }).catch(err => {
                this.loading = false;
                handlerError(err.response.data)
            })
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
            let income = res.income;
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
                income
            })
        }
    },
    components: {
        TaskItem,
		AudioList,
        NoResult,
        Loading
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variable";
@import "~assets/scss/mixin";
.loading-wrap {
    padding: 160px 0;
}
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
.task-item-wrap {
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1), -1px -1px 4px rgba(0,0,0,0.1);
    border-radius: 6px;
    overflow: hidden;
}
.audio-list-wrap {
    background-color: $color-background-d;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1), -1px -1px 4px rgba(0,0,0,0.1);
    border-radius: 6px;
    overflow: hidden;

    >h2 {
        height: 44px;
        line-height: 44px;
        font-size: $font-size-large;
        color: $color-text-l;
        padding: 0 16px;
        border: 1px solid $color-background;
        margin-bottom: 0;
        span {
            display: inline-block;
            height: 100%;
            border-bottom: 3px solid $color-text-l;
        }
    }
}
</style>
