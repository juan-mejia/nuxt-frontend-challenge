<template>
  <label :for="id" class="flex flex-col">
        <span 
            class="font-bold text-sm"
            :class="stylesLabel">{{label}}</span>
        <input 
            type="text" 
            class="mt-1 rounded-md"
            :class="stylesInput"
            :id="id" 
            :placeholder="placeholder" 
            :value="value"
            @input="$emit('input', $event.target.value)">
        <p v-if="feedback" class="mt-1 text-sm text-red-600">{{feedback}}</p>
    </label>
</template>

<script>
export default {
    props: ['id', 'label', 'placeholder', 'value'],
    data(){
        return {
            feedback: ''
        }
    },
    computed: {
        stylesInput: function(){
            let classes = ['placeholder-gray-500', 'border-gray-500']
            if(this.feedback){
                classes = ['placeholder-red-600', 'border-red-600']
            }
            return classes;
        },
        stylesLabel: function(){
            let classes = ['text-gray-500']
            if(this.feedback){
                classes = ['text-red-600']
            }
            return classes;
        }
    }
}
</script>

<style>

</style>