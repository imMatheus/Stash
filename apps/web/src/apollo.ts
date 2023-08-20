import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  type NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem("auth-token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = () => {
  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
    name: "Dema app",
    version: "0.1.0",
  });

  return apolloClient;
};

export const getApolloClient = () => apolloClient;
