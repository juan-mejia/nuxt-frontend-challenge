<template>
  <div class="testimonials-page min-h-screen">
      <TestimonialsHeader />
      <TestimonialList />
  </div>
</template>

<script>
import TestimonialsHeader from '../../components/Testimonials/TestimonialsHeader.vue'
import TestimonialList from '../../components/Testimonials/TestimonialList.vue'
export default {
    components: {
        TestimonialsHeader,
        TestimonialList
    }
}
</script>

<style>
</style>