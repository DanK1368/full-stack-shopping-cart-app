import React, { createContext, useContext, useState } from "react";
import ProductDetails from "../pages/product/[slug]";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Increase cart quantity
  const increaseQuantity = () => {
    setItemQuantity(prevQuantity => prevQuantity + 1);
  };

  // Increase cart quantity
  const decreaseQuantity = () => {
    setItemQuantity(prevQuantity => prevQuantity - 1);
  };

  // Add Item to Cart
  const addItemToCart = (selectedItem, quantity) => {
    // check if added item is inside the cart already: if yes, just increase qty, else add the entire item
    const itemExists = cartItems.find(item => item.slug === selectedItem.slug);
    if (itemExists) {
      setCartItems(
        cartItems.map(item =>
          item.slug === selectedItem.slug
            ? { ...itemExists, quantity: itemExists.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...selectedItem, quantity: quantity }]);
    }

    // Once we add a number of items to the cart, the quantity reverts back to 1
    setItemQuantity(1);

    // Increase total items in the cart
    setCartTotal(prevTotal => prevTotal + quantity);
  };

  // Decrease Item in Cart, and remove when quantity < 1
  const removeItem = selectedItem => {
    const itemExists = cartItems.find(item => item.slug === selectedItem.slug);

    if (itemExists.quantity === 1) {
      setCartItems(cartItems.filter(item => item.slug !== selectedItem.slug));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.slug === selectedItem.slug
            ? { ...itemExists, quantity: itemExists.quantity - 1 }
            : item
        )
      );
    }

    // Decrease total items in the cart
    setCartTotal(prevTotal => prevTotal - 1);
  };

  // Clear cart of all the items

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  // calculate total price in the cart

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((total, currItem) => {
      const totalItemPrice = currItem.quantity * currItem.price;

      total = total + totalItemPrice;

      return total;
    }, 0);

    setTotalAmount(total);
  };

  return (
    <CartContext.Provider
      value={{
        itemQuantity,
        showCart,
        cartItems,
        showCart,
        cartTotal,
        totalAmount,
        setShowCart,
        increaseQuantity,
        decreaseQuantity,
        addItemToCart,
        removeItem,
        clearCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
