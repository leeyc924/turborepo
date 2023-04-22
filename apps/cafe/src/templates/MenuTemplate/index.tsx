import { MenuCard } from '@app/components';
import { Menu } from 'types';
import './index.scss';

export interface MenuTemplateProps {
  menuList: Menu[];
}

export const MenuTemplate = ({ menuList }: MenuTemplateProps) => {
  return (
    <section className="menu">
      <ul className="menu__card-list">
        {menuList.map(menu => (
          <li key={menu.id} className="menu__card-item">
            <MenuCard menu={menu} />
          </li>
        ))}
      </ul>
    </section>
  );
};
