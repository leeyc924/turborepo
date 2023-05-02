import { gql, useQuery } from '@apollo/client';
import { TodoItem } from 'types';

const GET_LIST = gql`
  query getList {
    list {
      id
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_LIST);
  console.log('data', data);

  return loading ? <div>loading...</div> : !data || error ? <div>error</div> : <div>a</div>;
}
