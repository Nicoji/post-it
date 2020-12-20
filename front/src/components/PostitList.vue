<script>

import Postit from '@/components/Postit'
import Zoom from '@/components/Zoom'
import { mapState } from 'vuex'

export default {
    name: 'PostitList',
    data() {
        return {
            loaded: false
        }
    },
    methods: {
        textAreaResize: function(block, textArea) {
            setTimeout(function() {
               
            const element = document.querySelector('#'+block + ' #' + textArea);
            element.style.height = '1px';
            element.style.height = (10 + element.scrollHeight) + 'px';
            }, 500)
            
        }, 
    },
    components: {
        Postit, 
        Zoom
    }, 
    mounted() {
        this.$store.commit('GET_VALUES');
        this.loaded  = true;
    }, 

    computed: {
        ...mapState([
            'postitList'
        ])
    }
        
}

</script>

<template>

        <div class="p-3 d-flex list-note">
            <div class="d-flex" v-for="(note, index) in postitList" :key="index">
                <div>
                    <div class="note-block" :id="'note-block' + note._id">
                        <div class="d-flex justify-content-between main">
                            <h2><input :id="'h2-'+note._id" v-on:change="$store.commit('UPDATE', {id: note._id, element: 'title'})" :value="note.title"></h2>
                            <router-link :to="'note/' + note._id">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </router-link>
                        </div>  
                        <div v-for="(entry, index) in note.content" :key="index">
                            <textarea class="note" :id="'textArea'+index" :value="entry" v-on:change="$store.commit('UPDATE', {id: note._id, element: 'note', index: index})" v-on:keyup="textAreaResize('note-block' + note._id, 'textArea' + index)"></textarea>
                            <span v-if="loaded">
                                {{textAreaResize('note-block' + note._id, 'textArea' + index)}}
                            </span>
                        </div>
                        <button v-on:click="$store.commit('ADD_POSTIT', note._id)" class="btn btn-primary">Add a new Entry</button>
                    </div>
                    
                    <div v-if="$route.params.id == note._id">
                        <Postit 
                            :id="note._id"
                            :title="note.title"
                            :content="note.content"
                        />
                    </div> 
                </div>
            </div>
            <div class="add align-self-start mt-3" v-on:click="$store.commit('CREATE_POSTIT')">
                <!-- <span class="d-none"> {{loaded = false}} </span> -->

                <div class="add-text">+ Add new note</div>
            </div>
            <Zoom/>
        </div>
</template>



<style>
    body {
        overflow-x: scroll;
    }
    .note-block {
        width: 300px;
        border: 1px solid #ffffff;
        background-color: rgb(80, 80, 80);

        margin: 10px;
        border-radius: 10px;
        padding: 10px;
        opacity: 80%;
    }
    .note {
        margin: 10px 0px;
        background-color: rgb(175, 175, 175);
        border-radius: 10px;
        padding: 5px;
        resize: none;
        overflow: hidden;
    }
    .add {
        cursor: pointer;
        border: 2px solid rgb(80, 80, 80);
        background-color: rgb(175, 175, 175);
        font-size: 20px;
    }
    .add-text {
        width: 300px;
    }
    h2 input{
        width: 100%;
        background-color: transparent;
        border: none;
    }
    h2 {
        text-align: left;
    }
    

</style>