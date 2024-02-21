import { ButtonProps } from "../types";
import { StyledButton } from "./styles";

const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
export default Button;
