import React from "react"

import styles from "./FixedWidth190.module.scss"

import image_27 from "../../assets/img/image_27.png"
import image_28 from "../../assets/img/image_28.png"

export const FixedWidth190 = () => {
  return (
    <div className={styles.FixedWidth190}>
      <h5>Fixed Width (190px)</h5>
      <div className={styles.wrapper}>
        <div className={styles.item_1}>
          <img className={styles.close_img} src={image_28} />
          <img className={styles.cookie_img} src={image_27} />
          <p>
            Our lawyers advised us to tell you that we use cookies to improve
            user experience.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>I like cookies</button>
          </div>
        </div>
      </div>
    </div>
  )
}
