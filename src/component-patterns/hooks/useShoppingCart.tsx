import { useState } from 'react';
import { OnChangeArgs, ProductInCart } from '../interfaces/intrefaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCartChange = ({ product, counter }: OnChangeArgs) => {

        setShoppingCart(oldCart => {

            const productInCart: ProductInCart = oldCart[product.id] || { ...product, counter: 0 };

            if (Math.max(productInCart.counter + counter, 0) > 0) {
                productInCart.counter += counter;
                return {
                    ...oldCart,
                    [product.id]: productInCart,
                }
            }

            const { [product.id]: toDelete, ...rest } = oldCart;

            return { ...rest };

            /*if (counter === 0) {
                const { [product.id]: toDelete, ...rest } = oldCart;

                return { ...rest };
            }

            return {
                ...oldCart,
                [product.id]: { ...product, counter },
            };*/

        });
    }

    return {
        shoppingCart,
        onProductCartChange
    }
}