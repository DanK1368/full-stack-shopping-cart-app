import { useContext, useEffect } from "react";
import CartContext from "../lib/context";
import getStripe from "../lib/getStripe";
import {
  CartContainer,
  InnerContainer,
  Heading,
  Footer,
  CartButton,
  EmptyCartMessage,
  CheckOutButton,
  Cards,
} from "../styles/CartModalStyles";
import CartItem from "./CartItem";

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export default function CartModal() {
  const {
    cartItems,
    clearCart,
    showCart,
    setShowCart,
    calculateTotalPrice,
    totalAmount,
  } = useContext(CartContext);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleStripeCheckout = async () => {
    const stripe = await getStripe();

    const resp = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    const data = await resp.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(!showCart)}
    >
      <InnerContainer
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={e => e.stopPropagation()}
      >
        <Heading>
          <h2>Your Cart</h2>
        </Heading>

        <Cards variants={cards} animate="show" initial="hidden" layout>
          {cartItems.map(item => (
            <CartItem key={item.slug} {...item} />
          ))}
        </Cards>

        {cartItems.length < 1 ? (
          <EmptyCartMessage
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            No items in your cart
          </EmptyCartMessage>
        ) : (
          <Footer>
            <div>
              <p>Total</p>
              <p>$ {totalAmount.toFixed(2)}</p>
            </div>
            <div>
              <CartButton onClick={clearCart}>Empty Cart</CartButton>
              <CheckOutButton onClick={handleStripeCheckout}>
                Purchase
              </CheckOutButton>
            </div>
          </Footer>
        )}
      </InnerContainer>
    </CartContainer>
  );
}
