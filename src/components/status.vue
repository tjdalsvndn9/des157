<template>
  <div>
    <h1>{{BitchTitle}}</h1>
    <h3>{{BitchSubTitle}}</h3>
    <button @click="resetTitle">Reset Title</button>
  </div>
</template>

<script>

  export default{
   props:{
        BitchTitle:String,
         BitchSubTitle:String
   },
   methods:{
      resetTitle(){

        this.BitchTitle ="Title";
     this.$emit('titleChangedAll',this.BitchTitle);
      }
   }
  }
</script>
