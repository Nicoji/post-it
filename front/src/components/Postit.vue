<script>

export default {
    name: 'Postit',
    props: {
        id: {
            type: String,
            required: true
        },
        title : 
        {
            type: String, 
            required: true
        }, 
        content: {
            type: Array,
            required: true
        }
    }
        
}
</script>

<template>
    <div id="background">
        <dialog open :id="'dialog'+id">
            <div class="d-flex justify-content-between second">
                <h2><input :id="'h2_'+id" v-on:change="$store.commit('UPDATE', {id: id, element: 'titleDialog'})" :value="title"></h2>
                <router-link to="/">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x-octagon-fill" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </router-link>
            </div>
            <div v-for="(entry, index) in content" :key="index" :id="'note'+index" class="d-flex justify-content-center aBlock">
                <textarea class="note dialogNote mt-3" v-on:change="$store.commit('UPDATE', {id: id, element: 'noteDialog', index: index})" :value="entry" :id="'textAreaDialog'+index" v-on:keyup="$emit('text-area-resize', 'note'+index, 'textAreaDialog'+index)"></textarea>
                <svg v-on:click="$store.commit('UPDATE', {id: id, element: 'delete', index: index})" width="2em" height="2em" viewBox="0 0 16 16" class="align-self-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>

            </div>
            <div class="text-center mt-4">
                <router-link to="/">
                    <button v-on:click="$store.commit('DELETE', {id: id, name: title})" class="btn btn-danger">Remove this note</button>
                </router-link>
            </div>
        </dialog>
    </div>
</template>

<style>
    #background {
        position: fixed;
        top: 0;
     
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 997;
    }
    dialog {
        width: 550px;
        position: absolute;
        z-index: 999;
        border-radius: 10px;
        margin-top: 70px;
        background-color: rgb(80, 80, 80);
        border: 2px solid white;
    }
    .dialogNote {
        padding: 10px;
        margin-right: 10px;
        border-radius: 10px;
        border: 1px solid grey;
    }
    .aBlock {
        padding: 5px;
    }
    .aBlock textarea {
         width: 90%;
    }
    svg {
        cursor: pointer;
    }
</style>