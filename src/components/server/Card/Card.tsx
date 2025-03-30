"use server"
import Image from 'next/image';
import styles from './card.module.scss';
import { Product } from '@/types/product';

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
          objectFit="contain"
          fill
          unoptimized
          priority
        />
        </div>
        <div className={styles.details}>
        <span className={styles.productName}>{product.name}</span>
        <div className={styles.namePrice}>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        <button className={styles.addToCart}>Add to Cart</button>
        </div>
        </div>
      </div>
  );
}

export default Card;