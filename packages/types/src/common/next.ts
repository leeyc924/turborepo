import { ParsedUrlQuery } from "querystring";

export interface ServersidePageProps<
  P extends ParsedUrlQuery = ParsedUrlQuery,
> {
  params?: P;
  searchParams?: Record<string, string | string[] | undefined>;
}
