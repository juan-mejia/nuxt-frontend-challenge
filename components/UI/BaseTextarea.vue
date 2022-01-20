<template>
  <label :for="id" class="flex flex-col">
        <span class="font-bold text-gray-500">Testimony</span>
        <textarea 
            class="h-28 mt-1 rounded-md border-gray-500 placeholder-gray-500 resize-none"
            :id="id" 
            :placeholder="placeholder"
            :value="value" 
            @input="$emit('input', $event.target.value)"></textarea>
    </label>
</template>

<script>
export default {
    props: ['id', 'label', 'placeholder', 'value']
}
</script>

<style>

</style>