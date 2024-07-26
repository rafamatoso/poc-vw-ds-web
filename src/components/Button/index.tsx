import React from "react";
import { IButtonProps } from "./interfaces";

const Button = ({ children, ...props }: IButtonProps) => (
  <button {...props}>{children}</button>
);

export default Button;
