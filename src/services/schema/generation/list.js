import { gql } from '@apollo/client';

const GET_GENERATIONS = gql`
  query GetGenerations {
    generations: pokemon_v2_generation {
      id
      name
    }
  }
`;

export default GET_GENERATIONS