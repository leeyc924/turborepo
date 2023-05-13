import { Menu } from 'types';
import { baseFetch } from '../baseFetch';

export async function getMenu({ categoryId }: { categoryId: string }) {
  try {
    const res = await baseFetch<Menu[]>({
      url: `/api/cafe/menu?categoryId=${categoryId}`,
      method: 'GET',
    });
    console.log('res', res);
    return res;
  } catch (error) {
    return [];
  }
}
