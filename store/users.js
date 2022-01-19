export const state = () =>({
    users: []
})

export const mutations = {
    setUsers(state, payload){
        state.users = payload;
    }
}
export const actions = {
    fetchUsers({commit}){
        this.$axios.$get('https://api-challenge-talently.vercel.app/api/users')
        .then(response => {
            commit('setUsers', response.result);
        })
    }
}

export const getters = {
    getUserById: (state)=> (id) => {
        return state.users.find(user => user.id == id);
    }
}
