import { gql } from '@apollo/client';

const GET_TYPES = gql`
  query GetTypes {
    types: pokemon_v2_type {
      id
      name
    }
  }
`;

export default GET_TYPES