<template>
    <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="i in 20" :key="i">
            <TestimonialsItem />
        </div>
    </div>
</template>

<script>
import TestimonialsItem from '../Testimonials/TestimonialItem.vue'
export default {
    components: {
        TestimonialsItem
    }
}
</script>

<style>

</style>