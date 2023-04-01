import styles from "@/styles/Section5.module.css";
import Image from "next/image";

const sect5 = [
  // 1
  {
    image: "/images/section5/one.svg",
    text: "Design",
    rating: "4.7k",
    star: "/images/section5/starIcon.svg",
    views: "32.7k+",
    header: "introduction to user research in ux design",
    timeIcon: "/images/section5/schedule.svg",
    time: "23hrs 50mins",
    lessonIcon: "/images/section5/menu_book.svg",
    lesson: "15 lessons",
    small1: "/images/section5/small1.svg",
    name: "leonard victor",
    price: "$15.00",
  },
  //   2
  {
    image: "/images/section5/two.svg",
    text: "marketing",
    rating: "4.7k",
    star: "/images/section5/starIcon.svg",
    views: "8.7k+",
    header: "introduction to  new marketing audience ",
    timeIcon: "/images/section5/schedule.svg",
    time: "22hrs 30mins",
    lessonIcon: "/images/section5/menu_book.svg",
    lesson: "22 lessons",
    small1: "/images/section5/small2.svg",
    name: "Jeffrey williams",
    price: "$32.00",
  },
  //   3
  {
    image: "/images/section5/three.svg",
    text: "Development",
    rating: "4.7k",
    star: "/images/section5/starIcon.svg",
    views: "12.7k+",
    header: "introduction to html, css & bootstrap",
    timeIcon: "/images/section5/schedule.svg",
    time: "45hrs 50mins",
    lessonIcon: "/images/section5/menu_book.svg",
    lesson: "55 lessons",
    small1: "/images/section5/small3.svg",
    name: "claretta mason",
    price: "$15.00",
  },
  //   4
  {
    image: "/images/section5/four.svg",
    text: "Development",
    rating: "4.7k",
    star: "/images/section5/starIcon.svg",
    views: "32.7k+",
    header: "introduction to javascript, git & GitHub",
    timeIcon: "/images/section5/schedule.svg",
    time: "30hrs 50mins",
    lessonIcon: "/images/section5/menu_book.svg",
    lesson: "22 lessons",
    small1: "/images/section5/small4.svg",
    name: "Jessica duke",
    price: "$45.00",
  },
  //   5
  {
    image: "/images/section5/five.svg",
    text: "marketing",
    rating: "4.7k",
    star: "/images/section5/starIcon.svg",
    views: "4.7k+",
    header: "introduction to outroom  marketing analysis",
    timeIcon: "/images/section5/schedule.svg",
    time: "33hrs 50mins",
    lessonIcon: "/images/section5/menu_book.svg",
    lesson: "26 lessons",
    small1: "/images/section5/small5.svg",
    name: "Samuel jacobs",
    price: "$25.00",
  },
  //   6
  {
    image: "/images/section5/six.svg",
    text: "Marketing",
    rating: "4.7k",
    star: "/images/section5/starIcon.svg",
    views: "15.7k+",
    header: "introduction to live  marketing analysis",
    timeIcon: "/images/section5/schedule.svg",
    time: "10hrs 50mins",
    lessonIcon: "/images/section5/menu_book.svg",
    lesson: "32 lessons",
    small1: "/images/section5/small6.svg",
    name: "adam smith",
    price: "$25.00",
  },
];

function Section5() {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        <div className={styles.texts}>
          <h1>browse our popular courses</h1>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className={styles.highlights}>
          <div>
            <p>All Categories</p>
          </div>
          <div>
            <p>Design</p>
          </div>
          <div>
            <p>Development</p>
          </div>
          <div>
            <p>Marketing</p>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        {sect5.map((value, index) => (
          <div key={index} className={styles.body}>
            {/* first */}
            <div className={styles.topDiv}>
              <div className={styles.imageDiv}>
                <Image
                  src={value.image}
                  alt=""
                  width={400}
                  height={252}
                  className={styles.image}
                />
              </div>
              <div className={styles.textRateDiv}>
                <div className={styles.textDiv}>
                  <p>{value.text}</p>
                </div>
                <div className={styles.rateDiv}>
                  <p>{value.rating}</p>
                  <Image
                    src={value.star}
                    alt=""
                    width={13}
                    height={12}
                    className={styles.star}
                  />
                  <p>({value.views})</p>
                </div>
              </div>
            </div>
            {/* second */}
            <div className={styles.centerDiv}>
              <h1>{value.header}</h1>
              <div className={styles.timeLesson}>
                <div className={styles.timeDiv}>
                  <Image
                    src={value.timeIcon}
                    alt=""
                    width={16}
                    height={16}
                    className={styles.timeIcon}
                  />
                  <p>{value.time}</p>
                </div>
                <div className={styles.lessonDiv}>
                  <Image
                    src={value.lessonIcon}
                    alt=""
                    width={18}
                    height={16}
                    className={styles.lessonIcon}
                  />
                  <p>{value.lesson}</p>
                </div>
              </div>
            </div>
            {/* last */}
            <div className={styles.bottomDiv}>
              <div className={styles.nameDiv}>
                <Image
                  src={value.small1}
                  alt=""
                  width={35}
                  height={35}
                  className={styles.small1}
                />
                <p>{value.name}</p>
              </div>
              <p className={styles.price}>{value.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonDiv}>
        <button>Explore All Courses</button>
      </div>
    </section>
  );
}

export default Section5;
