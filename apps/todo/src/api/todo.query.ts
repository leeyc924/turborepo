import { graphql } from '@app/gql';

export const getList = graphql('query getList {\n  list {\n    id\n    title\n  }\n}');
