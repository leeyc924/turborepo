import { Button } from "components";
import { categoryName } from "./page";

interface ClientPageProps {
  categoryName: categoryName;
}

export default function ClientPage({ categoryName }: ClientPageProps) {
  
  return (
    <div>
      <h1>{categoryName}</h1>
    </div>
  );
}
