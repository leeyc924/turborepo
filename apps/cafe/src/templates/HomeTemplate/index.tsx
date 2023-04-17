import Link from 'next/link';
import styles from './index.module.scss';
import { Button } from 'components';

export interface HomeTemplateProps {

}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  return (
    <div>
      <Button onClick={() => fetch('/todos')}>click</Button>
      <Link href={'/coffee'}>주문하기</Link>
    </div>
  )
};