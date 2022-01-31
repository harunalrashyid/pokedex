import { gql } from '@apollo/client';

const GET_SPECIES = gql`
  query GetSpecies(
    $limit: Int!
    $offset: Int!
  ) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      types: pokemon_v2_pokemontypes {
        item: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

export default GET_SPECIES