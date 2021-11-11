import styles from "./Header.module.scss";
import { BehanceIcon, GithubIcon } from "../assets/icons";

const Header = () => {
  return (
    <section className={styles.container}>
      <button className={styles.socialIcon}>
        <BehanceIcon />
      </button>
      <button className={styles.socialIcon}>
        <GithubIcon />
      </button>
    </section>
  );
};

export default Header;
