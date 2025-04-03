'use client';
import styles from './ProductSection.module.scss';
import React from 'react';
import { Product } from '@interfaces/product';
import CardClient from '../Card/CardClient';

interface ProductSectionProps {
  products: Product[];
}

const Cards = ({ products }: { products: Product[] }): React.ReactNode => {
  return products.map((product: Product) => (
    <CardClient product={product} key={product.productId} />
  ));
};

const ProductSection = ({ products }: ProductSectionProps) => {
  return (
    <div className={styles.productSection}>
      <Cards products={products} />
    </div>
  );
};

export default ProductSection;
