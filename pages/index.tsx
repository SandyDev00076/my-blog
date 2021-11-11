import API from "@aws-amplify/api";
import Head from "next/head";
import BlogComp from "../components/Blog";
import { Blog } from "../graphql-src/blog-api";
import { listBlogs } from "../graphql-src/graphql/queries";
import { BlogsReponse } from "../types/BlogsResponse";
import styles from "./Home.module.scss";

interface Props {
  blogs: Blog[];
}
export default function Home({ blogs }: Props) {
  console.log(blogs);
  return (
    <div>
      <Head>
        <title>Blogs | Sanjeet Tiwari</title>
        <meta name="description" content="Blogs by me" />
      </Head>
      <h1 className={styles.name}>Sanjeet Tiwari</h1>
      <section className={styles.blogsSection}>
        <h2 className={styles.blogsTitle}>Blogs ({blogs.length})</h2>
        {blogs.map((blog, index) => (
          <BlogComp key={blog.id} obj={blog} index={index} />
        ))}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const blogsResponse = (await API.graphql({
    query: listBlogs,
  })) as BlogsReponse;

  return {
    props: {
      blogs: blogsResponse.data.listBlogs.items,
    },
  };
}
