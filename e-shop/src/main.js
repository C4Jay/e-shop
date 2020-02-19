import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import firebase from 'firebase';
import Vuetify from 'vuetify/lib';
import ImageUploader from 'vue-image-upload-resize';

Vue.use(Vuetify)
Vue.use(ImageUploader);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

  created () {



    firebase.initializeApp ({
    apiKey: "AIzaSyBmCdtBBJ8r9KdudVWR3NS1t9jC-09_41k",
    authDomain: "e-shop-polymer.firebaseapp.com",
    databaseURL: "https://e-shop-polymer.firebaseio.com",
    projectId: "e-shop-polymer",
    storageBucket: "e-shop-polymer.appspot.com",
    messagingSenderId: "306117970623",
    appId: "1:306117970623:web:897bf354350bbc7037940a",
    measurementId: "G-EQ5QSQG2F2"
    })

    
    this.$store.dispatch('stocksfetch')
  }

}).$mount('#app')
