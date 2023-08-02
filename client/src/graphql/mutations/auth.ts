import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      id
      userId
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword(
    $userId: ID!
    $newPassword: String!
    $oldPassword: String!
  ) {
    changePassword(
      userId: $userId
      newPassword: $newPassword
      oldPassword: $oldPassword
    ) {
      id
    }
  }
`;