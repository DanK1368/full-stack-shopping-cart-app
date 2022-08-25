import styled from "styled-components";

export const Container = styled.main`
  min-height: 80vh;
  width: 100%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  span {
    color: rgb(255, 30, 79);
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  h2 {
    padding-bottom: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: clamp(100px, 100%, 500px);
  height: 500px;
  position: relative;

  @media (max-width: 740px) {
    height: 300px;
  }
`;

export const LinkContainer = styled.div`
  background-color: #eb6d45;
  color: white;
  width: clamp(100px, 100%, 250px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  &:hover {
    transform: scale(105%);
  }

  a {
    width: 100%;

    text-align: center;
    padding: 1rem;
    font-size: x-large;
  }
`;
