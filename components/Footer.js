import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className={styles.container}>
      {/* first */}
      <div className={styles.first}>
        <h1>Tech Time</h1>
        <p>reach out to us on any of our social media networks</p>
        <div className={styles.iconsDiv}>
          <Image
            src={"/images/footer/facebook.svg"}
            alt="facebook"
            width={32}
            height={31}
          />
          <Image
            src={"/images/footer/twitter.svg"}
            alt="facebook"
            width={31}
            height={25}
          />
          <BsYoutube className={styles.youtube} />
          <Image
            src={"/images/footer/instagram.svg"}
            alt="facebook"
            width={32}
            height={32}
          />
          <Image
            src={"/images/footer/owl.svg"}
            alt="facebook"
            width={32}
            height={24}
          />
        </div>
      </div>
      {/* second */}
      <div className={styles.second}>
        <h1>useful links</h1>
        <p>home</p>
        <p>about us</p>
        <p>our courses</p>
        <p>our courses</p>
        <p>our community</p>
      </div>
      {/* third */}
      <div className={styles.third}>
        <h1>community</h1>
        <p>help centers</p>
        <p>partners</p>
        <p>suggestion</p>
        <p>blog</p>
        <p>newsletter</p>
      </div>
      {/* fourth */}
      <div className={styles.fourth}>
        <h1>subscribe us</h1>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="nft123@gmail.com" />
          <button>Send Message</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
