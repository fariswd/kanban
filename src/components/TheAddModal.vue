<template lang="html">
  <!-- modal -->
  <div id="add" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Task</h4>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="control-label" for="title">Title</label>
            <input class="form-control" id="title" type="text" placeholder="Task Title">
          </div>
          <div class="form-group">
            <label class="control-label" for="description">Description</label>
            <textarea rows="2" class="form-control" id="description" type="text" placeholder="Task Description"></textarea>
          </div>
          <div class="form-group">
            <label class="control-label" for="point">Point</label>
            <input class="form-control" id="point" type="number" placeholder="Point">
          </div>
          <div class="form-group">
            <label class="control-label" for="assign">Assign to</label>
            <input class="form-control" id="assign" type="text" placeholder="Assign to">
          </div>
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
}
</script>

<style lang="css">
</style>
