import React from "react"

import styles from "./FullWidth.module.scss"

import image_1 from "../../assets/img/image_1.png"
import image_2 from "../../assets/img/image_2.png"
import image_3 from "../../assets/img/image_3.png"

export const FullWidth = () => {
  return (
    <div className={styles.full_width}>
      <h5>Full Width</h5>
      <div className={styles.item_1}>
        <p>
          By clicking “Accept All Cookies”, you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts. Cookie Setting Accept All Cookies
        </p>
        <div className={styles.btn}>
          <button className={styles.btn_1}>Cookie Setting</button>
          <button className={styles.btn_2}>Accept All Cookies</button>
        </div>
      </div>
      <div className={styles.item_2}>
        <img src={image_1} alt="img" />
        <p>
          We use cookies to enhance your user experience. By continuing to visit
          this site you agree to our use of cookies.
        </p>
        <img src={image_2} alt="img" />
      </div>
      <div className={styles.item_3}>
        <p>
          By clicking “Accept All Cookies”, you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts.
        </p>
        <div className={styles.btn}>
          <button className={styles.btn_1}>Cookie Setting</button>
          <button className={styles.btn_2}>Accept All Cookies</button>
        </div>
        <img className={styles.close} src={image_3} />
      </div>
    </div>
  )
}
