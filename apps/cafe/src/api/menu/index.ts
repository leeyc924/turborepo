export async function getMenu({ categoryId }: { categoryId: string }) {
  const res = await fetch(`http://localhost:8005/mock/cafe/menu?categoryId=${categoryId}`);
  return res.json();
}
