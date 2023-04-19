export async function getCategory<T>(): Promise<T> {
  const res = await fetch('http://localhost:53421//api/category');
  return res.json();
}
