"use client";

import { useParams, useSearchParams } from "next/navigation";
import { categoryName } from "./page";
import Link from "next/link";

interface ClientPageProps {
  categoryNameList: categoryName[];
}

export default function ClientPage({ categoryNameList }: ClientPageProps) {
  const params  = useParams();

  return (
    <div>
      <Link href="/">홈으로</Link>
      <h1>{categoryNameList}</h1>
    </div>
  );
}
