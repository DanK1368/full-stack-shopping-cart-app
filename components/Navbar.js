import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Header, Cart, NavItems } from "../styles/NavStyles";
import CartContext from "../lib/context";
import { useContext } from "react";
import CartModal from "./CartModal";
import User from "../components/User";
import { useUser } from "@auth0/nextjs-auth0";

const { AnimatePresence, motion } = require("framer-motion");

export default function Navbar() {
  const { showCart, setShowCart, cartTotal } = useContext(CartContext);
  const { user, error, isLoading } = useUser();

  return (
    <Header>
      <div>
        <Link href={"/"}>JUICE IT</Link>
      </div>
      <NavItems>
        <User />
        <Cart>
          {cartTotal > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {cartTotal}
            </motion.span>
          )}
          <button
            aria-label="Shopping cart button that will display all products added to the cart"
            onClick={() => setShowCart(!showCart)}
          >
            <FiShoppingBag size={20} />
          </button>
          <h3>Your Cart</h3>
        </Cart>
      </NavItems>
      <AnimatePresence>{showCart && <CartModal />}</AnimatePresence>
    </Header>
  );
}
