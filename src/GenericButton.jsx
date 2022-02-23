import React from "react";
import { Container } from "./styleGenericButton";
const GenericButton = ({
  width,
  height,
  children,
  border,
  color,
  padding,
  mt,
  mr,
  mb,
  ml,
  onClick,
  bgc
}) => {
  return (
    <Container
      width={width}
      height={height}
      color={color}
      border={border}
      padding={padding}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      onClick={onClick}
      bgc={bgc}
    >
      {children}
    </Container>
  );
};

export default GenericButton;
