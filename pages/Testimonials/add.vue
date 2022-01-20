<template>
  <div class="min-h-screen flex flex-col items-center">
    <TestimonyForm @formHandler="addUser" :errors="errors" />
  </div>
</template>

<script>
import TestimonyForm from '../../components/Testimonials/TestimonyForm.vue'
export default {
  components: {
    TestimonyForm
  },
  data(){
    return {
        errors: []
    }
  },
  methods: {
    addUser(form){
      console.log(form)
      this.errors = [];
      let formBody = [];
      for (let property in form) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(form[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      this.$axios.$post('https://api-challenge-talently.vercel.app/api/users/add', formBody, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          this.$store.dispatch('users/fetchUsers');
          this.$router.push('/testimonials');
          console.log(response);
        })
        .catch(error => {
          if(error.response.data.errors.length > 0){
            this.errors = error.response.data.errors
          } else {
            this.errors.push[{msg:'An error occurred'}]
          }     
        })
    }
  }
}
</script>

<style>

</style>