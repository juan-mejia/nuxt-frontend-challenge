<template>
  <form action="" class="flex flex-cols">
    <div class="my-2">
        <div class="h-24 w-24 rounded-full shadow overflow-hidden border-4 border-primary-700">
            <img
                class="group-hover:hidden"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg" alt="">
        </div>
    </div>
    <div class="">
      <label for="avatar" class="flex flex-col">
        <span>URL Avatar</span>
        <input type="text" id="avatar" placeholder="URL" v-model="form.avatarUrl">
      </label>
      <label for="name" class="flex flex-col">
        <span>Name</span>
        <input type="text" id="name" placeholder="Name" v-model="form.name">
      </label>
      <label for="last-name" class="flex flex-col">
        <span>Last name</span>
        <input type="text" id="last-name" placeholder="Name" v-model="form.last_name">
      </label>
      <label for="profession" class="flex flex-col">
        <span>Profession</span>
        <input type="text" id="profession" placeholder="profession" v-model="form.profession">
      </label>
      <label for="testimony" class="flex flex-col">
        <span>Testimony</span>
        <textarea type="text" id="testimony" placeholder="testimony" v-model="form.testimony"></textarea>
      </label>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return {
            form: {
                avatarUrl: '',
                name: '',
                last_name: '',
                profession: '',
                testimony: ''
            }
        }
    }
}
</script>

<style>

</style>