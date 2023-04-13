import Head from "next/head";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="./favicon.io" />
      </Head>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </>
  );
}

export default Layout;
