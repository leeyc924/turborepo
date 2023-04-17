"use client";

import { categoryName } from "./page";
import Link from "next/link";

interface ClientPageProps {
  categoryName: categoryName;
}

export default function ClientPage({ categoryName }: ClientPageProps) {
  return (
    <div>
      <Link href="/">홈으로</Link>
      <h1>{categoryName}</h1>
    </div>
  );
}
