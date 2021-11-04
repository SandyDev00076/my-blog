import { Blog } from "./Blog";

export interface BlogsReponse {
  data: {
    listBlogs: {
      items: Blog[];
    };
  };
}
