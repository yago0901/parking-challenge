import { StyledInput } from "./styled";

export const Input = ({ placeholder, onChange }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
