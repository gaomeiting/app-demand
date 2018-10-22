<template>
<div>
<task-item @goTaskDetail="goTaskDetail"></task-item>
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
    }
  },
  components: {
    TaskItem
  }
}
</script>

<style lang="scss" scoped>
</style>
