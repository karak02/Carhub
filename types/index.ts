import {MouseEventHandler} from "react";

export interface CustombuttonProps{
    title: string;
    ContainerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}