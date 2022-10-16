//import { Children } from "react";
import { StyledButton } from "./styled";

export const Button1 = ({
  children,
  onClick,
  disabled,
  bgColor,
  color,
  border,
}) => {
  return (
    <StyledButton
      border={border}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
