<template>
  <Modal :show="showModal">
    <transition name="fadeup">
    <div v-if="user" class="relative w-11/12 max-w-sm py-8 px-8 flex flex-col items-center rounded-lg bg-white shadow-md border-4 border-primary-700">
        <div class="my-2 absolute -translate-y-24">
            <div class="h-28 w-28 rounded-full shadow overflow-hidden border-4 border-primary-700">
                <img
                    class="group-hover:hidden"
                    :src="user.avatar" alt="">
            </div>
        </div>
        <div class="my-2 absolute right-4 top-1 rounded-full cursor-pointer" style="border-color: rgb(47,195,98)" @click="editUser">
            <div class="h-10 w-10 p-1 rounded-full overflow-hidden">
                <img
                    class="group-hover:hidden"
                    src="~/assets/icons/edit.svg" alt="">
            </div>
        </div>
        <div class="mt-10 text-center">
            <span class="mb-8 text-xl font-bold">{{user.name}}</span>
            <p class="text text-gray-400">{{user.profession}}</p>
        </div>
        <div class="my-2">
            <div class="h-12 w-12 p-1 flex justify-center items-center rounded-full shadow-inner overflow-hidden">
                <img
                    :src="user.company_logo" alt="">
            </div>
        </div>
        <div class="my-5 text-center">
            <!-- <span class="font-bold">Testimony</span> -->
            <p class="text-gray-500">{{user.testimony}}</p>
        </div>
        <div class="my-5 grid grid-cols-3 gap-5">
            <img class="h-10" src="~assets/icons/github.svg" alt="">
            <img class="h-10" src="~assets/icons/linkedin.svg" alt="">
            <img class="h-10" src="~assets/icons/twitter.svg" alt="">
        </div>
        <p v-if="feedback" class="mt-3 mb-5 text-sm text-center text-red-600">{{feedback}}</p>
        <div class="mt-3 flex flex-col sm:flex-row-reverse gap-5">
            <BaseButton text="Cerrar" @click.native="removeTestimonyIdQuery" />
            <BaseButton text="Eliminar" danger="true" @click.native="deleteUser" />
        </div>
    </div>
    </transition>
  </Modal>
</template>

<script>
import Modal from '../UI/Modal.vue'
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: {
    Modal,
    BaseButton
  },
  data(){
      return {
          user: '',
          feedback: ''
      }
  },
  methods: {
      removeTestimonyIdQuery(){
          this.$router.replace({'testimonial_id': null});
          this.user = '';
      },
      loadUser(){
        this.feedback = ""
        let user = this.$store.getters['users/getUserById'](this.$route.query.testimony_id);
        this.$axios.$get(`/api/users/${this.$route.query.testimony_id}`)
            .then(response => {
                this.user =  {
                    ...user,
                    testimony: response.result.testimony
                };
            })
            .catch(error => {
                this.feedback = "Hubo un error al hacer la solicitud"
            })
      },
      deleteUser(){
          this.feedback = "";
          this.$axios.$delete(`/api/users/delete/${this.user.id}`)
            .then(response => {
                this.$store.dispatch('users/fetchUsers');
                this.removeTestimonyIdQuery();
            })
            .catch(error => {
                this.feedback = "Hubo un error al hacer la solicitud"
            })
      },
      editUser(){
          this.$router.push({name: 'testimonials-edit', params: {testimony: this.user}})
      }
  },
  computed: {
      showModal: function(){
          let show = false;
          let user = this.$store.getters['users/getUserById'](this.$route.query.testimony_id);
          if(user){
            this.loadUser();
            show = true;
          }
          return show;
      }
  }
}
</script>

<style>

</style>