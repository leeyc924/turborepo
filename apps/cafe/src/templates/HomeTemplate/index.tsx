import Link from 'next/link';
import styles from './index.module.scss';

export interface HomeTemplateProps {

}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  return (
    <div>
      <Link href={'/coffee'}>주문하기</Link>
    </div>
  )
};