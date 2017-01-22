<template>
    <div class="container">
      <div class="row">
          <div class="col-md-12">
              <h1>{{saying}}</h1>
              <h3>{{detail}}</h3>
              <p>Your name is {{fuckName}}</p>
              <p>Your age {{userAge}}</p>
              <button @click="resetName">Reset</button>
          </div>
      </div>
    </div>
</template>

<script>
import {eventBus} from '../main';
  export default{
    props:{
        fuckName:String,
        userAge:Number
    },
    data: function(){
      return {
        saying:'You may view the User Details here',
        detail:'Many Details'
      }
    },
    methods:{
      changeStatus(){
        this.status = 'Normal'
      },
      resetName(){
        this.fuckName="Max";
        this.$emit('resetFuck',this.fuckName);

      }
    }
  }
</script>

<style scoped>
    .container{
    width:500px;
    height:100%;
    border:1px solid black;
    color:black;
    background-color:lightpink;

      text-align:center;
    }

</style>
