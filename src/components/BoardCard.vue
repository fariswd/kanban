<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading title-header">{{ details.title }}</div>
    <div class="panel-body">
      <p>Point: {{ details.point }}</p>
      <p>Assigned to: {{ details.assign }}</p>
    </div>
    <div class="panel-footer">
      <button @click="showDetails" data-toggle="modal" data-target="#detail" type="button" name="button">Show Details</button>
      <!-- <details-data-modal :data="details" /> -->
    </div>
  </div>
</template>

<script>
import DetailsDataModal from '@/components/DetailsDataModal'
export default {
  props: ['details'],
  methods: {
    showDetails () {
      this.$emit('detailed-card', {
        card: this.details
      })
    }
  },
  components: {
    DetailsDataModal
  }
}
</script>

<style lang="css" scoped>
.title-header {
  font-weight: bold;
}
</style>
