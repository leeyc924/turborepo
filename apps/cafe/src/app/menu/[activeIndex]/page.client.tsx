'use client';

import { useParams } from 'next/navigation';
import { CategoryTemplate, MenuTemplate, MenuTemplateProps, OrderTemplate } from '@app/templates';
import { useCallback, useMemo, useState } from 'react';
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
  const [selectedMenuList, setSelectedMenuList] = useState<Menu[]>([]);
  const activeIndex = useMemo(() => parseToNumber(params['activeIndex']), []);

  const handleSelectedMenu = useCallback<MenuTemplateProps['handleSelectedMenu']>(menu => {
    const index = selectedMenuList.findIndex(prev => prev.id === menu.id);
    if (index > -1) {
      setSelectedMenuList(prev => prev.filter((p, i) => i !== index));
      return;
    }

    setSelectedMenuList(prev => prev.concat(menu));
  }, []);
console.log(selectedMenuList);
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
        <MenuTemplate menuList={menuList} handleSelectedMenu={handleSelectedMenu} />
      </main>
      <footer className="footer">
        <OrderTemplate selectedMenuList={selectedMenuList} />
      </footer>
    </div>
  );
}
