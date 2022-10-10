import pokeHttp from "@/environments/environment";

const getList = async () => {
    const lista = [
        Math.floor(Math.random() * 649) + 1,
        Math.floor(Math.random() * 649) + 1,
        Math.floor(Math.random() * 649) + 1,
        Math.floor(Math.random() * 649) + 1,
    ];

    return await getPokemons(lista);

}


const getPokemons = async ([a, b, c, d] = []) => {
    const array = [
        pokeHttp.get(`/${a}`),
        pokeHttp.get(`/${b}`),
        pokeHttp.get(`/${c}`),
        pokeHttp.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(array);

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
}

export default getList;