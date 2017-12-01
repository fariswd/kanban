<template lang="html">
  <div class="col-md-3">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">Done</h3>
      </div>
      <div class="panel-body">
        <board-card v-for="done in dones" :data="done" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'
export default {
  props: ['dones'],
  components: {
    BoardCard
  }
}
</script>

<style lang="css">
</style>
