  import styles from "./page.module.scss";
  import { Product } from "@/types/product";
  import React, { Suspense } from "react";
  import SkeletonCard from "@/components/server/Card/SkeletonCard";
  import ProductSection from "@/components/server/ProductSection/ProductSection";
  import Error from "@/components/client/common/ErrorBoundary/Error";
  import { getProductsBySearch } from "@/services/product";
  import { NextRequest } from "next/server";

  const Card = React.lazy(() => import('@/components/server/Card/Card'));

  // Function to render a list of cards
  const renderCards = (products: Product[]): React.ReactNode[] => {
    return products.map((product) => (
        <Suspense fallback={<SkeletonCard />} key={product.id}>
          <Card product={product} />
        </Suspense>
    ));
  };

  // Function to render the main content of the products page
  const renderProductsContent = (cards: React.ReactNode[]): React.ReactNode => (
    <div className={styles.products}>
      {cards.length === 0 ? <h3>No products found.</h3> : 
      <>      
      <h3>Shop Our Collection</h3>
      <ProductSection cards={cards} />
      </>
      }
    </div>
  );

  type PageProps = {
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  const Products = async ({ searchParams }: PageProps) => {
    try {
      const { search } = await searchParams;
      const products: Product[] = await getProductsBySearch(search);
      const cards = renderCards(products);
      return renderProductsContent(cards);
    } catch (error) {
      console.error("Error fetching products:", error);
      return <Error></Error>;
    }
  };

  export const middleware = async (req: NextRequest) => {
    const query = req.nextUrl.searchParams;
    console.log(query)
  };

  export default Products;
