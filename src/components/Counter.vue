<template>
  <div>
    <br />
    <button @click="counterStore.decrement">-</button>
    Count value: {{ count }}
    <button @click="counterStore.increment">+</button>
    <br />
    length {{ countDigitLength }}
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const counterStore = useCounterStore()
const { count, countDigitLength } = storeToRefs(counterStore)
</script>
