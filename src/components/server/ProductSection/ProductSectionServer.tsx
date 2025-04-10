'use server';
import { JSX, Suspense } from 'react';
import styles from './ProductSection.module.scss';
import React from 'react';
import SkeletonCard from '../Card/SkeletonCard';
import { Product } from '@interfaces/product';

/**
 * Props interface for ProductSection component
 */
interface ProductSectionProps {
  products: Product[];
}
const Card = React.lazy(() => import('@/components/server/Card/CardServer'));

/**
 * Renders a list of product cards with loading fallback
 * @param {Object} props Component props
 * @param {Product[]} props.products Array of products to display
 * @returns {React.ReactNode} Grid of product cards with suspense
 */
const Cards = ({ products }: { products: Product[] }): React.ReactNode => {
  return products.map((product: Product) => (
    <Suspense fallback={<SkeletonCard />} key={product.id}>
      <Card product={product} />
    </Suspense>
  ));
};

/**
 * Server-side product section that displays a grid of product cards
 * @param {ProductSectionProps} props Component props
 * @returns {JSX.Element} Product section container
 */
const ProductSection = ({ products }: ProductSectionProps): JSX.Element => {
  return (
    <div className={styles.productSection}>
      <Cards products={products} />
    </div>
  );
};

export default ProductSection;
