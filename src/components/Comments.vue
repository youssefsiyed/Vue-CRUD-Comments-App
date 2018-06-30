<template>
  <div class="Comments container">
    <h1 class="display-4 text-center">Comments</h1>
    <button type="button" class="btn btn-outline-success btn-block" data-toggle="modal" data-target="#exampleModal">
      Create New Comments
    </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Comments</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form v-on:submit="addComments($event)" class="mb-3">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter the Name" v-model="comment.name" name="name" required>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Enter the Email" v-model="comment.email" name="email" required>
      </div>
      <!-- <div class="form-group">
        <textarea class="form-control" placeholder="Body" v-model="comment.body"></textarea>
      </div> -->
      <vue-editor v-model="comment.body"></vue-editor>
      <br>
      <button type="submit" class="btn btn-success btn-block">Save</button>
    </form>
      </div>
    </div>
  </div>
</div>
     
  <div class="form-group">
      <br>
      <input type="text" class="form-control" placeholder="Enter The Search Key" v-model="search">
    </div>
    <br>
  <div class="container text-center">
  <DoubleBounce v-if="!isLoading"></DoubleBounce>
  </div>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Body</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(c, index) in filterBy(comments, search)" v-bind:key="c.id">
      <th scope="row">{{c.id}}</th>
      <td>{{c.name}}</td>
      <td><span class="badge badge-success">{{c.email}}</span></td>
      <td>{{c.body}}</td>
      <td><button class="btn btn-danger" @click="deleteComments(c.id,index)">Delete</button></td>
      <td><router-link class="btn btn-warning" v-bind:to="'/comments_update/'+c.id">Edit</router-link></td>      
      <td><router-link class="btn btn-primary" v-bind:to="'/comments-details/'+c.id">View</router-link></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { DoubleBounce } from 'vue-loading-spinner';
import { VueEditor } from 'vue2-editor';

export default {
  name: 'Comments',
  components: {
      DoubleBounce,VueEditor
    },
  data () {
    return {
      search:'',
      isLoading :false,
      comments: [],
      comment : {}
    }
  },
   created() {
    this.fetchComments();
  },
  methods : {
    fetchComments(){
      this.$http.get('https://jsonplaceholder.typicode.com/comments')
      .then(function(response){
         this.comments=response.data;
         this.commentsName=response.data.name;
         this.isLoading=true;
      });
    },
    deleteComments(id,index){
      if (confirm('Are You Sure?')) {
      this.$http.delete('https://jsonplaceholder.typicode.com/comments/'+id)
      .then(function(response){
        this.comments.splice(index,1);
        this.$toast.bottom('Comments Deleted!!');
      })
    }
    },
    addComments(e){
      let Newcomment ={
        // id :101,
        name :this.comment.name,
        email :this.comment.email,
        body:this.comment.body,
      }
        if(this.comment.name =="" && this.comment.email ==""){
          this.$swal({ type: 'error', title: 'Plz Enter the Name and Email...', text: 'Something went wrong!'});
        }else
      this.$http.post('https://jsonplaceholder.typicode.com/comments',Newcomment)
      .then(function(response){
         this.comments.unshift(Newcomment);
         this.$swal('Good job!','Comments Add Successfully!','success')
        this.$toast.bottom('Comments Add Successful!!');         
      });
        this.comment.name='';
        this.comment.email='';
        this.comment.body='';
      e.preventDefault();
    } 
  }
}
</script>

<style scoped>
</style>
