'use server';
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
 * Server-side product card component that displays product details
 * @param {CardProps} props Component props containing product data
 * @returns {JSX.Element} Product card with image, name, price and cart button
 */
const Card = ({ product }: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
          style={{ objectFit: 'contain' }}
          fill
          unoptimized
          priority
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
