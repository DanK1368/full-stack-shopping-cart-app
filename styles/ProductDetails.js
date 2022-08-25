import styled from "styled-components";

export const SingleProductImage = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 300px;
  height: 500px;
`;

export const SingleProductLayout = styled.article`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding-block: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const SingleProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;

  button {
    border: none;
    background: none;
    color: var(--secondary);
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const PurchaseButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--secondary);
  color: white;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
