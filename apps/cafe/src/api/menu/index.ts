import { Menu } from 'types';

export async function getMenu({ categoryId }: { categoryId: string }): Promise<Menu[]> {
  try {
    const res = await fetch(`${process.env['NEXT_PUBLIC_API']}/api/cafe/menu?categoryId=${categoryId}`);
    return res.json();
  } catch (error) {
    return [];
  }
}
