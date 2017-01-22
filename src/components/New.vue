<template>
    <div>
        <h3>New Quote</h3>
        <button @click="increaseNum()">Click</button>
        <p>{{counter}}</p>
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
        increaseNum(){
        this.counter++;
        }
    },
    deactivated(){
    console.log("deactivated");
    },
    activated(){
        console.log("activated");
    }
    }
</script>
<style>

</style>
