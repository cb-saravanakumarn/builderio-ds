import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.styles.css";
export interface ButtonComponent extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>> {
    builderSettings?: any;
}
export declare const Button: ButtonComponent;
export default Button;
