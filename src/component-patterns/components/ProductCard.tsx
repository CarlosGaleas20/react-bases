import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProvider } from '../interfaces/intrefaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProvider);
const { Provider } = ProductContext;



export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues});

    return (
        <>
            <Provider value={{
                counter,
                increaseBy,
                product,
                maxCount,
            }}>
                <div className={`${styles.productCard} ${className}`} style={style}>

                    { children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset,
                    }) }

                </div>
            </Provider>
        </>
    )
}
