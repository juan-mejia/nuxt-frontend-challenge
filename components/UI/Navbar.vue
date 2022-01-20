<template>
  <nav class="fixed w-full z-50">
      <transition name="faderight">
          <nuxt-link v-if="showBackButton" to="/testimonials" class="absolute block z-10 top-4 left-5">
                <img src="~assets/icons/left-arrow.png" class="h-6" alt="">
            </nuxt-link>
      </transition>
      <div 
        class="navbar flex justify-center items-center bg-transparent px-6 py-2 lg:py-1 relative transition">
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
            showBackButton: false
        }
    },
    created(){
        if(this.$route.path != '/testimonials'){
            this.showBackButton = true;
        } else {
            this.showBackButton = false;
        }
    },
    mounted(){
        let navbar = document.querySelector('nav .navbar');
        window.onscroll = function() {
            if(window.pageYOffset > 60){
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('bg-white');
            } else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('bg-transparent');
            }
        }
    },
    watch: {
        '$route'(){
            if(this.$route.path != '/testimonials'){
                this.showBackButton = true;
            } else {
                this.showBackButton = false;
            }
        }
    }
}  
</script>

<style>

</style>