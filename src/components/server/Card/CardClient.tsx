'use client';
import Image from 'next/image';
import styles from './Card.module.scss';
import { Product } from '@/interfaces/product';
import CartButton from '@/components/client/CartButton/CartButton';
import { JSX } from 'react';

/**
 * Props interface for Card component
 */
interface CardProps {
  product: Product;
}

/**
 * Product card component that displays product image, name, price and cart controls
 * @param {CardProps} props Component props
 * @returns {JSX.Element} Product card with image and details
 */
const Card = ({ product }: CardProps): JSX.Element => {
  console.log(product);
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
          style={{ objectFit: 'contain' }}
          fill
          priority
          unoptimized
        />
      </div>
      <div className={styles.details}>
        <span className={styles.productName}>{product.name}</span>
        <div className={styles.namePrice}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <CartButton pId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
