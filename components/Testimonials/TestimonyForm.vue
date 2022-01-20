<template>
  <form @submit.prevent="submitForm" class="w-full max-w-md p-6 mb-5 flex flex-col justify-center bg-white rounded-md shadow">
    <TestimonyItem :testimony="testimonyForm" class="pointer-events-none" />
    <div class="my-5 flex flex-col gap-5">
      <BaseInputText ref="avatar" id="avatar" label="URL Avatar" v-model="testimonyForm.avatar" placeholder="Your avatar URL" />
      <BaseInputText ref="name" id="name" label="Name" v-model="testimonyForm.name" placeholder="Your name"/>
      <BaseInputText ref="last_name" id="last_name" label="Last Name" v-model="testimonyForm.last_name" placeholder="Your last name"/>
      <BaseInputText ref="profession" id="profession" label="Profession" v-model="testimonyForm.profession" placeholder="Your profesion" />
      <BaseInputText id="github Profile" label="Github" v-model="testimonyForm.github" placeholder="Github URL"/>
      <BaseInputText id="linkedin Profile" label="LinkedIn" v-model="testimonyForm.linkedin" placeholder="LinkedIn URL"/>
      <BaseInputText id="twitter Prfile" label="Twitter" v-model="testimonyForm.twitter" placeholder="Twitter URL"/>
      <BaseTextarea ref="testimony" id="testimony" label="Testimony" v-model="testimonyForm.testimony" placeholder="Write your testimony"/>
    </div>
    <p v-if="feedback" class="text-sm text-center text-red-600">{{feedback}}</p>
    <div class="mt-5 flex flex-col sm:flex-row-reverse sm:justify-between gap-5">
      <BaseButton type="submit" text="Submit" />
      <nuxt-link to="/testimonials" class="mx-auto text-red-600">Cancel</nuxt-link>
    </div>
  </form>
</template>

<script>
import TestimonyItem from '../../components/Testimonials/TestimonyItem.vue'
import BaseButton from '../../components/UI/BaseButton.vue'
import BaseInputText from '../../components/UI/BaseInputText.vue'
import BaseTextarea from '../../components/UI/BaseTextarea.vue'
export default {
  props: ['errors', 'testimony'],
  components: {
    BaseInputText,
    BaseTextarea,
    BaseButton,
    TestimonyItem
  },
  created(){
    if(this.testimony){
      this.testimonyForm = {...this.testimony}
    }
  },
  data(){
    return {
      feedback: '',
      testimonyForm: {
            avatar: '',
            name: '',
            last_name: '',
            profession: '',
            testimony: '',
            github: '',
            linkedin: '',
            twitter: ''
        }
    }
  },
  methods: {
    submitForm(){
      this.validate();
      if(!this.feedback){
        this.$emit('formHandler', this.testimonyForm);
      }
    },
    validate(){
      let feedback = '';
      if(this.testimonyForm.avatar == '' || this.testimonyForm.name == '' || this.testimonyForm.last_name == '' || this.testimonyForm.profession == '' || this.testimonyForm.testimony == ''){
        feedback = 'Verify the information'
      } else if(this.testimonyForm.testimony.length < 20){
        feedback = 'Your testimony is too short'
      }
      this.feedback = feedback;
    }
  },
  watch: {
    'errors': function(values){
      if(values.length == 0){
        for(let ref in this.$refs){
          this.$refs[ref].feedback = '';
        }
      } else {
        for(let value in values){
          this.$refs[values[value].param].feedback = values[value].msg;
        }
      }
    }
  }
}
</script>

<style>

</style>