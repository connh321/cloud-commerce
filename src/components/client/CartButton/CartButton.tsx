'use client';
import { useCartContext } from '@/context/Cart/cart';
import styles from './CartButton.module.scss';
import LoadingComponent from '../common/LoadingComponent/Loading';
import { useAuthContext } from '@/context/Auth/auth';
import { useRouter } from 'next/navigation';

interface CartButtonProps {
  productId: number;
}

const CartButton = ({ productId }: CartButtonProps) => {
  const { getProductCount, addToCart, removeFromCart, loading } =
    useCartContext();
  const count = getProductCount(productId);

  const { signedIn } = useAuthContext();
  const router = useRouter();

  const increment = () => {
    if(loading) return;
    if (!signedIn) router.push('/signin');
    addToCart(productId);
  };

  const decrement = () => {
    if(loading) return;
    if (!signedIn) router.push('/signin');
    removeFromCart(productId);
  };

  const CounterComponent = () => {
    return (
      <>
        <button
          className={styles.counterButton}
          onClick={decrement}
          aria-label="Decrease quantity">
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          className={styles.counterButton}
          onClick={increment}
          aria-label="Increase quantity">
          +
        </button>
      </>
    );
  };

  const AddComponent = () => {
    return (
      <button className={styles.addToCart} onClick={increment}>
        Add to Cart
      </button>
    );
  };

  return (
    <div className={styles.cartButton}>
      {loading ? (
        <LoadingComponent loading={loading} style={{ width: '115px' }} />
      ) : count > 0 ? (
        <CounterComponent />
      ) : (
        <AddComponent />
      )}
    </div>
  );
};

export default CartButton;
