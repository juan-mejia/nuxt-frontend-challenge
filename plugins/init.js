export default (context, inject) => {
    console.log(context)
    context.store.dispatch('users/fetchUsers');
} 