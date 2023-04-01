import styles from "@/styles/Section7.module.css";
import Image from "next/image";

function Section7() {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <p>JOIN OUR COMMUNITY</p>
        <h1>
          are you ready to connect with the future talent of the tech world
        </h1>
        <p>meet up with other techstars and grow together</p>
      </div>
      {/* bottom */}
      <div className={styles.vector}>
        <Image
          src={"/images/section7/new1.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image1}
        />
        <Image
          src={"/images/section7/Image (1).svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image2}
        />
        <Image
          src={"/images/section7/Ellipse (3).svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image3}
        />
        <Image
          src={"/images/section7/new4.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image4}
        />
        <Image
          src={"/images/section7/Ellipse (4).svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image5}
        />
        <Image
          src={"/images/section7/small3.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image6}
        />
        <Image
          src={"/images/section7/small4.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image7}
        />
        <Image
          src={"/images/section7/small5.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image8}
        />
        <Image
          src={"/images/section7/group1.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image9}
        />
        <Image
          src={"/images/section7/group5.svg"}
          alt=""
          width={60}
          height={60}
          className={styles.image10}
        />
      </div>
      <div className={styles.buttonDiv}>
        <button>Join Our Community</button>
      </div>
    </section>
  );
}

export default Section7;
