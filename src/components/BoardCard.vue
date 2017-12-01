<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading title-header">{{ data.title }}</div>
    <div class="panel-body">
      <p>Point: {{ data.point }}</p>
      <p>Assigned to: {{ data.assign }}</p>
    </div>
    <div class="panel-footer">
      <button type="button" name="button">Show Detail</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css" scope>
.title-header {
  font-weight: bold;
}
</style>
