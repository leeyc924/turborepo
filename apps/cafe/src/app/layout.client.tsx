'use client';

import { ReactNode } from 'react';
import { ReactQuery } from 'components';
import { worker } from '@app/mocks';

export interface LayoutClientProps {
  children: ReactNode;
}

worker.start();
function LayoutClient({ children }: LayoutClientProps) {
  return <ReactQuery>{children}</ReactQuery>;
}

export default LayoutClient;
