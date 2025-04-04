'use server';
import Image from 'next/image';
import styles from './Card.module.scss';
import { Product } from '@/interfaces/product';
import CartButton from '@/components/client/CartButton/CartButton';

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
