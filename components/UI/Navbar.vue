<template>
  <nav class="fixed w-full">
      <div 
        class="flex justify-center items-center bg-transparent px-6 py-2 lg:py-1 relative">
          <Talently />
      </div>
  </nav>
</template>

<script>
import Talently from '../Logos/Talently.vue'
export default {
    components: {
        Talently
    },
    data(){
        return {
        }
    },
    mounted(){
        let navbar = document.querySelector('nav div');
        window.onscroll = function() {
            if(window.pageYOffset > 60){
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('bg-white');
            } else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('bg-transparent');
            }
        }
    }
}  
</script>

<style>

</style>