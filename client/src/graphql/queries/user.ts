import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query GetUser($id: ID!) {
    findUserById(id: $id) {
      id
      firstName
      lastName
      email
      username
      loginMethod
      softDelete
      isSuperAdmin
      createdAt
      updatedAt
      coverImage
      profileImage
      spaces {
        id
        accessCode
        name
        description
        coverImage
        updatedAt
        createdAt
        members {
          role
          user {
            id
            profileImage
            firstName
            lastName
          }
        }
      }
    }
  }
`;