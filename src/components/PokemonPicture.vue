<template>
  <div class="pokemon-container">
    <img v-if="!show" class="hidden-pokemon" :src="getUrl()" alt="">
    <img v-if="show" class="fade-in" :src="getUrl()" alt="">
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    idPokemon: Number,
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`;
    }
  }
}
</script>




<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>