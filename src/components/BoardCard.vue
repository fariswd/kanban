<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading title-header">{{ data.title }}</div>
    <div class="panel-body">
      <p>Point: {{ data.point }}</p>
      <p>Assigned to: {{ data.assign }}</p>
    </div>
    <div class="panel-footer">
      <button data-toggle="modal" data-target="#detail" type="button" name="button">Show Detail</button>
      <details-data-modal :details="data" :origin="origin" />
    </div>
  </div>
</template>

<script>
import DetailsDataModal from '@/components/DetailsDataModal'
export default {
  props: ['data', 'origin'],
  methods: {
    showDetails (position) {
      console.log(position)
    }
  },
  components: {
    DetailsDataModal
  }
}
</script>

<style lang="css" scope>
.title-header {
  font-weight: bold;
}
</style>
