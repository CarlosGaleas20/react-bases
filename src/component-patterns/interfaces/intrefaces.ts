import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children: ReactElement | ReactElement[];
    className?: string;
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