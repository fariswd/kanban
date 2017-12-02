import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import Firebase from '../firebase/index.js'

const db = Firebase.database()

// const http = axios.create({
//   baseURL: 'http://localhost:3000'
// })

Vue.use(Vuex)

const state = {
  articles: [],
  backLog: [],
  toDo: [],
  doing: [],
  done: []
}

const mutations = {
  setBacklog (state, payload) {
    state.backLog = payload
  }
}

const actions = {
  // db.ref('/qwes')
  // .set({
  //   rty: '123'
  // })
  // db.ref('/qwe')
  // .remove()
  getAll ({ commit }) {
    db.ref('/')
    .on('value', function (snapshot) {
      let backLog = Object.values(snapshot.val().backLog)
      commit('setBacklog', backLog)
    })
  },
  submitTodo ({ commit }, newBackLog) {
    var newKey = db.ref('/backLog').push().key
    console.log(newKey)
    db.ref('/backLog')
    .push()
    .set({
      id: newKey,
      title: newBackLog.title,
      description: newBackLog.description,
      point: newBackLog.point,
      assign: newBackLog.assign,
      status: newBackLog.status
    })
  },
  toToDo ({ commit }, newTodo) {
    console.log(newTodo.id)
    console.log('-----------', state.backLog[0].id)
    console.log('-----------', state.backLog[1].id)
    let pos = state.backLog.findIndex(function (e) {
      console.log(e.id)
      return e.id == newTodo.id
    })
    console.log(pos)
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
