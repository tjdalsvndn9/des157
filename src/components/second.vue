<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>{{saying}}</h1>
                <h3>{{detail}}</h3>
                <p>Hername is {{swtichName()}}</p>
                <p>{{userAge}}</p>
                <button @click="resetName">Reset Name</button>
                <button @click="editAge">Edit Age</button>
            </div>
        </div>
    </div>
</template>

<script>
import {eventBus} from '../main';
  export default{
    props:{
        Sexname: {
            type:String
        },
        userAge:Number
    },
    data: function(){
      return {
        saying:'You may edit the User here',
        detail:'Edit me!'
      }
    },
    methods:{
      changeStatus(){
        this.status = 'Normal'
      },
      swtichName(){
        return this.Sexname.split('').reverse().join("");
      },
      resetName(){
        this.Sexname = "Yonna";
        this.$emit('nameWasReset',this.Sexname);
      },
      editAge(){
      this.userAge = 30;
      this.$emit('userAgeChanged',this.userAge);

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
    background-color:green;

    text-align:center;
    }

</style>
