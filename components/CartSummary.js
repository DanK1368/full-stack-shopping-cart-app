import { useContext } from "react";
import CartContext from "../lib/context";
import {
  CartContainer,
  InnerContainer,
  Heading,
  Footer,
  CartButton,
} from "../styles/CartStyles";

export default function CartSummary() {
  const { cartItems, addItemsToCart } = useContext(CartContext);

  return (
    <CartContainer>
      <InnerContainer>
        <Heading>
          <h2>Your Cart</h2>
        </Heading>

        {/* {cart.map(item => (
            <CartItem key={item.id} {...item} />
          ))} */}
        <Footer>
          <div>
            <p>Total</p>
            <p>$ 399</p>
          </div>
          <CartButton>Empty Cart</CartButton>
        </Footer>
      </InnerContainer>
    </CartContainer>
  );
}
