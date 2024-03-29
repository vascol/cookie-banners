import React from "react"

import styles from "./FixedWidth840.module.scss"

export const FixedWidth840 = () => {
  return (
    <div className={styles.FixedWidth840}>
      <h5>Fixed Width (840px)</h5>
      <div className={styles.item_1}>
        <p>
          This site is using cookies to improve your visiting experience.{" "}
          <a href="#">Learn more</a>
        </p>
        <div className={styles.btn}>
          <button className={styles.btn_1}>SETTINGS</button>
          <button className={styles.btn_2}>ACCEPT COOKIES</button>
        </div>
      </div>
    </div>
  )
}
