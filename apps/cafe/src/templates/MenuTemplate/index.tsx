import { MenuCard, MenuCardProps } from '@app/components';
import { Menu } from 'types';
import './index.scss';
import classNames from 'classnames';

export interface MenuTemplateProps {
  menuList: Menu[];
  selectedMenuList: Menu[];
  handleSelectedMenu(menu: Menu): void;
}

export const MenuTemplate = ({ menuList, handleSelectedMenu, selectedMenuList }: MenuTemplateProps) => {
  return (
    <section className="menu">
      <ul className="menu__card-list">
        {menuList.map(menu => (
          <button
            key={menu.id}
            className={classNames('menu__card-item', {
              ['menu__card-item--active']: selectedMenuList.some(m => m.id === menu.id),
            })}
            onClick={() => handleSelectedMenu(menu)}
          >
            <li>
              <MenuCard menu={menu} />
            </li>
          </button>
        ))}
      </ul>
    </section>
  );
};
