import { getCategory } from "@app/api";
import PageClient from "./page.client";
import { redirect } from 'next/navigation';

const CATEGORY_NAME: categoryName[] = ["coffee", "latte", "tea"];

export type categoryName = "coffee" | "latte" | "tea";
export interface PageProps {
  params: { categoryName: categoryName };
}

export default async function Page({ params: { categoryName } }: PageProps) {
  if (!CATEGORY_NAME.some((c) => c === categoryName)) {
    return redirect("/coffee");
  }

  const initialCategoryData = await getCategory();

  return <PageClient categoryNameList={[]}/>
}
