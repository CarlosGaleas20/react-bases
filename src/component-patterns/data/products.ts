import { Product } from '../interfaces/intrefaces';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
}

const product2 = {
    id: '2',
    title: 'Coffee mug - Meme',
    img: './coffee-mug2.png',
}

 export const products: Product[] = [product, product2];