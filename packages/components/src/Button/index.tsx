'use client';
import Link from 'next/link';
import styles from './index.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export function Button({ children, href, ...rest }: ButtonProps) {
  if (href) {
    return <Link href={href} className={styles.button}>{children}</Link>;
  }
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
