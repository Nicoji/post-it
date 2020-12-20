<template>
    <div class="zoom-sign" v-on:click="zoom()">
        <svg width="2em" height="2em" viewBox="0 0 16 16" id="zoom-in" class="hide" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
            <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <svg width="2em" height="2em" viewBox="0 0 16 16" id="zoom-out" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
            <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Zoom',
    methods: {
        zoom: function() {

            const zoomSign = document.querySelector('.zoom-sign');
            const zoomIn = document.querySelector('#zoom-in');
            const zoomOut = document.querySelector('#zoom-out');

            if(zoomIn.classList.contains('hide')) {
                document.body.style.zoom = "50%";
                zoomOut.classList.add('hide');
                zoomIn.classList.remove('hide');
                zoomSign.style.height = "120px";
                zoomSign.style.width = "120px";
                zoomSign.style.padding = "30px";
                zoomSign.style.bottom = "40px";
                zoomSign.style.right = "40px";
                zoomIn.setAttribute('width', '4em');
                zoomIn.setAttribute('height', '4em');

            } else {
                document.body.style.zoom = "100%";
                zoomIn.classList.add('hide');
                zoomOut.classList.remove('hide');
                zoomSign.removeAttribute('style');
            }
        }
    }
}
console.log(window.navigator); // Adaptez le zoom en fonction des navigateurs !
</script>

<style>
    .zoom-sign {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px;
        border-radius: 50%;
        background-color: rgb(0, 0, 0);
        cursor: pointer;
        height: 60px;
        width: 60px;
        z-index: 998;
    }
    .hide {
        display: none;
    }
</style>