import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = (token) => {
  // create an apollo link instance, a network interface for apollo client
  const link = new HttpLink({
    uri: `https://e6ebmyu4craxllldbpt4shfu3e.appsync-api.us-east-1.amazonaws.com/graphql`,
    headers: {
      "X-Api-Key": "da2-2stzev7j4jfd3nvhzfdj56psku",
    },
  });

  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();

  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
};
