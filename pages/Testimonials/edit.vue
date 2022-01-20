<template>
  <div class="min-h-screen flex flex-col items-center">
    <h2 class="w-full max-w-md mb-5 text-left text-2xl md:text-3xl font-extrabold text-primary-700">Edit Testimony</h2>
    <TestimonyForm @formHandler="editUser" :testimony="testimony" :errors="errors" />
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
        errors: [],
    }
  },
  methods: {
    async editUser(form){
        await this.deleteUser();
        await this.addUser(form);
    },
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
    },
    async deleteUser(){
          this.feedback = ""
          await this.$axios.$delete(`/api/users/delete/${this.testimony.id}`)
            .then(response => {
                this.$store.dispatch('users/fetchUsers');
                this.removeTestimonyIdQuery();
            })
            .catch(error => {
                this.feedback = "Hubo un error al hacer la solicitud"
            })
      },
  },
  computed: {
      testimony: function(){
        if(this.$route.params.testimony){
            console.log(this.$route.params.testimony)
            return this.$route.params.testimony;
        } else {
            this.$router.push('/testimonials');
        }
      }
  }
}
</script>

<style>

</style>