<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">

        </app-quote>
    </div>
</template>
<script>
<!--import Quote from './Quote2.vue';-->
    export default{
        <!--props:['quotes'],-->
        <!--components:{-->
            <!--'app-quote':Quote-->
        <!--},-->


    }
</script>
<style scoped>

</style>
