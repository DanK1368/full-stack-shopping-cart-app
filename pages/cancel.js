import Image from "next/image";
import Link from "next/link";
import {
  Container,
  ImageContainer,
  Heading,
  LinkContainer,
} from "../styles/CancelStyle";
import cancelIllustration from "../public/assets/errorIllustration.svg";

export default function cancel() {
  return (
    <Container>
      <Heading>
        <span>Oops!</span>
        <h2>Unfortunately the order process has been canceled!</h2>
        <h3>Please try to purchase again</h3>
      </Heading>
      <ImageContainer>
        <Image src={cancelIllustration} alt="" layout="fill" objectFit="fit" />
      </ImageContainer>
      <LinkContainer>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </LinkContainer>
    </Container>
  );
}
