<template>
<div>
<task-item @goTaskDetail="goTaskDetail"></task-item>

<figure @click="goDemand">
  <img src="/publicImages/banner.jpg">
</figure>
</div>
</template>

<script>
import TaskItem from 'components/task-item/task-item';
export default {
  methods: {
    goTaskDetail() {
      this.$router.push({
  				path: `/index/123`
  		})
    },
    goDemand() {
      this.$router.push('/demands/fast')
    }
  },
  components: {
    TaskItem
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
