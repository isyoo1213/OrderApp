import CartContext from "./cart-context";

{
  /* CartProvider 컴포넌트는 단순히 CartContext.Provider라는 JSX 컴포넌트에 접근하기 위한 컴포넌트 */
}
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
