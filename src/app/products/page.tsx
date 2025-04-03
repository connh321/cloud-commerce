'use server';
import styles from './page.module.scss';
import { Product } from '@/interfaces/product';
import React from 'react';
import ProductSectionServer from '@/components/server/ProductSection/ProductSectionServer';
import Error from '@/components/client/common/ErrorBoundary/Error';
import { getProductsBySearch } from '@/services/product';

// Function to render the main content of the products page
const renderProductsContent = (products: Product[]): React.ReactNode => (
  <div className={styles.products}>
    {products.length === 0 ? (
      <h3>No products found.</h3>
    ) : (
      <>
        <h3>Shop Our Collection</h3>
        <ProductSectionServer products={products} />
      </>
    )}
  </div>
);

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Products = async ({ searchParams }: PageProps) => {
  const { search } = await searchParams;
  try {
    const products: Product[] = await getProductsBySearch(search);
    return renderProductsContent(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return <Error></Error>;
  }
};

export default Products;
