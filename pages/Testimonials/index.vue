<template>
  <div class="testimonials-page min-h-screen">
      <TestimonialsHeader />
      <TestimonialList />
      <Modal :show="showModal">
        <div class="relative w-11/12 max-w-sm py-8 px-8 flex flex-col items-center rounded-lg bg-white border-4 border-primary-700 shadow-sm">
            <div class="my-2 absolute -translate-y-24">
                <div class="h-28 w-28 rounded-full shadow overflow-hidden border-4 border-primary-700">
                    <img
                        class="group-hover:hidden"
                        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg" alt="">
                </div>
            </div>
            <div class="my-2 absolute right-3 top-0">
                <div class="h-10 w-10 rounded-full shadow overflow-hidden border-4 border-primary-700">
                    <img
                        class="group-hover:hidden"
                        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg" alt="">
                </div>
            </div>
            <div class="mt-10 text-center">
                <span class="mb-8 text-xl font-bold">Name</span>
                <p class="text text-gray-400">Profession</p>
            </div>
            <div class="mt-5 text-center">
                <!-- <span class="font-bold">Testimony</span> -->
                <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis commodi ad hic maxime ut! Tempora unde asperiores assumenda cumque, error voluptate quibusdam sunt nam! Quasi consectetur enim sapiente eligendi!</p>
            </div>
            <div class="mt-8 grid grid-cols-3 gap-5">
                <img class="h-12" src="~assets/icons/github.svg" alt="">
                <img class="h-12" src="~assets/icons/linkedin.svg" alt="">
                <img class="h-12" src="~assets/icons/twitter.svg" alt="">
            </div>
            <div class="mt-8 flex flex-col sm:flex-row-reverse gap-5">
                <BaseButton text="Cerrar" />
                <BaseButton text="Eliminar" danger="true" />
            </div>
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from '../../components/UI/Modal.vue'
import BaseButton from '../../components/UI/BaseButton.vue'
import TestimonialsHeader from '../../components/Testimonials/TestimonialsHeader.vue'
import TestimonialList from '../../components/Testimonials/TestimonialList.vue'
export default {
    components: {
        Modal,
        TestimonialsHeader,
        TestimonialList,
        BaseButton
    },
    mounted(){
        console.log(this.$route.query.testimonial_id)
    },
    data(){
        return {
            testimonial: ''
        }
    },
    computed: {
        showModal: function(){
            let show = false;
            if(this.$route.query.testimonial_id){
                show = true;
            }
            return show;
        }
    }
}
</script>

<style>
</style>