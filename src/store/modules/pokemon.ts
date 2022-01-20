import { defineStore } from "pinia";
import { api } from "@/http/api";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
  }),
  getters: {
    pokemonsName: (state) =>
      state.pokemons.map((el: { name: string }) => el.name),
  },
  actions: {
    async getPokemons() {
      return await api
        .get("/pokemon?limit=20")
        .then((pokemons) => (this.pokemons = pokemons.data.results));
    },
  },
});
