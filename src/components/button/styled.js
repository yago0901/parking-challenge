import styled from "styled-components";

export const StyledButton = styled.button`
  height: 67px;
  width: 312px;
  margin-bottom: 16px;
  background-color: ${(props) => props.bgColor || "#28DD91"};
  color: ${(props) => props.color || "#FFFFFF"};
  border: ${(props) => props.border || "solid"};
  :hover {
    color: ${(props) => (props.disabled ? "#9B9B9B" : " ")};
    background-color: ${(props) => (props.disabled ? "#DADADA" : " ")};
  }
  font-family: OpenSans;
  font-size: 15px;
  text-align: center;
`;
