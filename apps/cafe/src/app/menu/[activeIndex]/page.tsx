import { getCategory, getMenu } from '@app/api';
import PageClient from './page.client';
import { parseToNumber } from 'utils';

interface PageProps {
  params: {
    activeIndex: string;
  };
}

export default async function Page({ params }: PageProps) {
  const categoryList = await getCategory();
  const activeIndex = categoryList.findIndex((c, i) => i === parseToNumber(params.activeIndex));
  const menuList = await getMenu({ categoryId: categoryList[activeIndex].id });
  return <PageClient categoryList={categoryList} menuList={menuList} />;
}
