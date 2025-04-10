'use client';
import styles from './ProductSection.module.scss';
import React from 'react';
import { Product } from '@interfaces/product';
import CardClient from '../Card/CardClient';

/**
 * Props interface for ProductSection component
 */
interface ProductSectionProps {
  products: Product[];
}

/**
 * Renders a list of product cards
 * @param {Object} props Component props
 * @param {Product[]} props.products Array of products to display
 * @returns {React.ReactNode} Grid of product cards
 */
const Cards = ({ products }: { products: Product[] }): React.ReactNode => {
  return products.map((product: Product) => (
    <CardClient product={product} key={product.id} />
  ));
};

/**
 * Client-side product section that displays a grid of product cards
 * @param {ProductSectionProps} props Component props
 * @returns {JSX.Element} Product section container
 */
const ProductSection = ({ products }: ProductSectionProps) => {
  return (
    <div className={styles.productSection}>
      <Cards products={products} />
    </div>
  );
};

export default ProductSection;
