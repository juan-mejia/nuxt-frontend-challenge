<template>
  <div v-if="show" class="absolute top-0 left-0 z-50 h-screen w-full flex justify-center items-center bg-white/50">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: ['show'],
    computed: {
        showModal(){
            return this.open;
        }
    }
}
</script>

<style>

</style>