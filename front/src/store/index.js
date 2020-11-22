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
          state.postitList = [];
          for(let i = 0; i < data.length; i++) {
            state.postitList.push(data[i]);
          }
          console.log(state.postitList);
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
      fetch('http://localhost:3000/', 
        {method: 'POST', 
          body: value, 
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });

        setTimeout(() => {
          this.commit('GET_VALUES');
        }, 50);
    },
    ADD_POSTIT(state, id) {
      fetch('http://localhost:3000/note/'+id)
        .then(response => response.json())
        .then(data => {

          data.content.push('+ Add note');
          let json = JSON.stringify(data);
        //   let note = data[Object.keys(data)[0]];

        //   data[Object.keys(data)[0]].content.push('+ Add note');

        //   var noteJson = JSON.stringify(note);
          fetch('http://localhost:3000/note/' + id, 
          {method: 'PUT', 
            body: json, 
            headers: {'Content-Type': 'application/json;charset=utf-8'}})
          .then(response => response.json())
          .then(data => {
            console.log(data);
          }) 
        })
        setTimeout(() => {
          this.commit('GET_VALUES');
        }, 50);
    },
    UPDATE(state, playload) {

      fetch('http://localhost:3000/note/'+playload.id)
        .then(res => res.json())
        .then(data => {
    
          let newValue; 

          switch(playload.element) {
            case 'title':
              newValue = document.querySelector('#h2-'+playload.id);
              data.title =  newValue.value;
              break;
            case 'note':
              newValue = document.querySelector('#note-block' + playload.id + ' #textArea'+playload.index);
              console.log(newValue);
              
              console.log(data.content[playload.index]);
              data.content[playload.index] = newValue.value;
              break;
            case 'titleDialog':
              newValue = document.querySelector('#h2_'+playload.id);
              data.title =  newValue.value;
              break;
            case 'noteDialog':
              newValue = document.querySelector('#textAreaDialog'+playload.index);
              data.content[playload.index] = newValue.value;
              break;
            case 'delete': 
              if(data.content.length > 1) {
              data.content.splice(playload.index, 1);
              } else {
                newValue = document.querySelector('#textAreaDialog'+playload.index);
                data.content[playload.index] = '+ Add note';
              }
              break;
          }
         
          var noteJson = JSON.stringify(data);
          
          fetch('http://localhost:3000/note/' + playload.id, 
          {method: 'PUT', 
            body: noteJson, 
            headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(data => {
            console.log(data);
          }) 
        })
          
        setTimeout(() => {
          this.commit('GET_VALUES');
        }, 50);
    }, 
    DELETE(state, playload) {
      let confirmation = confirm('Are you you want to delete the postit \'' + playload.name + '\' ?');

      if(confirmation) {
        fetch('http://localhost:3000/note/' + playload.id, 
        {method: 'DELETE', 
          headers: {'Content-Type': 'application/json;charset=utf-8'}})
        .then(response => response.json())
        .then(data => {
          console.log(data);
        }) 

        setTimeout(() => {
          this.commit('GET_VALUES');
        }, 50);
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
