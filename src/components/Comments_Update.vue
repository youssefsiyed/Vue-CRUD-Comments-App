<template>
  <div class="Comments_Update">
    <h1 class="display-4 mx-auto text-center">{{ msg }}</h1>
    <br>
    <div class="container-fluid">
    <router-link class="btn btn-dark btn-block" to='/comments'>Go Back</router-link>
    </div>
    <br>
    <div class="container-fluid">
      <div class="card mb-3 text-center">
  <div class="card-header">Comments Information</div>
  <div class="card-body">
    <div class="card-text">
      <form v-on:submit="updateComments($event)">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Name" v-model="comment.name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Email" v-model="comment.email">
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="Body" v-model="comment.body"></textarea>
      </div>
      <button type="submit" class="btn btn-secondary btn-block">Save</button>
      </form>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Comments_Update',
  data () {
    return {
      msg: 'Update',
      comment :{}
    }
  },
  methods : {
    UpdateComments(id){
      this.$http.get('https://jsonplaceholder.typicode.com/comments/'+id)
      .then(function(responce){
        this.comment=responce.data;
      });
    },
    updateComments(e){
      let newComments ={
        name:this.comment.name,
        email:this.comment.email,
        body:this.comment.body
      }
      this.$http.put('https://jsonplaceholder.typicode.com/comments/'+this.$route.params.id,newComments)
      .then(function(responce){
        this.$toast.bottom('Comments Update Successfully!!');  
        this.$router.push({path:'/comments'});    
      });
      e.preventDefault();
    }
  },
  created :function(){
    this.UpdateComments(this.$route.params.id);
  }
}
</script>

<style scoped>
</style>
