import React, { useState } from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className='bg-dark text-white'
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ( { count, isMaxCountReached, maxCount, increaseBy, reset } ) => (
                        <>
                            <ProductImage className='custom-image' />

                            <ProductTitle
                                className='text-white'
                                style={{
                                    fontWeight: 'bold',
                                }}
                            />

                            <ProductButtons className='custom-buttons' />
                            <button onClick={reset}>Reset</button>
                            {
                                !isMaxCountReached && (<button onClick={() => increaseBy(+2)}>+2</button>)
                            }
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}

export default ShoppingPage;
