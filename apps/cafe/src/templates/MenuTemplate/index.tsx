import { MenuCard, MenuCardProps } from '@app/components';
import { Menu } from 'types';
import './index.scss';
import { useCallback } from 'react';

export interface MenuTemplateProps {
  menuList: Menu[];
  handleSelectedMenu(menu: Menu): void;
}

export const MenuTemplate = ({ menuList, handleSelectedMenu }: MenuTemplateProps) => {
  return (
    <section className="menu">
      <ul className="menu__card-list">
        {menuList.map(menu => (
          <button key={menu.id} onClick={() => handleSelectedMenu(menu)}>
            <li className="menu__card-item">
              <MenuCard menu={menu} />
            </li>
          </button>
        ))}
      </ul>
    </section>
  );
};
