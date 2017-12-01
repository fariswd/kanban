<template lang="html">
  <div class="col-md-3">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">To-Do</h3>
      </div>
      <div class="panel-body">
        <board-card />
        <board-card />
      </div>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'
export default {
  components: {
    BoardCard
  }
}
</script>

<style lang="css">
</style>
