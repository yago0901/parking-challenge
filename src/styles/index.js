import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
 text-decoration:none;
 border:none;
 outline:none;
 transition: 0.3s ease;
 font-family: 'Open Sans', sans-serif;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  
}

button{
  cursor: pointer;

  &:hover{
    opacity: 0.8
  }

  &:active{
    opacity: 0.6
  }
}

`;

export const Container = styled.div`
  min-width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props) => props.aling || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Typography = styled.p`
  font-weight: ${(props) => props.FontWeght || "400px"};
  font-size: ${(props) => props.size || "16px"};
  line-height: ${(props) => (props.primary ? "#4DD0E1" : "#9B9B9B")};
  color: ${(props) => props.color || "#A769B2"};
`;