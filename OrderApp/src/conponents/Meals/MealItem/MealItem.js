import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  {
    /* useContext에 CartContext 객체를 넘김으로써 연결 생성 */
  }

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    console.log(`addToCartHandler에 ${props.name} 메뉴가 ${amount}개 주문 요청 완료`);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(`addToCartHandler에서 ${props.name} 메뉴가 ${amount}개 주문 완료`);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
