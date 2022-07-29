import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return <form className={styles.form}>
    <Input label='Amount' input={{
      id: 'amount_of_'+props.id,
      type: 'number',
      min: '1',
      max: '99',
      step: '1',
      defaultValue: '1'
    }} />
    {/* input의 attributes는 모두 '' 문자열로 표기함 */}
    <button>+ Add</button>
  </form>
}

export default MealItemForm;