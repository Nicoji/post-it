import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postitList: []
  },
  mutations: {

    GET_VALUES(state) {
      fetch('http://nicolasmaillet.ddns.net:3000/')
        .then(reponse => reponse.json())
        .then(data => {
          state.postitList = [];
          for(let i = 0; i < data.length; i++) {
            state.postitList.push(data[i]);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }, 

    CREATE_POSTIT() {
      let value = {
        title: 'New liste', 
        content: ['+ Add note'], 
      }

      value = JSON.stringify(value);
      
      fetch('http://nicolasmaillet.ddns.net:3000/', 
        {
          method: 'POST', 
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: value
        }
      )
        .then(() => {
          this.commit('GET_VALUES');
        })
        .catch((error) => {
          console.log(error);
        })
    },

    ADD_POSTIT(state, id) {
      fetch('http://nicolasmaillet.ddns.net:3000/note/'+id)
        .then(response => response.json())
        .then(data => {

          data.content.push('+ Add note');
          let json = JSON.stringify(data);
       
          fetch('http://nicolasmaillet.ddns.net:3000/note/' + id, 
            {
              method: 'PUT', 
              headers: {'Content-Type': 'application/json;charset=utf-8'},
              body: json
            }
          )
            .then(() => {
              this.commit('GET_VALUES');
            }) 
            .catch((error) => {
              console.log(error);
            })
        })
        .catch((error) => {
          console.log(error);
        })
    },
    UPDATE(state, playload) {

      fetch('http://nicolasmaillet.ddns.net:3000/note/'+playload.id)
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
              data.content[playload.index] = newValue.value;
              break;
            case 'titleDialog':
              newValue = document.querySelector('#h2_'+playload.id);
              data.title = newValue.value;
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
          }
         
          var noteJson = JSON.stringify(data);
          
          fetch('http://nicolasmaillet.ddns.net:3000/note/' + playload.id, 
            {
              method: 'PUT', 
              headers: {'Content-Type': 'application/json'},
              body: noteJson
            }
          )
          .then(() => {
            this.commit('GET_VALUES');
          }) 
          .catch((error) => {
            console.log(error);
          })
        })
    }, 

    DELETE(state, playload) {
      let confirmation = confirm('Are you you want to delete the postit \'' + playload.name + '\' ?');

      if(confirmation) {
        fetch('http://nicolasmaillet.ddns.net:3000/note/' + playload.id, 
          {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json;charset=utf-8'}
          }
        )
        .then(() => {
          this.commit('GET_VALUES');
        }) 
        .catch((error) => {
          console.log(error);
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
