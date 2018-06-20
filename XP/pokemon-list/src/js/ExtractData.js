export default class ExtractData {
    extractPokemonData (pokemonData, objectToFill, pokemonIndex) {
        let thisPokemon = {};

        thisPokemon.name = pokemonData.name;
        thisPokemon.id = pokemonData.id;
        thisPokemon.sprite = pokemonData.sprites.front_default;
        thisPokemon.height = pokemonData.height;
        thisPokemon.weight = pokemonData.weight;

        if (pokemonData.types.length > 1) {
            for (let i = 0; i < pokemonData.types.length; i++) {
                if (pokemonData.types[i].slot === 1) {
                    thisPokemon.type_1 = pokemonData.types[i].type.name;
                } else if (pokemonData.types[i].slot === 2) {
                    thisPokemon.type_2 = pokemonData.types[i].type.name;
                }
            }
        } else if (pokemonData.types.length === 1) {
            thisPokemon.type_1 = pokemonData.types[0].type.name;
        }

        objectToFill[pokemonIndex] = thisPokemon;
        console.log(objectToFill);
    }
}