<template>
  <div class="container">
    <div class="row">
            <app-login></app-login>
        </div>
    </div>
  </div>
</template>

<script>

import Home from './components/homepage.vue';
export default {
    components:{
        'app-login':Home
    }
}
</script>

<style scoped>
</style>
