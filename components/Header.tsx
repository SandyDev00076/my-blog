import styles from "./Header.module.scss";
import Image from "next/image";
import GithubIcon from "../public/github.svg";
import BehanceIcon from "../public/behance.svg";

const Header = () => {
  return (
    <section className={styles.container}>
      <Image src={GithubIcon} alt="github-icon" className={styles.icon} />
      <Image src={BehanceIcon} alt="behance-icon" className={styles.icon} />
    </section>
  );
};

export default Header;
