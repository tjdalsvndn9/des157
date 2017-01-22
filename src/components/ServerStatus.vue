<template>
  <div>
    <p>Server Status:{{BitchStatus}}</p>
    <button @click='changeStatus'>Change</button>
    <button @click="ChangeStatus2">Server is back</button>
  </div>
</template>

<script>
  export default{
    props:{
      BitchServer:String,
      BitchStatus:String
    },
    data: function(){
      return {

      }
    },
    methods:{
      changeStatus(){
        this.BitchServer = 'server is down';
        this.$emit('serverisChanged',this.BitchServer);

      },
      ChangeStatus2(){
      this.BitchServer='server'
       this.$emit('serverisChanged',this.BitchServer);
      }
    }
  }
</script>
