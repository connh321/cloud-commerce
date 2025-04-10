'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  JSX,
} from 'react';
import {
  getCartItems,
  addProductToCart,
  removeProductFromCart,
} from '@/services/cart';
import { CartItem } from '@/interfaces/cartItem';
import { useAuthContext } from '../Auth/auth';
import { Hub } from 'aws-amplify/utils';

/**
 * Cart context interface defining available cart operations
 */
interface CartContextType {
  cartItems: CartItem[];
  loading: boolean;
  addToCart: (pId: string) => Promise<void>;
  removeFromCart: (pId: string) => Promise<void>;
  getProductCount: (pId: string) => number;
  getCartSize: () => number;
  getTotalPrice: () => number;
  resetCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

/**
 * Hook to access cart context
 * @returns {CartContextType} Cart context values and operations
 * @throws {Error} If used outside of CartProvider
 */
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

/**
 * Props for CartProvider component
 */
interface CartProviderProps {
  children: ReactNode;
}

/**
 * Cart context provider that manages shopping cart state
 * @param {CartProviderProps} props Component props
 * @returns {JSX.Element} Provider with cart context
 */
export const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { email } = useAuthContext();

  // Fetch the cart items when the component mounts or email changes
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!email) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const items = await getCartItems(email);
      setCartItems(items);
      setLoading(false);
    };

    fetchCartItems();
  }, [email]);

  useEffect(() => {
    const hubListener = Hub.listen('auth', async (data) => {
      switch (data.payload.event) {
        case 'signedOut':
          resetCart();
          break;
      }
    });

    return () => hubListener();
  }, []);

  /**
   * Adds product to cart by ID
   * @param {string} pId Product ID to add
   */
  const addToCart = async (pId: string) => {
    if (!email) return; // add to cart button not shown when email is null

    setLoading(true);
    try {
      const newItems = await addProductToCart(email, pId);
      setCartItems(newItems);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Removes product from cart by ID
   * @param {string} pId Product ID to remove
   */
  const removeFromCart = async (pId: string) => {
    if (!email) return; // add to cart button not shown when email is null

    setLoading(true);
    try {
      const newItems = await removeProductFromCart(email, pId); // Replace with dynamic email
      setCartItems(newItems);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Gets quantity of specific product in cart
   * @param {string} pId Product ID to check
   * @returns {number} Quantity of product in cart
   */
  const getProductCount = (pId: string): number => {
    const item = cartItems.find((item) => item.product.id === pId);
    return item ? item.itemQty : 0;
  };

  /**
   * Gets total quantity of all items in cart
   * @returns {number} Total cart quantity
   */
  const getCartSize = (): number => {
    let totalQty = 0;
    cartItems.forEach((item) => (totalQty += item.itemQty));
    return totalQty;
  };

  /**
   * Calculates total price of all items in cart
   * @returns {number} Total cart price
   */
  const getTotalPrice = (): number => {
    let totalPrice = 0;
    cartItems.forEach(
      (item) => (totalPrice += item.product.price * item.itemQty),
    );
    return totalPrice;
  };

  /**
   * Resets cart to empty state
   */
  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        removeFromCart,
        getProductCount,
        getCartSize,
        getTotalPrice,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
