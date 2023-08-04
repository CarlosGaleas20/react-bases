import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProvider } from '../interfaces/intrefaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProvider);
const { Provider } = ProductContext;



export const ProductCard = ({ product, children, className }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <>
            <Provider value={{
                counter,
                increaseBy,
                product,
            }}>
                <div className={`${styles.productCard} ${className}`}>

                    { children }

                </div>
            </Provider>
        </>
    )
}
