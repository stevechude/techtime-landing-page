import styles from "@/styles/Section4.module.css";
import Image from "next/image";

const sect4 = [
  {
    bgColor: "#4C7FBD",
    image: "/images/section4/mentors.svg",
    header: "experienced mentors",
    paragraph:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
  },
  {
    bgColor: "#AECD5E",
    image: "/images/section4/clock.svg",
    header: "one-on-one meetings",
    paragraph:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
  },
  {
    bgColor: "#ED6BA6",
    image: "/images/section4/people.svg",
    header: "one-on-one meetings",
    paragraph:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
  },
  {
    bgColor: "#EA6B45",
    image: "/images/section4/prices.svg",
    header: "affordable prices",
    paragraph:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
  },
];

function Section4() {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        <div className={styles.header}>
          <h1>this is why we are best from others</h1>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className={styles.pictureDiv}>
          <Image
            src={"/images/section4/section4image.svg"}
            alt=""
            width={712}
            height={475}
            className={styles.picture}
          />
        </div>
      </div>
      <div className={styles.second}>
        {sect4.map((value, index) => (
          <div key={index} className={styles.body}>
            <div className={styles.innerBody}>
              <div
                className={styles.imageDiv}
                style={{ backgroundColor: `${value.bgColor}` }}
              >
                <Image
                  src={value.image}
                  alt=""
                  width={15}
                  height={13}
                  className={styles.imageSelf}
                />
              </div>
              <div className={styles.texts}>
                <p>{value.header}</p>
                <p>{value.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section4;
