import { SiSlack } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { CgMonday } from "react-icons/cg";
import styles from "@/styles/Section2.module.css";

function Section2() {
  return (
    <section className={styles.container}>
      <div className={styles.items}>
        <p>zoom</p>
        <p>stripe</p>
        <div className={styles.monday}>
          <CgMonday />
          <p>
            monday<span className={styles.com}>.com</span>
          </p>
        </div>
        <div className={styles.slack}>
          <SiSlack />
          <p>slack</p>
        </div>
        <div className={styles.dropbox}>
          <BsDropbox />
          <p>Dropbox</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
