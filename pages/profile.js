import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });

    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  console.log(user);
  console.log(orders);

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map(order => (
            <div key={order.id}>
              <h1>Order Number: {order.id}</h1>
              <h2>CHF {(order.amount / 100).toFixed(2)}</h2>
              {order.charges.data.map(order => (
                <a
                  key={order.id}
                  href={order.receipt_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Receipt
                </a>
              ))}
            </div>
          ))}
        </div>
        <button onClick={() => route.push("/api/auth/logout")}>Logout</button>
      </div>
    )
  );
}
