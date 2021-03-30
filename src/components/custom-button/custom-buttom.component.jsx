import React from "react";

import { CustomButtonContainer } from "./custom-bottom.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
