import styled from "styled-components";

const { motion } = require("framer-motion");

export const Container = styled.main`
  min-height: 80vh;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    padding-bottom: 0.5rem;
    font-size: 1.7rem;

    span {
      color: #eb6d45;
    }
  }
`;

export const BodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 90%;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Heading = styled.div`
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1rem;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  height: 100%;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  font-size: 0.7rem;

  h2 {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }

  div {
    align-self: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: clamp(100px, 100%, 500px);
  height: 250px;
  position: relative;
`;

export const ButtonContainer = styled.button`
  background-color: #eb6d45;
  color: white;
  width: clamp(100px, 100%, 250px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
  }
`;
