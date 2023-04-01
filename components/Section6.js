import styles from "@/styles/Section6.module.css";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sect6 = [
  {
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    image: "/images/section6/image1.svg",
    name: "Bella Moon",
    title: "Product Designer",
  },
  {
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    image: "/images/section6/image2.svg",
    name: "Samuel Fortune",
    title: "Product Designer",
  },
  {
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    image: "/images/section6/image3.svg",
    name: "Bryce Jason",
    title: "Product Designer",
  },
  {
    text: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    image: "/images/section6/image4.svg",
    name: "Adam Smith",
    title: "Product Designer",
  },
];

function Section6() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h1>what our clients are saying</h1>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>

      {/* slider section */}
      <Carousel
        showDots={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {sect6.map((value, index) => (
          <div key={index} className={styles.slider}>
            <div className={styles.body}>
              <div className={styles.top}>
                <p>{value.text}</p>
              </div>
              <div className={styles.bottom}>
                <div className={styles.imageDiv}>
                  <Image src={value.image} alt="" width={48} height={48} />
                </div>
                <div className={styles.nameTitle}>
                  <p>{value.name}</p>
                  <p>{value.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Section6;
