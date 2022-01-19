<template>
    <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(testimony, index) in testimonials" :key="index">
            <TestimonyItem :testimony="testimony" />
        </div>
    </div>
</template>

<script>
import TestimonyItem from './TestimonyItem.vue'
export default {
    props: ['testimonials'],
    components: {
        TestimonyItem
    }
}
</script>

<style>

</style>