import styled from "styled-components";

const { motion } = require("framer-motion");

export const CartContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  justify-content: flex-end;
  // display: none;
`;

export const InnerContainer = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 3rem 2rem;
  position: relative;
`;

export const Heading = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Footer = styled(motion.div)`
  display: flex;
  margin-top: 3rem;
  border-top: 1px solid gray;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
  }
`;

export const CartButton = styled.button`
  font-weight: 700;
  padding: 0.5rem 2rem;
  background: rgb(255, 30, 79);
  border: none;
  border-radius: 15px;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  z-index: auto;

  &:hover {
    transform: scale(105%);
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CheckOutButton = styled(CartButton)`
  background-color: rgb(191, 255, 30);
  color: rgb(39, 39, 39);
`;

export const EmptyCartMessage = styled(motion.p)`
  text-align: center;
`;

export const Cards = styled(motion.div)``;
