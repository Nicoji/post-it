import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postitList: []
  },
  mutations: {
    GET_VALUES(state) {
      fetch('http://localhost:3000/')
        .then(reponse => reponse.json())
        .then(data => {
          console.log(data);
          console.log(state);
        })
    }, 
    CREATE_POSTIT(state) {
      let value = {
        title: 'New liste', 
        content: ['+ Add note'], 
        color: 'blue'
      }
      console.log(state);
      value = JSON.stringify(value);
      fetch('http://localhost:3000/notes', 
        {method: 'POST', 
          body: value, 
          })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    }
  },
  actions: {
  },
  modules: {
  }
})
