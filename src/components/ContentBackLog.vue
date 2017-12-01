<template lang="html">
  <div class="col-md-3">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">Back Log</h3>
      </div>
      <div class="panel-body">
        <board-card v-for="(backLog, index) in backLogs" :data="backLog" :key="index" :origin="origin" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'
export default {
  props: ['backLogs'],
  data: function () {
    return {
      origin: 'backLog'
    }
  },
  components: {
    BoardCard
  }
}
</script>

<style lang="css">
</style>
