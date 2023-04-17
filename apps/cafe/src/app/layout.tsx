import { ReactNode } from 'react';
import { Metadata } from 'next';
import ReactQuery from 'components/src/ReactQuery';
import './global.css';
import './reset.css';
import initMocks from '@app/mocks';

export interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  icons: {
    icon: './favicon.io',
  },
};

initMocks();

function Layout({ children }: LayoutProps) {
  return (
    <>
      <html lang="ko">
        <body>
          <ReactQuery>{children}</ReactQuery>
        </body>
      </html>
    </>
  );
}

export default Layout;
