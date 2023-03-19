import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import ApiClient from './ApiClient';

const httpLink = createHttpLink({
  // uri: "https://api.enochdev.com/front-web/graphql",
  uri: 'https://app-auth-service.enochdev.com/auth/graphql'
});

class EnochClient extends ApiClient {
  constructor() {
    const client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
    });
    super(client);
  }
}

export default new EnochClient();
