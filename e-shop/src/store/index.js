import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    createneworder ({ commit }, pay) {
      const order = {
        item: pay.item,
        buyer: pay.buyer,
        quantity: pay.quantity,
        price: pay.price,
        amount: pay.amount,
      //  address: pay.address,
        city: pay.city
      }

      firebase.database().ref('orders').push(order)
      .then((data) => {
        const key = data.key

        commit('createneworder', {
          ...order,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    } 


  },
  modules: {
  }
})
