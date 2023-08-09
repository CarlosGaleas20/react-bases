import React, { useState } from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const ShoppingPage = () => {

    const { shoppingCart, onProductCartChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            value={shoppingCart[product.id]?.counter || 0}
                            onChange={onProductCartChange}
                        >
                            <ProductImage className='custom-image' />

                            <ProductTitle
                                className='text-white'
                                style={{
                                    fontWeight: 'bold',
                                }}
                            />

                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }

                <div className='shopping-cart'>
                    {Object.keys(shoppingCart).map(id => (
                        <ProductCard
                            key={id}
                            product={shoppingCart[id]}
                            style={{
                                width: '250px',
                            }}
                            value={shoppingCart[id].counter}
                            onChange={onProductCartChange}
                        >
                            <ProductImage />

                            <ProductTitle />

                            <ProductButtons />
                        </ProductCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShoppingPage;
