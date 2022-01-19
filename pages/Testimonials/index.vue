<template>
  <div class="testimonials-page min-h-screen">
      <TestimonialsHeader />
      <TestimonyList />
      <TestimonyDetailModal />
  </div>
</template>

<script>
import TestimonialsHeader from '../../components/Testimonials/TestimonialsHeader.vue'
import TestimonyList from '../../components/Testimonials/TestimonyList.vue'
import c from '../../components/Testimonials/TestimonyDetailModal.vue'
export default {
    components: {
        TestimonialDetailModal,
        TestimonialsHeader,
        TestimonyList,
    }
}
</script>

<style>
</style>