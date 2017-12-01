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
  },
  saveTodo (state, payload) {
    state.backLog.push(payload)
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
  submitTodo ({ commit }, newTodo) {
    db.ref('/backLog')
    .push()
    .set({
      title: newTodo.title,
      description: newTodo.description,
      point: newTodo.point,
      assign: newTodo.assign
    })
    commit('saveTodo', newTodo)
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
