import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  {
    /* React.forwardRef()의 인자로 컴포넌트를 취하고 >> 컴포넌트는 두 번째 인자로 ref를 사용할 수 있게 됨 */
  }
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* input컴포넌트를 사용하는 외부 위치에서 props를 통해 객체를 가져와 input컴포넌트 내부 속성으로 설정 */}
    </div>
  );
});

export default Input;
