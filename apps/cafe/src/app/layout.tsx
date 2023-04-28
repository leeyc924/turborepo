import { ReactNode } from 'react';
import { Metadata } from 'next';
import './global.css';
import './reset.css';
import Providers from './providers.client';

export interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  icons: {
    icon: './favicon.io',
  },
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <html lang="ko">
        <body>
          <div className="main-layout">
            <Providers>
              {children}
            </Providers>
          </div>
        </body>
      </html>
    </>
  );
}

export default Layout;
