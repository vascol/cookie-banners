import React from "react"

import styles from "./FixedWidth560.module.scss"

import image_9 from "../../assets/img/image_9.png"
import image_10 from "../../assets/img/image_10.png"
import image_11 from "../../assets/img/image_11.png"

export const FixedWidth560 = () => {
  return (
    <div className={styles.FixedWidth560}>
      <h5>Fixed Width (560px)</h5>
      <div className={styles.wrapper}>
        <div className={styles.item_1}>
          <div className={styles.content}>
            <img src={image_9} />
            <p>
              We use cookies to ensure that we give you the best experience on
              our website. <span> Read cookies policies.</span>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Decline</button>
            <button className={styles.btn_2}>Allow</button>
          </div>
        </div>
        <div className={styles.item_2}>
          <p>
            <span>We use cookies</span> to analyze our traffic and create a
            smooth user experience.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Reject</button>
            <button className={styles.btn_2}>Allow</button>
          </div>
        </div>
        <div className={styles.item_3}>
          <p>
            App uses cookies to personalize your experience on our website. By
            continuing to use this site, you agree to our{" "}
            <a href="#">cookie policy.</a>
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Okay</button>
          </div>
        </div>
        <div className={styles.item_4}>
          <div className={styles.content}>
            <img src={image_10} />
            <p>
              We use third-party <a href="#">cookies</a> to provide you the best
              user experience and for performance analytics.
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Deny</button>
            <button className={styles.btn_2}>Accept</button>
          </div>
        </div>
        <div className={styles.item_5}>
          <div className={styles.content}>
            <h1>This website uses cookies</h1>
            <p>
              We use cookies to make sure this website can function. By
              continuing to browse on this website, you agree to our use of
              cookies.
            </p>
          </div>
          <div className={styles.link}>
            <a href="#">Continue to website</a>
            <img src={image_11} />
          </div>
        </div>
        <div className={styles.item_6}>
          <div className={styles.content}>
            <p>
              By clicking Ok and using this site you accept our{" "}
              <a href="#">Privacy Policy.</a>
            </p>
            <p>
              By signing up to Acme, you also accept our{" "}
              <a href="#">Terms of Service.</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Ok!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
