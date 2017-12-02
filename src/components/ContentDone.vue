<template lang="html">
  <div class="col-md-3">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">Done</h3>
      </div>
      <div class="panel-body">
        <div v-if="dones != ''">
          <board-card v-for="(done, index) in dones" :details="done" :key="index" @detailed-card="getDetails"/>
          <div class="modal-detail">
            <div id="detaildone" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title center">Detail Task: {{ forModalDoneDetails.title }}</h4>
                  </div>
                  <div class="modal-body">
                    <p><span class="strong">Task description:</span> {{ forModalDoneDetails.description }}</p>
                    <p><span class="strong">Points:</span> {{ forModalDoneDetails.point }}</p>
                    <p><span class="strong">Status:</span> {{ forModalDoneDetails.status }}</p>
                  </div>
                  <div class="modal-footer">
                    <div class="wrapper center" v-if="forModalDoneDetails.status == 'done'">
                      <span class="pull-left"><button @click="toDoingFromDone(forModalDoneDetails)" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Doing</button></span>
                      <span class="pull-right"><button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button></span>
                      <!-- <span class="pull-right"><button @click="toDone(forModalDetails)" type="button" class="btn btn-success btn-sm" data-dismiss="modal">Done</button></span> -->
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
  props: ['dones'],
  data: function () {
    return {
      forModalDoneDetails: 'asd'
    }
  },
  methods: {
    ...mapActions([
      'toDoingFromDone'
    ]),
    getDetails: function ({card}) {
      this.forModalDoneDetails = card
      console.log(this.forModalDoneDetails.title)
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
  
}
.strong {
  font-weight: bold;
}
p {
  font-size: 120%;
  padding-bottom: 15px;
}
</style>
