import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ image = '', className = '' }) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if (image) {
        imgToShow = image;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt='Product Image' />
    );
}
