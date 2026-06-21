import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
});

const authLink = new SetContextLink(({ headers }) => {
  return {
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: import.meta.env.VITE_GRAPHQL_API_KEY,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
