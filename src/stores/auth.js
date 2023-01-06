import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = reactive({})

  const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

  function logout() {
    isAuthenticated.value = false
    user.value = {}
  }
  async function login() {
    const res = await fetch('https://reqres.in/api/users/2')
    const { data } = await res.json()
    console.log(data)
    user.value = data
    isAuthenticated.value = true
  }

  return {
    login,
    logout,
    user,
    isAuthenticated,
    fullName,
  }
})
// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isAuthenticated: false,
//     user: {},
//   }),
//   getters: {
//     fullName: (state) => `${state.user.first_name} ${state.user.last_name}`,
//   },
//   actions: {
//     logout() {
//       this.$patch((state) => {
//         ;(state.isAuthenticated = false), (state.user = {})
//       })
//     },
//     async login() {
//       const res = await fetch('https://reqres.in/api/users/2')
//       const { data } = await res.json()
//       console.log(data)
//       this.user = data
//       this.isAuthenticated = true
//     },
//   },
// })
