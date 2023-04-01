import styles from "@/styles/Section1.module.css";
import Image from "next/image";

function section1() {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        <div className={styles.text}>
          <h1>Grow your skills to advance your career path </h1>
          <p>
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </p>
        </div>
        <div className={styles.button}>
          <button className={styles.firstBtn}>Get Started Now</button>
          <button className={styles.secondBtn}>Enroll Now</button>
        </div>
        <div className={styles.peoples}>
          <div>
            <Image src={"/images/group1.svg"} alt="" width={32} height={32} />
            <Image src={"/images/group2.svg"} alt="" width={32} height={32} />
            <Image src={"/images/group3.svg"} alt="" width={32} height={32} />
            <Image src={"/images/group4.svg"} alt="" width={32} height={32} />
            <Image src={"/images/group5.svg"} alt="" width={32} height={32} />
          </div>
          <div className={styles.peoplesPreviews}>
            <h1>255k+</h1>
            <p>previews</p>
          </div>
          <Image
            src={"/images/coilArrow.svg"}
            alt=""
            width={60}
            height={120}
            className={styles.coilArrow}
          />
        </div>
      </div>
      <div className={styles.second}>
        <Image
          src={"/images/vscode.svg"}
          alt=""
          width={63}
          height={63}
          className={styles.vscode}
        />
        <Image
          src={"/images/lightBulb.svg"}
          alt=""
          width={193}
          height={166}
          className={styles.lightBulb}
        />
        <Image
          src={"/images/greenCircle.svg"}
          alt=""
          width={20}
          height={20}
          className={styles.circle}
        />
        <Image
          src={"/images/triangle.svg"}
          alt=""
          width={25}
          height={20}
          className={styles.triangle}
        />
        <Image
          src={"/images/figma8.svg"}
          alt=""
          width={53}
          height={53}
          className={styles.figma}
        />
        <div className={styles.heroImageDiv}>
          <Image
            src={"/images/hero-img.svg"}
            alt=""
            width={500}
            height={545}
            className={styles.heroImage}
          />
        </div>
        <Image
          src={"/images/yellowDot.svg"}
          alt=""
          width={9}
          height={9}
          className={styles.yellowDot}
        />
        <div className={styles.whiteW}>
          <Image
            src={"/images/w.svg"}
            alt=""
            width={64}
            height={64}
            className={styles.w}
          />
        </div>
      </div>
    </section>
  );
}

export default section1;
