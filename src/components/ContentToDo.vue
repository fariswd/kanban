<template lang="html">
  <div class="col-md-3">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">To-Do</h3>
      </div>
      <div class="panel-body">
        <div v-if="toDos != ''">
          <board-card v-for="(todo, index) in toDos" :details="todo" :key="index" @detailed-card="getDetails"/>
          <div class="modal-detail">
            <div id="detailtodo" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title center">Detail Task: {{ forModalDetails.title }}</h4>
                  </div>
                  <div class="modal-body">
                    <p><span class="strong">Task description:</span> {{ forModalDetails.description }}</p>
                    <p><span class="strong">Points:</span> {{ forModalDetails.point }}</p>
                    <p><span class="strong">Status:</span> {{ forModalDetails.status }}</p>
                  </div>
                  <div class="modal-footer">
                    <div class="wrapper center" v-if="forModalDetails.status == 'toDo'">
                      <span class="pull-left"><button @click="toBackLog(forModalDetails)" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">backLog</button></span>
                      <span><button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button></span>
                      <span class="pull-right"><button @click="toDoing(forModalDetails)" type="button" class="btn btn-success btn-sm" data-dismiss="modal">Doing</button></span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'
export default {
  props: ['toDos'],
  data: function () {
    return {
      forModalDetails: ''
    }
  },
  methods: {
    ...mapActions([
      'toBackLog',
      'toDoing'
    ]),
    getDetails: function ({card}) {
      this.forModalDetails = card
    }
  },
  components: {
    BoardCard
  }
}
</script>

<style lang="css" scoped>
.center {
  text-align: center;
}
.fix-mid {
  padding-left: 10%;
}
.strong {
  font-weight: bold;
}
p {
  font-size: 120%;
  padding-bottom: 15px;
}
</style>
