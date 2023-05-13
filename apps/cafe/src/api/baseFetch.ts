const baseUrl = `${process.env.NEXT_PUBLIC_API}`;

export async function baseFetch<T>({
  url,
  method,
  body,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
}): Promise<T> {
  console.log('rreee');
  const response = await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'LtDcmqRV4X46tT6ckhFpG8LxXuFJTy211RrkOPX4',
    },
    ...(body && { body: JSON.stringify(body) }),
  });
  return response.json();
}
