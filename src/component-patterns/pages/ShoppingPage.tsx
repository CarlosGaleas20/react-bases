import React from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
            }}>
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
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
                <ProductCard product={product} >
                    <ProductImage image={'./coffee-mug.png'} />

                    <ProductTitle title={'Test title'} />

                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;
