

import ProductCarousel from "@/components/client/ProductCarousel/ProductCarousel";
import styles from "./page.module.scss";
import { Product } from "@/types/product";
import { getProducts } from "@/services/product";
import React, { Suspense } from "react";
import SkeletonCard from "@/components/server/Card/SkeletonCard";

const Card = React.lazy(() => import('@/components/server/Card/Card'));

const Home = async () => {
  const products: Product[] = await getProducts();

  const cards = products.map(product => (
    <Suspense key={product.id} fallback={<SkeletonCard />}>
      <Card product={product} key={product.id} />
    </Suspense>
  ));
  
  return (
    <div className={styles.home}>
      <ProductCarousel cards={cards} />
    </div>
  );
};

  export default Home;
