import { Menu } from 'types';

export async function getMenu({ categoryId }: { categoryId: string }): Promise<Menu[]> {
  try {
    const res = await fetch(`http://localhost:8005/api/cafe/menu?categoryId=${categoryId}`);
    return res.json();
  } catch (error) {
    return [];
  }
}
