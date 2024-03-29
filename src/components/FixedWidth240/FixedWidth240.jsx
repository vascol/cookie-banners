import React from "react"

import styles from "./FixedWidth240.module.scss"

import image_26 from "../../assets/img/image_26.png"

export const FixedWidth240 = () => {
  return (
    <div className={styles.FixedWidth240}>
      <h5>Fixed Width (240px)</h5>
      <div className={styles.wrapper}>
        <div className={styles.item_1}>
          <img src={image_26} />
          <p>
            We care about your data, and we'd love to use cookies to make your
            experience better.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Privacy Policy</button>
            <button className={styles.btn_2}>Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}
