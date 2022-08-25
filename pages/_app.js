import "../styles/globals.css";
import { Provider, createClient } from "urql";
import { CartProvider } from "../lib/context";
import Navbar from "../components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <Provider value={client}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
