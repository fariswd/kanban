<template lang="html">
  <div class="col-md-3">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Doing</h3>
      </div>
      <div class="panel-body">
        <board-card v-for="(doing, index) in doings" :data="doing" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'
export default {
  props: ['doings'],
  data: function () {
    return {
      origin: 'doing'
    }
  },
  components: {
    BoardCard
  }
}
</script>

<style lang="css">
</style>
