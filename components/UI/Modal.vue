<template>
  <div v-if="showModal" class="bg-modal fixed top-0 left-0 z-50 h-screen w-full flex justify-center items-center bg-gray-100/50">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: ['show'],
    computed: {
        showModal(){
            return this.show;
        }
    }
}
</script>

<style>

</style>