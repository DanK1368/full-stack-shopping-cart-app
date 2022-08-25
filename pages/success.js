import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  ImageContainer,
  BodyContainer,
  ButtonContainer,
  OrderDetails,
  Summary,
  Heading,
} from "../styles/SuccessStyle";
import illustration from "../public/assets/checkoutSuccess.svg";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );

  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();

  return (
    <Container>
      <BodyContainer
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <OrderDetails>
          <Heading>
            <h1>
              <span>Thank you</span> for your order!
            </h1>
            <h2>A receipt has been sent to</h2>
            <h2>{order.customer_details.email}</h2>
          </Heading>
          <Summary>
            <div>
              <h2>Address Details</h2>
              {Object.entries(order.customer_details.address).map(
                ([key, val]) => (
                  <p key={key}>
                    {key} : {val}
                  </p>
                )
              )}
            </div>
            <div>
              <h2>Your Products</h2>
              {order.line_items.data.map(item => (
                <div key={item.id}>
                  <p>Product: {item.description} </p>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: CHF {(item.price.unit_amount / 100).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </Summary>
        </OrderDetails>

        <ImageContainer>
          <Image src={illustration} alt="" layout="fill" objectFit="fit" />
        </ImageContainer>
      </BodyContainer>

      <ButtonContainer onClick={() => route.push("/")}>
        Continue Shopping
      </ButtonContainer>
    </Container>
  );
}
