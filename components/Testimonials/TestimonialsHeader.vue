<template>
  <header class="flex justify-between items-center">
      <h2 class="text-2xl md:text-3xl font-extrabold text-primary-700">Testimonials</h2>
      <nuxt-link to="add" 
        class="block py-2 px-10 font-bold  rounded-md" 
        :class="['border-2', 'border-primary-700','text-primary-700','hover:bg-primary-700', 'hover:text-white']"
        append>New</nuxt-link>
  </header>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'

export default {
    components: {
        BaseButton
    }
}
</script>

<style>

</style>