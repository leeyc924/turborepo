import Link from 'next/link';
export interface HomeTemplateProps {}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  return (
    <div>
      <Link href={'/menu/0'}>주문하기</Link>
    </div>
  );
};
