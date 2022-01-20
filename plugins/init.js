export default (context, inject) => {
    context.store.dispatch('users/fetchUsers');
} 