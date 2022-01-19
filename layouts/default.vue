<template>
    <div>
        <Navbar />
        <div class="app-bg">
            <Nuxt class="pt-20 px-6 mx-auto max-w-6xl" />
        </div>
    </div>
</template>
<script>
import Navbar from '../components/UI/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>
<style >
.app-bg {
    background: linear-gradient(179.84deg,#dbd9ff -82.46%,hsla(0,0%,100%,0) 103.84%);
}
</style>