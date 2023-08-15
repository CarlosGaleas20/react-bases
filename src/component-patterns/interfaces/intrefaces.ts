import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    //children: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties,
    onChange?: ( args: OnChangeArgs ) => void,
    value?: number;
    initialValues?: InitialValues,
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProvider {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface OnChangeArgs {
    product: Product,
    counter: number,
}

export interface ProductInCart extends Product {
    counter: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number ) => void;
    reset: () => void;
}