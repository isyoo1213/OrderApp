import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  {
    /* Input은 컴포넌트이므로 ref를 바로 사용할 수 없음 >> forward ref 사용 */
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    {
      /* ref를 통해 가져오는 value 속성은 언제나 '문자열' >> input의 type이 number라 하더라도 가져오는 값은 문자열 */
    }
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 99
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(`주문된 수량 : ${enteredAmountNumber}개`)
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_of_" + props.id,
          type: "number",
          min: "1",
          max: "99",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* input의 attributes는 모두 '' 문자열로 표기함 */}
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1~99)</p>}
    </form>
  );
};

export default MealItemForm;
