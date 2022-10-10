<template>
  <div v-if="pokemon !== null">
    <h1>¿QUIEN ES ESTE POKEMON?</h1>
    <PokemonPicture :show="showPokemon" :id-pokemon="pokemon.id"/>
    <PokemonOption v-if="!showPokemon" :lista="pokemons" @pokeSelect="selectAnswer($event)"/>
    <h3>{{ message }}</h3>
  </div>
  <p v-if="pokemon === null">Loading...</p>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import getList from "@/helpers/pokemonlist";
import PokemonOption from "@/components/PokemonOption";

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOption
  },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      message: null
    }
  },
  methods: {
    async loadPokemons() {
      this.pokemons = await getList();
      console.log(this.pokemons);
      const pos = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemons[pos];
    },
    selectAnswer(id){
      this.showPokemon = true;
      if (id === this.pokemon.id) {
          console.log('correcto');
          this.message = 'Correcto! es ' + this.pokemon.name;
      } else {
          console.log('incorrecto');
        this.message = 'InCorrecto! es ' + this.pokemon.name + ' :(';
      }
    }
  },
  mounted() {
    this.loadPokemons();
  }
}
</script>

<style>

</style>