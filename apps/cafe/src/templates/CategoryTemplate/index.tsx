import classnames from 'classnames';
import { Category } from 'types';
import './index.scss';
import Link from 'next/link';

export interface CategoryTemplateProps {
  categoryList: Category[];
  activeIndex: number;
}

export const CategoryTemplate = ({ categoryList, activeIndex }: CategoryTemplateProps) => {
  return (
    <ul className="category">
      {categoryList.map((category, index) => (
        <li key={index} className={classnames('category__item', { 'category__item--active': index === activeIndex })}>
          <Link href={`/menu/${index}`}>{category.krName}</Link>
        </li>
      ))}
    </ul>
  );
};
