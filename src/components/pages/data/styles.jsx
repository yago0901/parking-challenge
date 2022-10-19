import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerData = styled.div`
  background-color: #fff;
`;

export const Placa = styled.span`
  font-size: 1.5rem;
  color: #00bcd4;
  font-weight: 500;
`;

export const SetaVoltar = styled.img`
  src: src;
`;

export const PlacaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 19px;
  cursor: pointer;
`;

export const Loading = styled.div`
  max-width: 360px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  gap: 23px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
`;

export const LinkStyle = {
  textDecoration: "none",
};
