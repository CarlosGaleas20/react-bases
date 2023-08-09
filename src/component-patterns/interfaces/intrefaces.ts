import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties,
    onChange?: ( args: OnChangeArgs ) => void,
    value?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProvider {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface OnChangeArgs {
    product: Product,
    counter: number,
}

export interface ProductInCart extends Product {
    counter: number;
}