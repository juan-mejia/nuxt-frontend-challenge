<template>
  <form @submit.prevent="submitForm" class="w-full max-w-md p-6 mb-5 flex flex-col justify-center bg-white rounded-md shadow">
    <TestimonyItem :testimony="testimony" class="pointer-events-none" />
    <div class="my-5 flex flex-col gap-5">
      <BaseInputText ref="avatar" id="avatar" label="URL Avatar" v-model="testimony.avatar" placeholder="Your avatar URL" />
      <BaseInputText ref="name" id="name" label="Name" v-model="testimony.name" placeholder="Your name"/>
      <BaseInputText ref="last_name" id="last_name" label="Last Name" v-model="testimony.last_name" placeholder="Your last name"/>
      <BaseInputText ref="profession" id="profession" label="Profession" v-model="testimony.profession" placeholder="Your profesion" />
      <BaseInputText id="github Profile" label="Github" v-model="testimony.github" placeholder="Github URL"/>
      <BaseInputText id="linkedin Profile" label="LinkedIn" v-model="testimony.linkedin" placeholder="LinkedIn URL"/>
      <BaseInputText id="twitter Prfile" label="Twitter" v-model="testimony.twitter" placeholder="Twitter URL"/>
      <BaseTextarea ref="testimony" id="testimony" label="Testimony" v-model="testimony.testimony" placeholder="Write your testimony"/>
    </div>
    <p v-if="feedback" class="text-sm text-center text-red-600">{{feedback}}</p>
    <div class="mt-5 flex flex-col sm:flex-row-reverse sm:justify-between gap-5">
      <BaseButton type="submit" text="Add" />
      <BaseButton text="Cancel" danger="true" @click.native="$router.push('/testimonials')" />
    </div>
  </form>
</template>

<script>
import TestimonyItem from '../../components/Testimonials/TestimonyItem.vue'
import BaseButton from '../../components/UI/BaseButton.vue'
import BaseInputText from '../../components/UI/BaseInputText.vue'
import BaseTextarea from '../../components/UI/BaseTextarea.vue'
export default {
  props: ['errors'],
  components: {
    BaseInputText,
    BaseTextarea,
    BaseButton,
    TestimonyItem
  },
  data(){
    return {
      testimony: {
          avatar: '',
          name: '',
          last_name: '',
          profession: '',
          testimony: '',
          github: '',
          linkedin: '',
          twitter: ''
      },
      feedback: ''
    }
  },
  methods: {
    submitForm(){
      this.validate();
      if(!this.feedback){
        this.$emit('formHandler', this.testimony);
      }
    },
    validate(){
      let feedback = '';
      if(this.testimony.avatar == '' || this.testimony.name == '' || this.testimony.last_name == '' || this.testimony.profession == '' || this.testimony.testimony == ''){
        feedback = 'Verify the information'
      } else if(this.testimony.testimony.length < 20){
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