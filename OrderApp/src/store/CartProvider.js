import React, { useReducer } from "react";
import CartContext from "./cart-context";

{
  /* CartProvider 컴포넌트는 단순히 CartContext.Provider라는 JSX 컴포넌트에 접근하기 위한 컴포넌트 */
}

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item);
    {
      /*concat()메서드는 새롭게 추가된 새 배열을 반환. 기존의 메모리에 저장된 배열을 수정하면 react에서 인식 오류 가능 */
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", value: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "remove_CART_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
