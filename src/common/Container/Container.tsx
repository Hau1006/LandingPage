import React from "react";
import { ContainerProps } from "../types";
import { StyledContainer } from "./styles";

const Container = ({ border, children }: ContainerProps) => {
  return <StyledContainer border={border}>{children}</StyledContainer>;
};

export default Container;
