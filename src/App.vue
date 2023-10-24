<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import arr from '@/data/00java.js'

export default {
  name: 'App',
  mounted() {
      if (!localStorage.getItem('arr')) {
          localStorage.setItem('arr', JSON.stringify(arr))
      }
  }
}
</script>
