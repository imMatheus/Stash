import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  type NormalizedCacheObject,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = () => {
  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([httpLink]),
    name: "Dema app",
    version: "0.1.0",
  });

  return apolloClient;
};

export const getApolloClient = () => apolloClient;
