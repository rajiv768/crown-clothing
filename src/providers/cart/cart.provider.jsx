import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal
} from './cart.utils';

// with local state initialization, it will be available(through CartProvider assigned in index.js) with
// updated data(through CartProvider) in local state
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0
});

// CartProvider allows update local state inside CartContext
// instead of reducers, we r storing everything on local state of CartProvide compo
// CartProvider is same as normal function compo where we use useState, useEffect & return compo.Only diff is we use CartContext.Provider inside with value being provided
// to children compos.CartProvider is then being wrapped around in index.js so that all these values are accessible in children compos
// children are all those components on which CartProvider is gonna wrap around. We have to use children in CartProvider definition i.e here.
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // filling local state properties with information
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  // changing state values for cartItemsCount & cartTotal whenever there is a change in cartItems
  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  // returning provider with CartContext.Provider & value so that children could use these local state values
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem, // see the CheckoutItem compo where addItem being used like this i.e onClick={() => addItem(cartItem)}
        removeItem, // see the CheckoutItem compo where removeItem being used like this i.e onClick={() => removeItem(cartItem)}
        clearItemFromCart, // see the CheckoutItem compo where clearItemFromCart being used like this i.e onClick={() => clearItemFromCart(cartItem)}
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
