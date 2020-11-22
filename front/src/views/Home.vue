<template>
  <div class="home">
    <PostitList/>
  </div>
</template>

<script>
import PostitList from '@/components/PostitList.vue'

export default {
  name: 'Home',
  components: {
    PostitList
  }
}
</script>

<style>
  body {
    background-color: rgb(58, 72, 131);
  }
</style>