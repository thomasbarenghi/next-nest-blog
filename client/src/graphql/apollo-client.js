import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { serverUrl } from "@/data/config";

const link = new HttpLink({
  uri: `${serverUrl}/graphql`,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
