import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    userLogin(input: { email: $email, password: $password }) {
      accessToken
    }
  }
`;
