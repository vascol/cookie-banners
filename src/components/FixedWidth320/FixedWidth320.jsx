import React from "react"

import styles from "./FixedWidth320.module.scss"

import image_22 from "../../assets/img/image_22.png"
import image_23 from "../../assets/img/image_23.png"
import image_24 from "../../assets/img/image_24.png"
import image_25 from "../../assets/img/image_25.png"

export const FixedWidth320 = () => {
  return (
    <div className={styles.FixedWidth320}>
      <h5>Fixed Width (320px)</h5>
      <div className={styles.wrapper}>
        <div className={styles.item_1}>
          <div className={styles.content}>
            <h1>Cookies</h1>
            <p>
              We use cookies to ensure that we give you the best experience on
              our website.
            </p>
            <div className={styles.btn}>
              <button className={styles.btn_1}>Accept</button>
            </div>
          </div>
        </div>
        <div className={styles.item_2}>
          <p>
            We care about your data, and we'd love to use cookies to make your
            experience better.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Privacy Policy</button>
            <button className={styles.btn_2}>Accept</button>
          </div>
        </div>
        <div className={styles.item_3}>
          <p>
            By browsing this website, you accept our cookie policy{" "}
            <a href="#">cookie policy</a>.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Deny</button>
            <button className={styles.btn_2}>Accept</button>
          </div>
        </div>
        <div className={styles.item_4}>
          <img className={styles.img} src={image_22} />
          <p>By browsing this website, you accept our cookie policy.</p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>
              <img src={image_23} />
            </button>
          </div>
        </div>
        <div className={styles.item_5}>
          <p>
            🍪 By using this website, you agree to our use of cookies to help it
            run effectively and provide you a zen experience. Don’t worry, we’ll
            burn off cookies at your next class!{" "}
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Namaste 🙏🏼</button>
          </div>
        </div>
        <div className={styles.item_6}>
          <img className={styles.close_img} src={image_24} />
          <div className={styles.content}>
            <h1>
              This website use cookies <img src={image_25} />
            </h1>
            <p>
              We use cookies to personalize content and ads, and analyze our
              traffic. We also share information about your use of the website
              with our social media, advertising, and analytics partners. You
              can learn more about the cookies we use from our{" "}
              <a href="#">Privacy Notice</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>ACCEPT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
