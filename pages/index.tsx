import API from "@aws-amplify/api";
import Head from "next/head";
import { listBlogs } from "../graphql-src/graphql/queries";
import { Blog } from "../types/Blog";
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
