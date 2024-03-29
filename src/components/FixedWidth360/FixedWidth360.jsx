import React from "react"

import styles from "./FixedWidth360.module.scss"

import image_18 from "../../assets/img/image_18.png"
import image_19 from "../../assets/img/image_19.png"
import image_20 from "../../assets/img/image_20.png"
import image_21 from "../../assets/img/image_21.png"

export const FixedWidth360 = () => {
  return (
    <div className={styles.FixedWidth360}>
      <h5>Fixed Width (360px)</h5>
      <div className={styles.wrapper}>
        <div className={styles.item_1}>
          <div className={styles.content}>
            <h1>🍪 Cookie Notice</h1>
            <p>
              We use cookies to learn how you interact with our content, and
              show you relevant content and ads based on your browsing history.
              You can adjust your settings below. Here’s our{" "}
              <a href="#">policy</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Manage your preferences</button>
            <button className={styles.btn_2}>Accept</button>
          </div>
        </div>
        <div className={styles.item_2}>
          <img src={image_18} />
          <div className={styles.content}>
            <h1>Cookie settings</h1>
            <p>
              We use our own cookies so that we can show you this website and
              understand how you use them to improve the services we offer.
            </p>
            <a href="#">Imprint</a>
            <a href="#">Data protection</a>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Manage cookies</button>
            <button className={styles.btn_2}>Accept all</button>
          </div>
        </div>
        <div className={styles.item_3}>
          <div className={styles.content}>
            <h1>🍪 Cookie settings</h1>
            <p>
              We use our own cookies so that we can show you this website and
              understand how you use them to improve the services we offer
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Manage cookies</button>
            <button className={styles.btn_2}>Accept all</button>
          </div>
        </div>
        <div className={styles.item_4}>
          <div className={styles.content}>
            <h1>
              <img src={image_19} /> Cookie settings
            </h1>
            <p>
              Our website use cookies. By continuing, we assume your permission
              to deploy cookies as detailed in our
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept cookies</button>
            <button className={styles.btn_2}>Decline</button>
          </div>
        </div>
        <div className={styles.item_5}>
          <p>
            This website uses only technical necessary cookies.
            <a href="#"> Learn more</a>
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Got it</button>
          </div>
        </div>
        <div className={styles.item_6}>
          <p>
            {" "}
            <div></div> Our website uses cookies.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Cookie Settings</button>
            <button className={styles.btn_2}>ACCEPT</button>
          </div>
        </div>
        <div className={styles.item_7}>
          <div className={styles.content}>
            <h1>🍪 We use cookies!</h1>
            <p>
              Hi, this website uses essential cookies to ensure its proper
              operation and tracking cookies to understand how you interact with
              it. The latter will be set only after consent.{" "}
              <a href="#">Let me choose</a>
            </p>
            <p>Closing this modal default settings will be saved.</p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept all</button>
            <button className={styles.btn_2}>Reject all</button>
            <button className={styles.btn_3}>Preferences</button>
            <button className={styles.btn_4}>Close</button>
          </div>
        </div>
        <div className={styles.item_8}>
          <div className={styles.content}>
            <h1>Cookies give you a personalised experience</h1>
            <p>
              We’re not talking about the crunchy, tasty kind. These cookies
              help us keep our website safe, give you a better experience and
              show more relevant ads. We won’t turn them on unless you accept.
              Want to know more or adjust your preferences?
            </p>
            <p>Closing this modal default settings will be saved.</p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Allow all cookies</button>
            <button className={styles.btn_2}>Reject all cookies</button>
            <button className={styles.btn_3}>Manage Cookies</button>
          </div>
        </div>
        <div className={styles.item_9}>
          <h1>Cookie Settings</h1>
          <p>
            This site uses cookies. By proceeding, you agree to our Privacy
            Policy, including the use of cookies and their tracking
            technologies.
          </p>
          <div className={styles.btn}>
            <button className={styles.btn_1}>OK, GOT IT!</button>
          </div>
        </div>
        <div className={styles.item_10}>
          <div className={styles.content}>
            <h1>Are you ok with optional cookies?</h1>
            <p>
              Cookies let us give you a better experience and improve our
              products. <a href="#">Read our cookie policy.</a>
            </p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_1}>Accept</button>
            <button className={styles.btn_2}>Decline</button>
          </div>
        </div>
        <div className={styles.item_11}>
          <img className={styles.close} src={image_20} />
          <img className={styles.cookie_img} src={image_21} />
          <div className={styles.content}>
            <p>
              We use cookies to personalize your experience. By continuing to
              visit this website you agree to our use of cookies.{" "}
              <a href="#">Learn More</a>
            </p>
            <div className={styles.btn}>
              <button className={styles.btn_1}>GOT it!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
