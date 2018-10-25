<template>
<div>
<task-list v-if="list.length > 0" @goDetail="goTaskDetail" :list="list"></task-list>
<!-- <div class="no-result-wrap" v-if="list.length == 0 && !loading">
    <no-result title="暂时没有试音需求~~"></no-result>
</div> -->
<div class="loading-wrap" v-if="loading">
  <loading></loading>
</div>
<figure @click="goDemand" class="placeholder">
  <img src="/customer/publicImages/banner.jpg">
</figure>
</div>
</template>

<script>
import TaskList from 'components/task-list/task-list';
import Loading from 'components/loading/loading';
/* import NoResult from 'components/no-result/no-result'; */
import { handlerError } from 'api/catch';
export default {
  data() {
    return {
      list: [],
      loading: true
    }
  },
  created() {
    this._getTaskList()
  },
  methods: {
    goTaskDetail(item) {
      let id = item.id
      this.$router.push({
  				path: `/index/${id}`
  		})
    },
    goDemand() {
      this.$router.push({
  				path: `/demands/fast`
  		})
    },
    _getTaskList() {
			this.$axios(`/api/customer/demand`).then(res=>{
				this.loading = false
				if(res.status === 200) {
          this.list = res.data;
				}	
			}).catch(err => {
        this.loading = false
				handlerError(err.response.data)
			})
		},
		
  },
  components: {
    TaskList,
    Loading
  }
}
</script>

<style lang="scss" scoped>
figure {
  width: 100%;
  position: relative;
  overflow: hidden;  //需要触发BFC消除margin折叠的问题
}
.placeholder:after {
  content: '';
  display: block;
  margin-top: 38%; //margin 百分比相对父元素宽度计算
} 
img {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
