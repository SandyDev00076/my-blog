import { NO_OF_VARIANTS } from "../app.constants";
import { Blog } from "../graphql-src/blog-api";
import { cJoin } from "../utils";
import styles from "./Blog.module.scss";

interface Props {
  obj: Blog;
  index: number;
}
const Blog = ({ obj, index }: Props) => {
  const variantNumber = (index % NO_OF_VARIANTS) + 1;
  return (
    <button className={cJoin(styles.container, `variant${variantNumber}`)}>
      <div className={styles.title}>{obj.title}</div>
      <div className={styles.summary}>{obj.summary}</div>
    </button>
  );
};

export default Blog;
