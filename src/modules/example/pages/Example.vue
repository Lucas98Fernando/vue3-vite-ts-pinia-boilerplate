<script lang="ts" setup>
  import { mapActions, storeToRefs } from "pinia";
  import { onMounted, ref } from "vue";
  import Hello from "@/components/Hello.vue";
  import { useCounterStore } from "@/store/modules/example";
  import { usePokemonStore } from "@/store/modules/pokemon";

  const welcome = ref("Boilerplate Vue 3 + Vite + TypeScript + Pinia");

  // Instance to store
  const main = useCounterStore();
  const pokemon = usePokemonStore();
  // Make data reactive
  const { counter, doubleCounter } = storeToRefs(main);
  const { pokemonsName } = storeToRefs(pokemon);
  // Mapping actions
  const { increment } = mapActions(useCounterStore, ["increment"]);
  // Reset store data
  const reset = () => main.$reset();
  // Call action from store to get pokemons on mounted lifecycle
  onMounted(() => pokemon.getPokemons());
</script>

<template>
  <h1>{{ welcome }}</h1>
  <Hello msg="I'm a example component with composition API" />
  <h3>Counter using Pinia Store</h3>
  <p>Counter: {{ counter }}</p>
  <p>Double counter: {{ doubleCounter }}</p>
  <button @click="increment">Increment</button>
  <button @click="reset">Reset store</button>

  <div v-for="(poke, i) of pokemonsName" :key="i">{{ poke }}</div>
</template>
