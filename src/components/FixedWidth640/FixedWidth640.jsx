import React from "react"

import styles from "./FixedWidth640.module.scss"

import image_8 from "../../assets/img/image_8.png"

export const FixedWidth640 = () => {
  return (
    <div className={styles.FixedWidth640}>
      <h5>Fixed Width (640px)</h5>
      <div className={styles.item_1}>
        <div className={styles.content}>
          <img src={image_8} />
          <div>
            <h1>We use cookies</h1>
            <p>
              to give you a better experience. By using our website you agree to
              our policies.
            </p>
          </div>
        </div>
        <div className={styles.btn}>
          <button className={styles.btn_1}>Sweet!</button>
          <button className={styles.btn_2}>Sorry, I’m on a diet</button>
        </div>
      </div>
      <div className={styles.item_2}>
        <p>
          We use cookies to improve our service. <a href="#"> Learn more</a>
        </p>
        <div className={styles.btn}>
          <button className={styles.btn_1}>OK</button>
          <button className={styles.btn_2}>Don't Track Me</button>
        </div>
      </div>
    </div>
  )
}
