'use client';

import { ReactNode } from 'react';
import { ReactQuery } from 'components';

export interface LayoutClientProps {
  children: ReactNode;
}

function LayoutClient({ children }: LayoutClientProps) {
  return <ReactQuery>{children}</ReactQuery>;
}

export default LayoutClient;
