import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@app/styles/global.css';
import '@app/styles/reset.css';
import type { AppProps } from 'next/app';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8006',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
