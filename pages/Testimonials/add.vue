<template>
  <div class="min-h-screen flex flex-col items-center">
    <!-- <TestimonyAddForm /> -->
    
    <form @submit.prevent="addUser" class="w-full max-w-md p-6 mb-5 flex flex-col justify-center bg-white rounded-md shadow">
      <TestimonyItem :testimony="testimony" class="pointer-events-none" />
      <!-- <div class="my-5">
          <div class="h-24 w-24 mx-auto rounded-full shadow overflow-hidden border-4 border-primary-700">
              <img
                  class="group-hover:hidden"
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg" alt="">
          </div>
      </div> -->
      <div class="my-5 flex flex-col gap-5">
        <BaseInputText id="url-avatar" label="URL Avatar" v-model="testimony.avatar" placeholder="Your avatar url" />
        <BaseInputText id="name" label="Name" v-model="testimony.name" placeholder="Your name"/>
        <BaseInputText id="last-name" label="Last Name" v-model="testimony.last_name" placeholder="Your last name"/>
        <BaseInputText id="profession" label="Profession" v-model="testimony.profession" placeholder="Your profesion" />
        <BaseTextarea id="testimony" label="Testimony" v-model="testimony.testimony" placeholder="Write your testimony"/>
      </div>
      <p v-if="feedback" class="text-sm text-center text-red-600">{{feedback}}</p>
      <div class="mt-5 flex flex-col sm:flex-row-reverse sm:justify-between gap-5">
        <BaseButton type="submit" text="Add" />
        <BaseButton text="Cancel" danger="true" @click.native="$router.go(-1)" />
      </div>
    </form>
  </div>
</template>

<script>
import TestimonyItem from '../../components/Testimonials/TestimonyItem.vue'
import BaseButton from '../../components/UI/BaseButton.vue'
import BaseInputText from '../../components/UI/BaseInputText.vue'
import BaseTextarea from '../../components/UI/BaseTextarea.vue'
import TestimonyAddForm from '../../components/Testimonials/TestimonyAddForm.vue'
export default {
  components: {
    BaseInputText,
    BaseTextarea,
    BaseButton,
    TestimonyAddForm,
    TestimonyItem
  },
  data(){
    return {
        testimony: {
            avatar: '',
            name: '',
            last_name: '',
            profession: '',
            testimony: ''
        },
        feedback: ''
    }
  },
  methods: {
    addUser(){
      this.feedback = '';
      let formBody = [];
      for (let property in this.testimony) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(this.testimony[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      // let formBody = new URLSearchParams(JSON.stringify(this.testimony));
      this.$axios.$post('https://api-challenge-talently.vercel.app/api/users/add', formBody, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          this.$store.dispatch('users/fetchUsers');
          this.$router.push('testimonials');
          console.log(response);
        })
        .catch(error => {
          this.feedback = "Hubo un error al hacer la solictud"
        })
    }
  }
}
</script>

<style>

</style>