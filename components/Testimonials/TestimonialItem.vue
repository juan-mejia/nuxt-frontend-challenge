<template>
  <div class="group h-24 w-auto py-3 px-5 flex jusutify-center items-center bg-white hover:bg-primary-700 cursor-pointer rounded-md shadow">
      <div class="mr-3">
          <div class="h-16 w-16 rounded-full overflow-hidden shadow">
              <img
                class="group-hover:hidden"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg" alt="">
              <img 
                class="hidden group-hover:block"
                src="https://cdn0.iconfinder.com/data/icons/education-22/48/quote-512.png" alt="">
          </div>
      </div>
      <div class="w-full">
          <span class="font-bold text-primary-700 group-hover:text-white">Nombre</span>
          <p class="text-sm text-gray-600 group-hover:text-white">Profesion</p>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
        }
    }
}
</script>

<style>
</style>