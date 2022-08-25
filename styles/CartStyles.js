import styled from "styled-components";

export const CartContainer = styled.section`
  min-height: 80vh;
  display: grid;
  place-content: center;
  background-color: aliceblue;
`;

export const InnerContainer = styled.div``;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 3rem;
  border-top: 1px solid gray;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;

  div {
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CartButton = styled.button`
  font-weight: 700;
  padding: 0.5rem 2rem;
  background-color: rgb(255, 30, 79);
  border: none;
  border-radius: 15px;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }
`;
