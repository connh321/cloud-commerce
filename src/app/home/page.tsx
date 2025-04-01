import styles from "./page.module.scss";
import { Product } from '@/interfaces/product';
import { getFeaturedProducts, getProducts } from "@/services/product";
import React, { Suspense } from "react";
import SkeletonCard from "@/components/server/Card/SkeletonCard";
import ProductCarousel from "@/components/client/CardCarousel/CardCarousel";
import ProductSectionServer from "@/components/server/ProductSection/ProductSectionServer";
import Error from "@/components/client/common/ErrorBoundary/Error";

const Card = React.lazy(() => import('@/components/server/Card/CardServer'));

// Function to fetch products data
const fetchProductsData = async () => {
  const products: Product[] = await getProducts();
  const featuredProducts: Product[] = await getFeaturedProducts();
  return { products, featuredProducts };
};

// Function to render a list of cards
const renderCards = (products: Product[]): React.ReactNode[] => {
  return products.map((product) => (
      <Suspense fallback={<SkeletonCard />} key={product.id}>
        <Card product={product} />
      </Suspense>
  ));
};

// Function to render the main content of the home page
const renderHomeContent = (featuredCards: React.ReactNode[], products: Product[]): React.ReactNode => (
  <div className={styles.home}>
    <h3>Featured</h3>
    <ProductCarousel cards={featuredCards} />
    <h3>Shop Our Collection</h3>
    <ProductSectionServer products={products} />
  </div>
);


const Home = async () => {
  try {
    const { products, featuredProducts } = await fetchProductsData();
    const featuredCards = renderCards(featuredProducts);
    return renderHomeContent(featuredCards, products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return <Error></Error>;
  }
};

export default Home;
