import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  {
    /* cartCtx가 CartProvider컴포넌트에서 업데이트 될 때마다 리액트는 컴포넌트를 재평가 */
  }
  {
    /* CartContext.Provider 컴포넌트는 CartContext에 value를 전달한 컴포넌트 
      >> 이후 app.js 하위에서 context를 사용할 시, useContext(CartContext)를 통해 연결..? */
  }

  console.log(cartCtx.items);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    console.log('HeaderCartButton에서 카트 내 아이템 갯수 확인 함수 진입');
    return currentNumber + item.amount;
  }, 0);

  {
    /* 3인분이든 5인분이든 해당 item이 하나로 카운트되기 위해 length가 아닌 reduce 사용 */
  }
  {
    /* reduce()에서 첫 인자 - 함수 / 두 번째 인자 - 시작값 
      첫 인자에서 두 개의 인자 필요 - JS에서 reduce를 호출하는 배열의 모든 항목에 대해 자동으로 설정*/
  }
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
