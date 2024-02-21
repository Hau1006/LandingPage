import React from "react";
import { TFunction } from "react-i18next";
export interface ButtonProps {
    color?: string;
    name?: string;
    children: React.ReactNode;
    onClick?: () => void
}
export interface ContainerProps {
    border?: boolean;
    children?: React.ReactNode;
}
export interface InputProps {
    name: string;
    placeholder: string;
    t: TFunction;
    type?: string;
    value?: string;
    onChange: (
        event:
            | React.ChangeEvent<HTMLInputElement
                | React.ChangeEvent<HTMLTextAreaElement>>) => void;

}
export interface validateProps {
    name: string;
    message: string;
    email: string;
}

export interface SvgIconProps {
    src: string;
    width: string;
    height: string;
}