<script setup>
import {storeToRefs} from 'pinia'
import Counter from '@/components/Counter.vue'
import { useAuthStore } from '@/stores/auth'
// const authStore = useAuthStore()
const { isAuthenticated, fullName } = storeToRefs(useAuthStore())
</script>

<template>
  <main>
    Home Page<br />
    <div v-if="isAuthenticated">User name is: {{ fullName }}</div>
    <Counter />
  </main>
</template>
