import { gql } from "@apollo/client";

export const VERIFY_SESSION = gql`
  query VerifySession($userId: ID!) {
    verifySession(userId: $userId)
  }
`;
