import React, { useReducer } from "react";
import CartContext from "./cart-context";

{
  /* CartProvider 컴포넌트는 단순히 CartContext.Provider라는 JSX 컴포넌트에 접근하기 위한 컴포넌트 */
}

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedTotalPrice =
      state.totalPrice + action.value.amount * action.value.price;
    console.log(
      "cartReducer에서 해당 메뉴의 주문 개수에 따른 총 가격 추가 완료"
    );

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.value.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(`장바구니에 이미 존재하는 항목 - ${updatedItem.name} 추가됨`);
    } else {
      updatedItems = state.items.concat(action.value);
      console.log(`장바구니에 새 항목 - ${action.value.name} 추가됨`);
    }
    {
      /*concat()메서드는 새롭게 추가된 새 배열을 반환. 기존의 메모리에 저장된 배열을 수정하면 react에서 인식 오류 가능 */
    }
    console.log("cartReducer에서 해당 메뉴 item으로 추가 완료");

    console.log(`TotalPrice = $${updatedTotalPrice}`);
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedTotalPrice = state.totalPrice - existingCartItem.price
    let updatedItems;
    if(existingCartItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount-1}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice
    }

  }

  if(action.type === 'CLEAR_CART_ITEM'){
    return defaultCartState;
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
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: "CLEAR_CART_ITEM"})
  }

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
