<template>
  <div class="testimonials-page min-h-screen">
      <TestimonialsHeader />
      <TestimonyList :testimonials="testimonials" />
      <TestimonyDetailModal />
  </div>
</template>

<script>
import TestimonialsHeader from '../../components/Testimonials/TestimonialsHeader.vue'
import TestimonyList from '../../components/Testimonials/TestimonyList.vue'
import TestimonyDetailModal from '../../components/Testimonials/TestimonyDetailModal.vue'
export default {
    transition: 'fadeleft',
    components: {
        TestimonyDetailModal,
        TestimonialsHeader,
        TestimonyList,
    },
    computed: {
        testimonials: function(){
            return this.$store.state.users.users
        }
    }
}
</script>

<style>
</style>