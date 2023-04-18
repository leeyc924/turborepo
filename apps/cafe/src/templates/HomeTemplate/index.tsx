import Link from 'next/link';
import styles from './index.module.scss';
import { Button } from 'components';

export interface HomeTemplateProps {}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  return (
    <div>
      <Button onClick={() => fetch('/api/todos', { method: 'GET' })}>click</Button>
      <Link href={'/coffee'}>주문하기</Link>
    </div>
  );
};
