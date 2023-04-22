import Image from 'next/image';
import { Menu } from 'types';
import './index.scss';
import Link from 'next/link';

export interface MenuCardProps {
  menu: Menu;
}

export const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <>
      <div className="menu-card__image">
        <Image src={menu.imgPath} alt={`${menu.krName} 이미지`} width={100} height={100} />
      </div>
      <span className="menu-card__name">{menu.krName}</span>
      <span className="menu-card__price">₩{menu.price.toLocaleString()}</span>
    </>
  );
};
