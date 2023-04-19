import { ReactNode } from 'react';
import { Metadata } from 'next';
import './global.css';
import './reset.css';
import LayoutClient from './layout.client';

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
          <LayoutClient>{children}</LayoutClient>
        </body>
      </html>
    </>
  );
}

export default Layout;
