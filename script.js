const resultado = document.getElementById('resultado')
const campobusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
pokemonAtual = campobusca.value
//const resultado = fetch(url)
//                    .then(function (resultado) {
//                        return resultado.json()
//                    })
//                    .then(function(resultado){
//                        console.log(resultado)
//
//                   })

//forma compactada, usando arrow function                   
// function buscarPokemon(termo) {
//     const url = "https://pokeapi.co/api/v2/pokemon/" + termo
//     fetch(url)
//         .then(resposta => resposta.json())
//         .then(resposta => resultado.innerHTML = `
//             <img src="${resposta.sprites.front_default}"/>
//             <p>#${resposta.id}
//             <h2>${resposta.name}</h2>
//         `)
// } 

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    resultado.innerHTML = `
        <img src="${pokemon.sprites.front_default}"/>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
    `
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campobusca.value)
    pokemonAtual = campobusca.value
    buscarPokemon(campobusca.value)
});

btnBuscar.addEventListener('keyup', e => {
        if (EventCounts.key == "Enter") {
            btnBuscar.click()
        }
})