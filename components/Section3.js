import styles from "@/styles/Section3.module.css";
import Image from "next/image";

function Section3() {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        {/* top */}
        <div className={styles.up}>
          <div className={styles.high}>
            <Image
              src={"/images/section3/nearHigh.svg"}
              alt=""
              width={40}
              height={60}
              className={styles.nearHigh}
            />
            <h1>High quality video, audio & live classes</h1>
          </div>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <button className={styles.upButton}>View Courses</button>
        </div>

        {/* bottom */}
        <div className={styles.middle}>
          <div className={styles.audioBg}>
            <div className={styles.audioImageBg}>
              <Image
                src={"/images/section3/audio.svg"}
                alt=""
                width={6.6}
                height={6.41}
                className={styles.audioImage}
              />
            </div>
            <p>Audio Classes</p>
          </div>
          <div className={styles.liveBg}>
            <div className={styles.liveImageBg}>
              <Image
                src={"/images/section3/antenna.svg"}
                alt=""
                width={8.8}
                height={8.8}
                className={styles.liveImage}
              />
            </div>
            <p>Live Classes</p>
          </div>
          <div className={styles.recordedBg}>
            <div className={styles.recordedImageBg}>
              <Image
                src={"/images/section3/autoplay.svg"}
                alt=""
                width={8.04}
                height={8.04}
                className={styles.recordedImage}
              />
            </div>
            <p>Recorded Classes</p>
          </div>
          <div className={styles.fiftyBg}>
            <div className={styles.fiftyImageBg}>
              <Image
                src={"/images/section3/description.svg"}
                alt=""
                width={5.86}
                height={7.33}
                className={styles.fiftyImage}
              />
            </div>
            <p>50+ Notes</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        {/* <div className={styles.bottomInner}> */}
        <div className={styles.male}>
          <Image
            src={"/images/section3/up-image.svg"}
            alt=""
            width={526}
            height={392}
            className={styles.maleImage}
          />
        </div>
        <div className={styles.enrolled}>
          <p>255k+ enrolled students</p>
          <div className={styles.pics}>
            <Image src={"/images/group1.svg"} alt="" width={16} height={16} />
            <Image src={"/images/group2.svg"} alt="" width={16} height={16} />
            <Image src={"/images/group3.svg"} alt="" width={16} height={16} />
            <Image src={"/images/group4.svg"} alt="" width={16} height={16} />
            <Image src={"/images/group5.svg"} alt="" width={16} height={16} />
          </div>
        </div>
        {/* put pokerSpots in a div */}
        <div className={styles.pokerDiv}>
          <Image
            src={"/images/section3/poker-spots.svg"}
            alt=""
            width={91}
            height={125}
            className={styles.pokerSpots}
          />
        </div>

        <div className={styles.female}>
          <Image
            src={"/images/section3/down-image.svg"}
            alt=""
            width={300}
            height={190}
            className={styles.femaleImage}
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Section3;
