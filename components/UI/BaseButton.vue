<template>
  <button type="button" 
    class="block py-2 px-10 font-bold  rounded-md"
    :class="buttonStyle">{{text}}</button>
</template>

<script>
export default {
    props: ['text', 'danger'],
    computed: {
      buttonStyle: function(){
        let classes = ['border-2', 'border-primary-700','text-primary-700','hover:bg-primary-700', 'hover:text-white']
        if(this.danger){
          classes = ['text-red-600']
        }
        return classes;
      }
    }
}
</script>

<style>

</style>