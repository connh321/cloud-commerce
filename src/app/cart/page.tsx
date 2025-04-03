'use client';
import styles from './page.module.scss';
import { Product } from '@/interfaces/product';
import React, { useEffect, useState } from 'react';
import ProductSectionClient from '@/components/server/ProductSection/ProductSectionClient';
import { useCartContext } from '@/context/Cart/cart';
import LoadingComponent from '@/components/client/common/LoadingComponent/Loading';
import ProceedCheckout from '@/components/client/ProceedCheckout/ProceedCheckout';

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cartItems, loading } = useCartContext();

  useEffect(() => {
    if (!loading) {
      const newProducts = cartItems.map((item) => item.product);
      setProducts(newProducts);
    }
  }, [cartItems, loading]);

  const Content = ({ products }: { products: Product[] }) => {
    return (
      <>
        {products.length === 0 ? (
          <h3>No products found.</h3>
        ) : (
          <>
            <h3>Modify Cart</h3>
            <ProductSectionClient products={products} />
          </>
        )}
      </>
    );
  };

  const loadingStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: '15px',
  };

  const renderContent = (products: Product[]): React.ReactNode => (
    <div className={styles.cart}>
      <ProceedCheckout />
      {loading ? (
        <LoadingComponent loading={loading} size={75} style={loadingStyles} />
      ) : (
        <Content products={products} />
      )}
    </div>
  );
  return renderContent(products);
};

export default Cart;
