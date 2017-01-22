<template>
    <div>
        <slot name="red"></slot>
        <p>{{counter}}</p>
        <button @click="counterNum">COunter</button>
    </div>
</template>

<script>

    export default{
        data:function(){
         return{
            counter:0

         };
        },
        methods:{
           counterNum(){
            this.counter++;
           }
        }
    }
</script>
<style scoped>
        div{
            border:1px solid red;
            width:700px;
            margin:0 auto;
            background-color:red;
            color:black;

        }
</style>
