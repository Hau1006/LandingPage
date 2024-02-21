import { withTranslation } from "react-i18next";
import { InputProps } from "../types";
import { Container, StyledInput } from "./styles";
const Input = ({ name, placeholder, onChange, t }: InputProps) => (
  <Container>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    ></StyledInput>
  </Container>
);

export default withTranslation()(Input);
