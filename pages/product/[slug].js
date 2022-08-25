import { useQuery } from "urql";
import { GET_SINGLE_PRODUCT } from "../../lib/query";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  SingleProductImage,
  SingleProductLayout,
  SingleProductInfo,
  Quantity,
  PurchaseButton,
} from "../../styles/ProductDetails";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { Loader } from "../../styles/Loader";
import { useContext } from "react";
import CartContext from "../../lib/context";

const { motion } = require("framer-motion");

const ProductDetails = () => {
  const { increaseQuantity, decreaseQuantity, itemQuantity, addItemToCart } =
    useContext(CartContext);
  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_SINGLE_PRODUCT,
    variables: { slug: `${query.slug}` },
  });

  const { data, fetching, error } = results;
  if (fetching) return <Loader />;
  if (error) return <p>Somthing went wrong {error.message}</p>;
  const { title, description, image } = data.products.data[0].attributes;
  const selectedProduct = data.products.data[0].attributes;

  return (
    <>
      <SingleProductLayout>
        <SingleProductImage>
          <Image
            src={image.data.attributes.formats.medium.url}
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </SingleProductImage>

        <SingleProductInfo>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div>
            <span>Quantity</span>
            <Quantity>
              <button onClick={increaseQuantity}>
                <BiPlusCircle size={25} />
              </button>
              <p>{itemQuantity}</p>
              <button
                onClick={() => {
                  if (itemQuantity > 1) {
                    decreaseQuantity();
                  }
                }}
              >
                <BiMinusCircle size={25} />
              </button>
            </Quantity>
          </div>
          <PurchaseButton
            onClick={() => addItemToCart(selectedProduct, itemQuantity)}
          >
            Add to Cart
          </PurchaseButton>
        </SingleProductInfo>
      </SingleProductLayout>
    </>
  );
};
export default ProductDetails;
