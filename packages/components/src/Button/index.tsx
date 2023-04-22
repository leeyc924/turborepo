'use client';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export function Button({ children, href, ...rest }: ButtonProps) {
  if (href) {
    return <Link href={href}>{children}</Link>;
  }
  <a></a>
  return <button {...rest}>{children}</button>;
}
