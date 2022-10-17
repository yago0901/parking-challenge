import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 85%;
  height: 30%;
  background-color: #ececec;
  border-radius: 12px;
  padding: 16px;
  position: absolute;
  top: ${(props) => (props.open ? "15%" : "-100%")};
  left: 8%;
  transition: 0.5 ease;
  z-index: 2;
`;

export const CloseModal = styled.button`
  width: 40px;
  height: 30px;
  right: 2%;
  top: 10%;
  background-color: #1a1a1a;
  border-radius: 50%;
  color: #ececec;
  font-weight: 400;
  font-size: 27px;
  line-height: 33px;
`;
