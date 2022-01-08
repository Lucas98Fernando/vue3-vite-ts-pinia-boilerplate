<script setup lang="ts">
import { mapActions, storeToRefs } from 'pinia'
import { ref } from 'vue'
import Hello from "../../../components/Hello.vue"
import { useCounterStore } from "../../../store/modules/example"

const welcome = ref("Vue 3 + Vite + TypeScript + Pinia")

// Instance to store
const main = useCounterStore()
// Make data reactive
const { name, counter, doubleCounter } = storeToRefs(main)
// Mapping actions
const { increment } = mapActions(useCounterStore, ["increment"])
// Reset store data
const reset = () => main.$reset() 
</script>

<template>
  <h1>{{ welcome }}</h1>
  <Hello msg="I'm a example component with composition API" />
  <h3>Counter using Pinia Store</h3>
  <p>Counter: {{ counter }}</p>
  <p>Double counter: {{ doubleCounter }}</p>
  <button @click="increment">Increment</button>
  <button @click="reset">Reset store</button>
</template>
