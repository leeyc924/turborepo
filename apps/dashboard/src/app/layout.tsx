import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <section>{children}</section>;
}

export default Layout;
