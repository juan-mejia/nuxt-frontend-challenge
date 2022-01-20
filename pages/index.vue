<template>
</template>
<script>
export default {
  middleware({ route, redirect, from }) {
    if(route.path == "/"){
     return redirect("/testimonials");
    }

  }
}
</script>
<style>
</style>
