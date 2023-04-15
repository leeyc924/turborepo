import { redirect } from "next/navigation";

const CATEGORY_NAME: categoryName[] = ["COFFEE", "LATTE", "TEA"];

export type categoryName = "COFFEE" | "LATTE" | "TEA";
export interface PageProps {
  params: { categoryName: categoryName };
}

export default function Page({ params: { categoryName } }: PageProps) {
  if (!CATEGORY_NAME.some((c) => c === categoryName)) {
    return redirect("/COFFEE");
  }

  return (
    <div>
      <h1>{categoryName}</h1>
    </div>
  );
}
