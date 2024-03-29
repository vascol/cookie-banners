import React from "react"

import styles from "./FixedWidth1000.module.scss"

import image_16 from "../../assets/img/image_16.png"
import image_5 from "../../assets/img/image_5.png"
import image_6 from "../../assets/img/image_6.png"
import image_7 from "../../assets/img/image_7.png"

export const FixedWidth1000 = () => {
  return (
    <div className={styles.FixedWidth1000}>
      <h5>Fixed Width (1000px)</h5>
      <div className={styles.item_1}>
        <img src={image_16} />
        <p>
          <span> We use cookies in the delivery of our services.</span> To learn
          about the cookies we use and information about your preferences and
          opt-out choices, please click here. By using our platform you agree to
          our use of cookies.
        </p>
        <div className={styles.btn}>
          <button className={styles.btn_1}>Decline</button>
          <button className={styles.btn_2}>Allow</button>
        </div>
      </div>
      <div className={styles.item_2}>
        <p>
          By continuing to use this site you consent to the use of cookies in
          accordance with our cookie policy.
        </p>
        <div className={styles.img}>
          <img src={image_5} />
        </div>
      </div>
      <div className={styles.item_3}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Your Privacy</h1>
            <img src={image_6} />
          </div>
          <p>
            We use cookies and similar technologies to help personalise content,
            tailor and measure ads, and provide a better experience. By clicking
            OK or turning an option on in Cookie Preferences, you agree to this,
            as outlined in our Cookie Policy. To change preferences or withdraw
            consent, please update your Cookie Preferences.
          </p>
        </div>
        <div className={styles.btn}>
          <button className={styles.btn_1}>Preferences</button>
          <button className={styles.btn_2}>OK</button>
        </div>
      </div>
      <div className={styles.item_4}>
        <div className={styles.content}>
          <img src={image_7} />
          <p>
            We use cookies on this site to analyze traffic, remember your
            preferences, and optimize your experience. <span>Learn more</span>
          </p>
        </div>
        <div className={styles.btn}>
          <div className={styles.btn_1}>Got it</div>
        </div>
      </div>
    </div>
  )
}
