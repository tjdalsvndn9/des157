<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <status-server :BitchTitle='title'  :BitchSubTitle='subtitle' @titleChangedAll="title=$event"></status-server>
        <button @click="ChangeIt">Change Status</button>
      </div>
      <div class="col-md-6">
        <home-server :BitchServer='server' :BitchStatus='status' @StatusChanged='status=$event'></home-server>
      </div>
      <div class="col-md-6">
       <server-status :BitchServer='server'  @serverisChanged="server=$event" :BitchStatus='status'></server-status>
      </div>
      <div class="col-md-12">
        <hr/>
        <footer-server></footer-server>

      </div>
    </div>
  </div>
</template>

<script>
import status from './status.vue';
import severStatus from './ServerStatus.vue';
import footer from './footer.vue';
import Home from './Home.vue';
export default {
  data: function(){
    return {
      title:"Server Status",
      server:'Server',
       status:'critical',
       subtitle:'Fuck Yes'
    }
  },
  methods:{
    ChangeIt(){
      this.title = "Changed Title";
      this.subtitle = "Fuck NO";
    }
  },
  components:{
    'server-status':severStatus,
    'footer-server':footer,
    'home-server':Home,
    'status-server':status
  }
}
</script>

<style scoped>
h1{
font-size:40px;
}
</style>
