import { ReactNode } from "react";
import { Metadata } from "next";

export interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  icons: {
    icon: "./favicon.io",
  },
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </>
  );
}

export default Layout;
