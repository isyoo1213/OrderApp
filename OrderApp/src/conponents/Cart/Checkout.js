import React, { useRef } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const postalInputRef = useRef();
  const addressInputRef = useRef();
  const detailAddressInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDetailAddress = detailAddressInputRef.current.value;

  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {/* default null을 피하기 위해 text 타입으로 설정 */}
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="detailAddress">Detail Address</label>
        <input type="text" id="detailAddress" ref={detailAddressInputRef} />
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
