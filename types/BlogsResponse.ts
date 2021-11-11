import { Blog, ListBlogsQuery } from "../graphql-src/blog-api";

export interface BlogsReponse {
  data: ListBlogsQuery;
}
