import React from "react"

import styles from "./FixedWidth480.module.scss"

import image_12 from "../../assets/img/image_12.png"
import image_13 from "../../assets/img/image_13.png"
import image_14 from "../../assets/img/image_14.png"
import image_15 from "../../assets/img/image_15.png"
import image_17 from "../../assets/img/image_17.png"

export const FixedWidth480 = () => {
  return (
    <div className={styles.FixedWidth480}>
      <h5>Fixed Width (480px)</h5>
      <div className={styles.wrapper}>
        <div className={styles.item_1}>
          <div className={styles.content}>
            <img src={image_12} />
            <h1>Cookie consent</h1>
            <p>
              We use necessary cookies to make our site work. We’d like to set
              additional cookies to understand site usage, make site
              improvements and to remember your settings. We also use cookies
              set by other sites to help deliver content from their services.
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept & continue</button>
            <button className={styles.btn_2}>Decline cookies</button>
          </div>
        </div>
        <div className={styles.item_2}>
          <p>
            We serve cookies on this site to analyze traffic, remember your
            preferences, and optimize your experience.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>More Details</button>
            <button className={styles.btn_2}>Ok</button>
          </div>
        </div>
        <div className={styles.item_3}>
          <img src={image_13} />
          <div className={styles.content}>
            <h1>Cookie policy</h1>
            <p>
              This site uses cookies to make it work properly, help us to
              understand how it’s used and to display content that is more
              relevant to you. For more information, see our{" "}
              <a href="#">Cookie Policy</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept</button>
            <button className={styles.btn_2}>Reject</button>
          </div>
        </div>
        <div className={styles.item_4}>
          <div className={styles.content}>
            <h1>Cookies on LT Sites</h1>
            <div className={styles.divider}></div>
            <p>
              We use <a href="#">cookies</a> for a number of reasons, such as
              keeping our sites reliable and secure, personalising content and
              ads, providing social media features and to analyse how our Sites
              are used.
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>
              <a href="#">Manage cookies</a>
            </button>
            <button className={styles.btn_2}>Accept & continue</button>
          </div>
        </div>
        <div className={styles.item_5}>
          <img src={image_14} />
          <div className={styles.content}>
            <h1>Cookie Settings</h1>
            <p>
              By clicking “Accept All Cookies”, you agree to the storing of
              cookies on your device to enhance site navigation, analyze site
              usage and assist in our marketing efforts.
              <a href="#"> More info</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept All Cookies</button>
            <button className={styles.btn_2}>Cookie Settings</button>
          </div>
        </div>
        <div className={styles.item_6}>
          <span>CLOSE</span>
          <div className={styles.content}>
            <h1>Cookies give you a personalised experience</h1>
            <p>
              We use <a href="#">cookies</a> for a number of reasons, such as
              keeping our sites reliable and secure, personalizing content and
              ads, providing social media features and to analyze how our Sites
              are used.
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>
              <a href="#">Manage cookies</a>
            </button>
            <button className={styles.btn_2}>Accept & continue</button>
          </div>
        </div>
        <div className={styles.item_7}>
          <div className={styles.content}>
            <img src={image_15} />
            <p>
              This website uses cookies. <a href="#"> Learn more</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept</button>
          </div>
        </div>
        <div className={styles.item_8}>
          <img src={image_17} />
          <div className={styles.content}>
            <h1>WE CARE ABOUT YOUR PRIVACY</h1>
            <p>
              We use cookies and similar technologies to provide the best
              experience on our website.<a href="#"> Privacy Policy</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}
