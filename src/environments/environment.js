import axios from 'axios';

const pokeHttp = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokeHttp;