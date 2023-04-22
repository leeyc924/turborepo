import { Category } from "types";

export async function getCategory(): Promise<Category[]> {
  const res = await fetch('http://localhost:8005/mock/cafe/category');
  return res.json();
}
