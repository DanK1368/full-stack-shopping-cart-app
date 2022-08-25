import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Product";

import { GalleryLayout } from "../styles/GalleryLayout";

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Somthing went wrong {error.message}</p>;
  const juiceItems = data.products.data;

  return (
    <div>
      <Head>
        <title>JUICE STORE</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com"
        />

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GalleryLayout>
          {juiceItems.map(item => (
            <Product key={item.id} item={item} />
          ))}
        </GalleryLayout>
      </main>
    </div>
  );
}
