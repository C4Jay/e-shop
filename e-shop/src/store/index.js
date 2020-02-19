import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    stocks: []

  },
  mutations: {

    createnewstock (state, pay) {
      state.stocks.push(pay)
    },

    stockset (state, pay) {
      state.stocks = pay
    }



  },
  actions: {

    createneworder ({ commit }, pay) {
      const order = {
        item: pay.item,
        buyer: pay.buyer,
        quantity: pay.quantity,
        price: pay.price,
        amount: pay.amount,
        address: pay.address,
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
    } ,


    createnewstock ({ commit }, pay) {
      const item = {
        item: pay.item,
        quantity: pay.quantity,
        price: pay.price,
        description: pay.description,
        img: pay.img
      }

      firebase.database().ref('stock').push(item)
      .then((data) => {
        const key = data.key

        commit('createnewstock', {
          ...item,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    
    stocksfetch ({commit}) {
      firebase.database().ref('stock').once('value')
      .then((data) => {
          const stock = []
          const obj = data.val()
          for(let key in obj) {
              stock.push({
                  id: key,
                  item: obj[key].item,
                  price: obj[key].price,
                  img: obj[key].img,
                  quantity: obj[key].quantity,
                  description: obj[key].description,
              })
          }
          commit('stockset',stock)
      })
      .catch(
          (error) => {
              console.log(error)
          }
      )
  },



  },
  modules: {
  },

  getters: {

    stocks (state) {
      return state.stocks
    }
  }
})
