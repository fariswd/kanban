import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

Firebase.initializeApp({
  apiKey: 'AIzaSyDIrLlhaZTiO46oUiyVuyNX12klvf_CW7c',
  authDomain: 'vuevire.firebaseapp.com',
  databaseURL: 'https://vuevire.firebaseio.com',
  projectId: 'vuevire',
  storageBucket: 'vuevire.appspot.com',
  messagingSenderId: '362900463199'
})

export default Firebase
