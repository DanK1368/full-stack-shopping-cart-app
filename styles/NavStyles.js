import styled from "styled-components";

export const Header = styled.header`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h3 {
    font-size: 0.7rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  span {
    background: yellowgreen;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -20px;
    right: 0px;
    color: white;
    font-weight: bold;
    font-size: 0.7rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
`;
