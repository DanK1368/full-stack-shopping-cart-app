import Image from "next/image";
import Link from "next/link";
import { ProductArticle, ProductImage } from "../styles/ProductStyle";

const Product = ({ item }) => {
  const { title, price, slug } = item.attributes;

  const imageUrl = item.attributes.image.data.attributes.formats.small.url;

  return (
    <ProductArticle>
      <Link href={`/product/${slug}`}>
        <ProductImage>
          <Image src={imageUrl} alt="" objectFit="cover" layout="fill" />
        </ProductImage>
      </Link>
      <h2>{title}</h2>
      <h3>CHF {price}</h3>
    </ProductArticle>
  );
};
export default Product;
