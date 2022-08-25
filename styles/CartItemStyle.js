import styled from "styled-components";

const { motion } = require("framer-motion");

export const ItemContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1rem;

  h3 {
    font-size: 0.6rem;
    text-align: right;
  }
`;

export const ImageContainer = styled(motion.div)`
  width: 50px;
  height: 50px;
  position: relative;
`;

export const InfoContainer = styled(motion.div)`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;

  span {
    font-size: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    button {
      background: none;
      border: none;
    }
  }
`;

export const Cards = styled(motion.div)``;
