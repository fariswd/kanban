<template lang="html">
  <!-- modal -->
  <div id="detail" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Task</h4>
        </div>
        <div class="modal-body">
          {{ details }}
          {{ origin }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Add Task</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['details', 'origin']
}
</script>

<style lang="css">
</style>
