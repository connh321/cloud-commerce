'use server';
import styles from './page.module.scss';
import { Product } from '@/interfaces/product';
import React from 'react';
import ProductSectionServer from '@/components/server/ProductSection/ProductSectionServer';
import Error from '@/components/client/common/ErrorBoundary/Error';
import { getProductsBySearch } from '@/services/product';

/**
 * Renders the products page content with search results
 * @param {Product[]} products Array of products to display
 * @returns {React.ReactNode} Products page content
 */
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

/**
 * Props interface for the Products page component
 */
type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * Products page component that displays filtered products based on search parameters
 * @param {PageProps} props Component props containing search parameters
 * @returns {Promise<React.ReactNode>} Rendered products page or error component
 */
const Products = async ({
  searchParams,
}: PageProps): Promise<React.ReactNode> => {
  const { search } = await searchParams;
  try {
    const products: Product[] = await getProductsBySearch(search);
    return renderProductsContent(products);
  } catch (error) {
    console.error('Error fetching products2:', error);
    return <Error></Error>;
  }
};

export default Products;
