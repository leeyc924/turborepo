import { ReactNode, cache } from 'react';
import { Metadata } from 'next';
import './global.css';
import './reset.css';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import HydrateClient from './hydrate.client';
import Providers from './providers.client';

export interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  icons: {
    icon: './favicon.io',
  },
};
const getQueryClient = cache(() => new QueryClient());

function Layout({ children }: LayoutProps) {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  queryClient.clear();
  return (
    <>
      <html lang="ko">
        <body>
          <div className="main-layout">
            <Providers>
              <HydrateClient state={dehydratedState}>{children}</HydrateClient>
            </Providers>
          </div>
        </body>
      </html>
    </>
  );
}

export default Layout;
