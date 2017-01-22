<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="n in 5">{{BitchServer}} #{{n}}</li>
    </ul>
    <button @click="changeCritical">Change</button>
    <button @click="changeNormal">Change to critical</button>
  </div>
</template>

<script>

  export default{
      props:{
        BitchServer:String,
        BitchStatus:String,

      },
      data:function(){
        return{
          server1:"Server"
        };
      },
      methods:{
        changeCritical(){
          this.BitchStatus = "nomral";
          this.$emit("StatusChanged",this.BitchStatus);

        },
        changeNormal(){
           this.BitchStatus = "critical";
          this.$emit("StatusChanged",this.BitchStatus);
        }
      }
  }
</script>
