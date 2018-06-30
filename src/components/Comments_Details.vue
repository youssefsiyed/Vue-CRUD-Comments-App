<template>
  <div class="comments_details">
    <h1 class="display-4 mx-auto text-center">{{ msg }}</h1>
    <br>
    <div class="container-fluid">
      <div class="card bg-light mb-3 text-center">
  <div class="card-header">Comments Details</div>
  <div class="card-body">
    <h4 class="card-title">{{comments.name | capitalize}}</h4>
    <p class="card-text">{{comments.email}}</p>
    <p class="card-text">{{comments.body}}</p>
  </div>
    <div class="card-footer text-muted">
    <router-link class="btn btn-success btn-block" to='/comments'>Go Back</router-link>
  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Comments_details',
  data () {
    return {
      msg: ' Comments Details',
      comments : {}
    }
  },
  methods : {
    getComments(id){
      this.$http.get('https://jsonplaceholder.typicode.com/comments/'+id)
      .then(function(response){
          this.comments =response.data;
      });
    }
  },
  created : function(){
    this.getComments(this.$route.params.id);
  }
}
</script>

<style scoped>
</style>
