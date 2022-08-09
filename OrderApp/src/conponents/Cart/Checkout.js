import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isFiveChars = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    postal: true,
    address: true,
    detailAddress: true,
  });

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

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredpostalIsValid = isFiveChars(enteredPostal);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredDetailAddressIsValid = !isEmpty(enteredDetailAddress);

    setFormInputsValidity({
      name: enteredNameIsValid,
      postal: enteredpostalIsValid,
      address: enteredAddressIsValid,
      detailAddress: enteredDetailAddressIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredpostalIsValid &&
      enteredAddressIsValid &&
      enteredDetailAddressIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      postal: enteredPostal,
      address: enteredAddress,
      detailAddress: enteredDetailAddress
    });
  };

  const inputControlStyles = (inputValidity) => {
    return `${styles.control} ${inputValidity ? '' : styles.invalid}`
  }

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={inputControlStyles(formInputsValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid Name!</p>}
      </div>
      <div className={inputControlStyles(formInputsValidity.postal)} >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {/* default null을 피하기 위해 text 타입으로 설정 */}
        {!formInputsValidity.postal && <p>Please enter a valid Postal Code!</p>}
      </div>
      <div className={inputControlStyles(formInputsValidity.address)}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Please enter a valid Address!</p>}
      </div>
      <div className={inputControlStyles(formInputsValidity.detailAddress)}>
        <label htmlFor="detailAddress">Detail Address</label>
        <input type="text" id="detailAddress" ref={detailAddressInputRef} />
        {!formInputsValidity.detailAddress && (
          <p>Please enter a valid Detail Address!</p>
        )}
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
