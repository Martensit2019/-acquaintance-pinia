import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(9)

  const countDigitLength = computed(() => {
    return count.value.toString().length
  })

  const isAuthenticated = () => {
    const authStore = useAuthStore()
    return authStore.isAuthenticated
  }
  const decrement = () => {
    if (!isAuthenticated()) return
    count.value--
  }
  const increment = () => {
    if (!isAuthenticated()) return
    count.value++
  }
  return {
    count,
    countDigitLength,
    decrement,
    increment,
  }
})
// OPTIONS API
// -------------------------------------------------------------------
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 9,
//   }),
//   getters: {
//     coundDigitLength: (state) => state.count.toString().length,
//   },
//   actions: {
//     isAuthenticated() {
//       const authStore = useAuthStore()
//       return authStore.isAuthenticated
//     },
//     decrement() {
//       if(!this.isAuthenticated()) return
//       this.count--
//     },
//     increment() {
//       if(!this.isAuthenticated()) return
//       this.count++
//     },
//   },
// })
