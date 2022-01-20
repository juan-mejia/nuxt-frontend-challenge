<template>
  <div class="min-h-screen flex flex-col items-center">
    <h2 class="w-full max-w-md mb-5 text-left text-2xl md:text-3xl font-extrabold text-primary-700">New Testimonial</h2>
    <TestimonyForm @formHandler="addUser" :testimony="false" :errors="errors" />
  </div>
</template>

<script>
import TestimonyForm from '../../components/Testimonials/TestimonyForm.vue'
export default {
  transition: 'faderight',
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
      this.errors = [];
      let formBody = [];
      for (let property in form) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(form[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      this.$axios.$post('/api/users/add', formBody, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          this.$store.dispatch('users/fetchUsers');
          this.$router.push('/testimonials');
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