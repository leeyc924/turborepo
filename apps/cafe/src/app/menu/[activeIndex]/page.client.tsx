'use client';

import { useParams } from 'next/navigation';
import { CategoryTemplate, MenuTemplate, OrderTemplate } from '@app/templates';
import { useMemo } from 'react';
import { Category, Menu } from 'types';
import { parseToNumber } from 'utils';
import { Button } from 'components';
import './page.scss';

interface ClientPageProps {
  categoryList: Category[];
  menuList: Menu[];
}

export default function ClientPage({ categoryList, menuList }: ClientPageProps) {
  const params = useParams();
  const activeIndex = useMemo(() => parseToNumber(params['activeIndex']), []);

  return (
    <div className="menu-layout">
      <header className="header">
        <Button href="/">뒤로가기</Button>
        <h1 className="header__title">주문하기</h1>
      </header>
      <nav className="nav">
        <CategoryTemplate categoryList={categoryList} activeIndex={activeIndex} />
      </nav>
      <main className="main">
        <MenuTemplate menuList={menuList} />
      </main>
      <footer className="footer">
        <OrderTemplate />
      </footer>
    </div>
  );
}
