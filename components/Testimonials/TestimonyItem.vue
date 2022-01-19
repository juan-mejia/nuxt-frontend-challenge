<template>
  <div class="group h-24 w-full py-3 px-5 flex jusutify-center items-center bg-white hover:bg-primary-700 cursor-pointer rounded-md shadow"
    @click="setTestimonialIdQuery">
      <div class="mr-3">
          <div class="h-16 w-16 rounded-full overflow-hidden shadow">
              <img :src="testimony.avatar ? testimony.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYmlp9JDeNMaFZzw9S3G1dVztGqF_2vq9nA&usqp=CAU' " alt="">
          </div>
      </div>
      <div v-if="testimony" class="w-full">
          <span class="font-bold text-primary-700 group-hover:text-white">{{completeName == '' ? 'Nombre' : completeName}}</span>
          <p class="text-sm text-gray-600 group-hover:text-white">{{testimony.profession ? testimony.profession : 'Profesion'}}</p>
      </div>
      <div v-else class="w-full">
          <span class="font-bold text-primary-700 group-hover:text-white">{{ 'Nombre'}}</span>
          <p class="text-sm text-gray-600 group-hover:text-white">{{'Profesion'}}</p>
      </div>
  </div>
</template>

<script>

export default {
  props: ['testimony'],
  mounted(){},
  methods: {
      setTestimonialIdQuery(){
          this.$router.push(`?testimonial_id=${this.testimony.id}`);
      }
  },
  computed: {
    completeName: function(){
      let name = '';
      if(this.testimony.name){
        name = this.testimony.name + name;
      }
      if(this.testimony.last_name){
        name = name + ' ' + this.testimony.last_name;
      }
      return name;
    }
  }
}
</script>

<style>
</style>