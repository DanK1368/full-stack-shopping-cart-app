import Image from "next/image";
import {
  ImageContainer,
  ItemContainer,
  InfoContainer,
  QuantityContainer,
  Cards,
} from "../styles/CartItemStyle";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../lib/context";

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function CartItem({ ...item }) {
  const { addItemToCart, removeItem } = useContext(CartContext);

  return (
    <ItemContainer variants={card} layout>
      <ImageContainer>
        <Image
          src={item.image.data.attributes.formats.thumbnail.url}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <InfoContainer>
        <QuantityContainer>
          <div>
            <button onClick={() => addItemToCart(item, 1)}>
              <AiFillPlusCircle />
            </button>
            <span>{item.quantity} x</span>
            <button onClick={() => removeItem(item)}>
              <AiFillMinusCircle />
            </button>
          </div>
        </QuantityContainer>

        <div>
          <h3>{item.title}</h3>
          <h3>CHF {item.price.toFixed(2)}</h3>
        </div>
      </InfoContainer>
    </ItemContainer>
  );
}
