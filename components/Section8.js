import styles from "@/styles/Section8.module.css";
import Image from "next/image";
import { HiPlus } from "react-icons/hi";

function Section8() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h1>frequently asked questions</h1>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>

      <div className={styles.midBot}>
        {/* middle */}
        <div className={styles.middle}>
          <p>Is there a free trial available?</p>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition.{" "}
          </p>
        </div>
        {/* bottom */}
        <div className={styles.bottom}>
          <div>
            <p>Can i change my plan later?</p>
            <HiPlus />
          </div>
          <div>
            <p>Are the courses lifetime?</p>
            <HiPlus />
          </div>
          <div>
            <p>Do i get certified after taking courses?</p>
            <HiPlus />
          </div>
          <div>
            <p>How do i reach out to mentors?</p>
            <HiPlus />
          </div>
          <div>
            <p>Do we get job ready after taking courses?</p>
            <HiPlus />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section8;
