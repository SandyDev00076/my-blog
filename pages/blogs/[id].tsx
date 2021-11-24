import API from "@aws-amplify/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { Blog } from "../../graphql-src/blog-api";
import { getBlog, listBlogs } from "../../graphql-src/graphql/queries";
import { BlogsReponse } from "../../types/BlogsResponse";
import { GetBlogResponse } from "../../types/GetBlogResponse";

import styles from "../BlogPage.module.scss";

interface Props {
  blog: Blog;
}
const Blog = ({ blog }: Props) => {
  return <section className={styles.container}>{blog.title}</section>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsResponse = (await API.graphql({
    query: listBlogs,
  })) as BlogsReponse;
  const blogs = blogsResponse.data.listBlogs.items;
  const paths = blogs.map((blog) => ({ params: { id: blog.id } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const blogData = (await API.graphql({
    query: getBlog,
    variables: { id },
  })) as GetBlogResponse;
  return {
    props: {
      blog: blogData.data.getBlog,
    },
  };
};

export default Blog;
