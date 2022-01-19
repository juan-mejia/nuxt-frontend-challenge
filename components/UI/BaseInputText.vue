<template>
  <label :for="id" class="flex flex-col">
        <span class="font-bold text-gray-500">{{label}}</span>
        <input 
            type="text" 
            class="mt-1 rounded placeholder-gray-500 border-gray-500"
            :id="id" 
            :placeholder="placeholder" 
            :value="value"
            @input="$emit('input', $event.target.value)">
    </label>
</template>

<script>
export default {
    props: ['id', 'label', 'placeholder', 'value']
}
</script>

<style>

</style>