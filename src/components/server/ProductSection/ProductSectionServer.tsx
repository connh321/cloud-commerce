'use server';
import { Suspense } from 'react';
import styles from './productSection.module.scss';
import React from 'react';
import SkeletonCard from '../Card/SkeletonCard';
import { Product } from '@interfaces/product';

interface ProductSectionProps {
  products: Product[];
}
const Card = React.lazy(() => import('@/components/server/Card/CardServer'));

const Cards = ({ products }: { products: Product[] }): React.ReactNode => {
  return products.map((product: Product) => (
    <Suspense fallback={<SkeletonCard />} key={product.id}>
      <Card product={product} />
    </Suspense>
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
