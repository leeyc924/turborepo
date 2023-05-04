import { useQuery } from "@apollo/client";
import { getList } from "@app/api";

export default function Home() {
  const { loading, error, data } = useQuery(getList);

  return loading ? (
    <div>loading...</div>
  ) : !data?.list || error ? (
    <div>error</div>
  ) : (
    data?.list.map(d => <div key={d?.id}>{d?.title}</div>)
  );
}
