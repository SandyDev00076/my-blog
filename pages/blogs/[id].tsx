import { useState } from "react";
import API from "@aws-amplify/api";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Blog } from "../../graphql-src/blog-api";
import { getBlog, listBlogs } from "../../graphql-src/graphql/queries";
import { BlogsReponse } from "../../types/BlogsResponse";
import { GetBlogResponse } from "../../types/GetBlogResponse";
import ReactMarkdown from "react-markdown";
import { LikeIcon, LikesIcon } from "../../assets/icons";
import { updateBlog } from "../../graphql-src/graphql/mutations";

import styles from "../BlogPage.module.scss";

interface Props {
  blog: Blog;
}
const Blog = ({ blog }: Props) => {
  const [liked, setLiked] = useState(false);

  async function likeThisBlog() {
    await API.graphql({
      query: updateBlog,
      variables: { input: { ...blog, likes: blog.likes + 1 } },
    });
    setLiked(true);
  }

  return (
    <div>
      <Head>
        <title>{blog.title} | Sanjeet Tiwari</title>
        <meta name="description" content={blog.summary} />
      </Head>
      <div className={styles.marker}>Blog by Sanjeet Tiwari</div>
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.summary}>{blog.summary}</div>
      <div className={styles.timestamp}>
        Last updated at {new Date(blog.updatedAt).toDateString()}
      </div>
      <ReactMarkdown className={styles.mdArea}>{blog.content}</ReactMarkdown>
      <div className={styles.feedback}>
        <span>Was it helpful?</span>
        {liked ? (
          <div className={styles.likedIcon}>
            <LikesIcon />
          </div>
        ) : (
          <button className={styles.likeIcon} onClick={likeThisBlog}>
            <LikeIcon />
          </button>
        )}
      </div>
    </div>
  );
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
