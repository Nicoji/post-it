<script>

// import Note from '@/components/Note'
import { mapState } from 'vuex'

export default {
    name: 'PostitList',
    methods: {
        
        textAreaResize: function(block, textArea) {
            const element = document.querySelector('#' + block + ' #' + textArea);
            element.style.height = '1px';
            element.style.height = (10 + element.scrollHeight) + 'px';
        }, 
    },
    // components: {
    //     Note
    // }, 
    mounted() {
        this.$store.commit('GET_VALUES');
        // setInterval(() => {
        //     this.$store.commit('GET_VALUES');
        // }, 1000);
    }, 

    computed: {
        ...mapState([
            'notes'
        ])
    }
        
}

</script>

<template>

    <div class="add align-self-start mt-3" v-on:click="$store.commit('CREATE_POSTIT')">
                <div class="add-text">+ Add new note</div>
            </div>
        <!-- <div class="p-3 d-flex list-note">
            <div class="d-flex" v-for="(note, index) in notes" :key="index">
                
                <div class="note-block" :id="'note-block' + note.id" :style="'background-color:' + note.backcolor">
                    <div class="d-flex justify-content-between main">
                        <h2><input :id="'h2-'+note.id" v-on:change="$store.commit('UPDATE', {id: note.id, element: 'title'})" :value="note.title"></h2>
                        <router-link :to="'note/' + note.id">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </router-link>
                    </div>  
                    <div v-for="(entry, index) in note.content" :key="index">
                        <textarea class="note" :id="'textArea'+index" :value="entry" v-on:change="$store.commit('UPDATE', {id: note.id, element: 'note', index: index})" v-on:keyup="textAreaResize('note-block' + note.id, 'textArea' + index)"></textarea>
                    </div>
                    <button v-on:click="$store.commit('ADD', note.id)" class="btn btn-primary">Add a new Entry</button>
                </div>
                
                <div v-if="$route.params.id == note.id">
                    
                    <Note 
                        :id="note.id"
                        :title="note.title"
                        :content="note.content"
                        @update-title="updateTitle"
                        @update="update"
                        @text-area-resize="textAreaResize"

                    />
                </div> 
            </div>
            <div class="add align-self-start mt-3" v-on:click="$store.commit('CREATE')">
                <div class="add-text">+ Add new note</div>
            </div>
        </div> -->
</template>



<!-- <style>
    .list-note {
        overflow-x: scroll;
    }
    .note-block {
        width: 300px;
        border: 1px solid #818181;
        margin: 10px;
        border-radius: 10px;
        padding: 10px;
        opacity: 80%;
    }
    .note {
        margin: 10px 0px;
        border: 1px solid #818181;
        border-radius: 10px;
        padding: 5px;
        resize: none;
        overflow: hidden;
    }
    .add {
        cursor: pointer;
        border: 2px dotted #818181;
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

</style> -->