import { gql } from '@apollo/client';

const GET_SPECIES = gql`
  query GetSpecies(
    $limit: Int!
    $offset: Int!
    $orderBy: order_by = asc
    $types: Int_comparison_exp = {}
    $generations: Int_comparison_exp = {}
  ) {
    pokemons: pokemon_v2_pokemon(
      limit: $limit,
      offset: $offset,
      order_by: { id: $orderBy }
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: {id: $types} },
        pokemon_v2_pokemonspecy: { pokemon_v2_generation: {id: $generations} }
      }
    ) {
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
