import API from "@aws-amplify/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import BlogComp from "../components/Blog";
import Header from "../components/Header";
import { Blog } from "../graphql-src/blog-api";
import { listBlogs } from "../graphql-src/graphql/queries";
import { BlogsReponse } from "../types/BlogsResponse";
import styles from "./Home.module.scss";

interface Props {
  blogs: Blog[];
}
export default function Home({ blogs }: Props) {
  return (
    <div>
      <Head>
        <title>Blogs | Sanjeet Tiwari</title>
        <meta name="description" content="Blogs by me" />
      </Head>
      <section className={styles.intro}>
        <h1 className={styles.name}>Sanjeet Tiwari</h1>
      </section>
      <section className={styles.blogsSection}>
        <div className={styles.blogs}>
          {blogs.map((blog, index) => (
            <BlogComp key={blog.id} obj={blog} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogsResponse = (await API.graphql({
    query: listBlogs,
  })) as BlogsReponse;

  return {
    props: {
      blogs: blogsResponse.data.listBlogs.items,
    },
  };
};
