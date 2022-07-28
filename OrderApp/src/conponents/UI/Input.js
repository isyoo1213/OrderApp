import styles from './Input.module.css';

const Input = (props) => {
  return <div className={styles.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input}/>
    {/* input컴포넌트를 사용하는 외부 위치에서 props를 통해 객체를 가져와 input컴포넌트 내부 속성으로 설정 */}
  </div>
}

export default Input;