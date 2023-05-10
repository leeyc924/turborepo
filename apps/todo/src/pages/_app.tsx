import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@app/styles/global.css';
import '@app/styles/reset.css';
import type { AppProps } from 'next/app';

const apolloClient = new ApolloClient({
  uri: process.env['NEXT_PUBLIC_API'],
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
