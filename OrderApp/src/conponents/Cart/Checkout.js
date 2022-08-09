import React from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
        {/* default null을 피하기 위해 text 타입으로 설정 */}
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
        {/* default null을 피하기 위해 text 타입으로 설정 */}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {/* 두 버튼 중 confirm만 submit가능하도록 type으로 button을 통해 제출하지 못하게 함 */}
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
