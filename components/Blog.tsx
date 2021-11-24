import { NO_OF_VARIANTS } from "../app.constants";
import { LikesIcon } from "../assets/icons";
import { Blog as BlogType } from "../graphql-src/blog-api";
import { cJoin } from "../utils";
import Link from "next/link";
import styles from "./Blog.module.scss";

interface Props {
  obj: BlogType;
  index: number;
}
const Blog = ({ obj, index }: Props) => {
  const variantNumber = (index % NO_OF_VARIANTS) + 1;
  return (
    <Link href={`/blogs/${obj.id}`} passHref>
      <div className={cJoin(styles.container, `variant${variantNumber}`)}>
        <div className={styles.title}>{obj.title}</div>
        <div className={styles.summary}>{obj.summary}</div>
        <div className={styles.header}>
          <div className={styles.lastUpdatedPart}>
            <div>Last Updated</div>
            <div className={styles.lastUpdated}>
              {new Date(obj.updatedAt).toDateString()}
            </div>
          </div>
          <div className={styles.likesPart}>
            <LikesIcon /> <span className={styles.likes}>{obj.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
