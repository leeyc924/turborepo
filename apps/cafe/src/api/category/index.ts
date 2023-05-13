import { Category } from 'types';
import { baseFetch } from '../baseFetch';

export async function getCategory() {
  try {
    const res = await baseFetch<Category[]>({ url: `/api/cafe/category`, method: 'GET' });
    return res;
  } catch (error) {
    return [];
  }
}
