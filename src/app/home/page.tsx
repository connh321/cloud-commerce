'use server';
import styles from './page.module.scss';
import { Product } from '@/interfaces/product';
import { getFeaturedProducts, getProducts } from '@/services/product';
import React, { Suspense } from 'react';
import SkeletonCard from '@/components/server/Card/SkeletonCard';
import ProductCarousel from '@/components/client/CardCarousel/CardCarousel';
import ProductSectionServer from '@/components/server/ProductSection/ProductSectionServer';
import Error from '@/components/client/common/ErrorBoundary/Error';

const Card = React.lazy(() => import('@/components/server/Card/CardServer'));

/**
 * Fetches both regular and featured products from the API
 * @returns {Promise<{products: Product[], featuredProducts: Product[]}>}
 */
const fetchProductsData = async (): Promise<{
  products: Product[];
  featuredProducts: Product[];
}> => {
  const products: Product[] = await getProducts();
  const featuredProducts: Product[] = await getFeaturedProducts();
  return { products, featuredProducts };
};

/**
 * Renders product cards with lazy loading and suspense fallback
 * @param {Product[]} products Array of products to render as cards
 * @returns {React.ReactNode[]} Array of card components
 */
const renderCards = (products: Product[]): React.ReactNode[] => {
  return products.map((product) => (
    <Suspense fallback={<SkeletonCard />} key={product.id}>
      <Card product={product} />
    </Suspense>
  ));
};

/**
 * Renders the main home page layout with featured products and full collection
 * @param {React.ReactNode[]} featuredCards Array of featured product cards
 * @param {Product[]} products Array of all products
 * @returns {React.ReactNode} Home page content
 */
const renderHomeContent = (
  featuredCards: React.ReactNode[],
  products: Product[],
): React.ReactNode => (
  <div className={styles.home}>
    <h3>Featured</h3>
    <ProductCarousel cards={featuredCards} />
    <h3>Shop Our Collection</h3>
    <ProductSectionServer products={products} />
  </div>
);
/**
 * Home page component that displays featured products and full product collection
 * @returns {Promise<React.ReactNode>} Rendered home page or error component
 */
const Home = async () => {
  try {
    const { products, featuredProducts } = await fetchProductsData();
    const featuredCards = renderCards(featuredProducts);
    return renderHomeContent(featuredCards, products);
  } catch (error) {
    console.error('Error fetching products1:', error);
    return <Error></Error>;
  }
};

export default Home;
