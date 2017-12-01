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
  setArticles (state, payload) {
    state.articles = payload
  }
}

const actions = {
  getAllArticles ({ commit }) {
    db.ref('/')
    .on('value', function (snapshot) {
      console.log(snapshot.val())
    })
    // http.get('/articles')
    // .then(({ data }) => {
    //   commit('setArticles', data)
    // })
    // .catch(err => console.log(err))
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
