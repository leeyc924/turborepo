import { Category } from "types";

export async function getCategory(): Promise<Category[]> {
  try {
    const res = await fetch(`${process.env['NEXT_PUBLIC_API']}/api/cafe/category`);
    return res.json();
  } catch (error) {
    return [];
  }
}
