import { Category } from "types";

export async function getCategory(): Promise<Category[]> {
  try {
    const res = await fetch('http://localhost:8005/api/cafe/category');
    return res.json();
  } catch (error) {
    return [];
  }
}
