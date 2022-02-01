import { gql } from '@apollo/client';

const GET_SPEC_DETAIL = gql`
  query GetSpecDetail(
    $name: String!
  ) {
    pokemons: pokemon_v2_pokemonspecies(
      where: { name: {_eq: $name} }
      limit: 1
    ) {
      id
      name
      description: pokemon_v2_pokemonspeciesflavortexts(limit: 1, where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
        detail: flavor_text
      }
      detail: pokemon_v2_pokemons {
        height
        weight
        abilities: pokemon_v2_pokemonabilities {
          item: pokemon_v2_ability {
            id
            name
          }
        }
        specs: pokemon_v2_pokemonspecy {
          evolutions: pokemon_v2_evolutionchain {
            species: pokemon_v2_pokemonspecies(order_by: {order: asc}) {
              id
              name
            }
          }
        }
        stats: pokemon_v2_pokemonstats {
          id
          baseStat: base_stat
          item: pokemon_v2_stat {
            name
          }
        }
        types: pokemon_v2_pokemontypes {
          item: pokemon_v2_type {
            id
            name
          }
        }
      }
    }
  }
`;

export default GET_SPEC_DETAIL
