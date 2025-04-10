'use client';
import { useCartContext } from '@/context/Cart/cart';
import styles from './CartButton.module.scss';
import LoadingComponent from '../common/LoadingComponent/Loading';
import { useAuthContext } from '@/context/Auth/auth';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';

/**
 * Props interface for CartButton component
 */
interface CartButtonProps {
  pId: string;
}

/**
 * Cart button component that handles adding/removing items from cart
 * @param {CartButtonProps} props Component props
 * @returns {JSX.Element} Cart interaction button
 */
const CartButton = ({ pId }: CartButtonProps): JSX.Element => {
  const { getProductCount, addToCart, removeFromCart, loading } =
    useCartContext();
  const count = getProductCount(pId);

  const { signedIn } = useAuthContext();
  const router = useRouter();

  /**
   * Increases item quantity in cart
   */
  const increment = () => {
    if (loading) return;
    if (!signedIn) router.push('/signin');

    addToCart(pId);
  };

  /**
   * Decreases item quantity in cart
   */
  const decrement = () => {
    if (loading) return;
    if (!signedIn) router.push('/signin');
    removeFromCart(pId);
  };

  /**
   * Renders the counter UI when items are in cart
   */
  const CounterComponent = () => {
    return (
      <>
        <button
          className={styles.counterButton}
          onClick={decrement}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          className={styles.counterButton}
          onClick={increment}
          aria-label="Increase quantity"
        >
          +
        </button>
      </>
    );
  };

  /**
   * Renders the add to cart button when no items are in cart
   */
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
      ) : (
        <>{count > 0 ? <CounterComponent /> : <AddComponent />}</>
      )}
    </div>
  );
};

export default CartButton;
