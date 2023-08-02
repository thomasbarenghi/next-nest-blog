import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $loginMethod: String
    $username: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      loginMethod: $loginMethod
      username: $username
    ) {
      id
      email
    }
  }
`;
