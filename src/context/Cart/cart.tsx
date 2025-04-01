"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCartItems, addProductToCart, removeProductFromCart } from '@/services/cart';
import { CartItem } from '@/interfaces/cartItem';

// Type for the context's value
interface CartContextType {
  cartItems: CartItem[];
  loading: boolean;
  addToCart: (productId: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  getProductCount: (productId: number) => number;
  getCartSize: () => number;
}

// Create context with a default value of undefined
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

// CartProvider Component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const email = 'john.doe@example.com';

  // Fetch the cart items when the component mounts or email changes
    useEffect(() => {
      const fetchCartItems = async () => {
        console.log('why am i here')
        setLoading(true);
        const items = await getCartItems(email);  // Replace with dynamic email
        setCartItems(items);
        setLoading(false);
      };

      fetchCartItems();
    }, []); // Empty dependency array ensures it runs only once on mount

  // Function to add an item to the cart
  const addToCart = async (productId: number) => {
    setLoading(true);
    try {
      const newItems = await addProductToCart(email, productId);  // Replace with dynamic email
      setCartItems(newItems);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = async (productId: number) => {
    setLoading(true);
    try {
      const newItems = await removeProductFromCart(email, productId);  // Replace with dynamic email
      setCartItems(newItems);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to get the quantity of a specific product in the cart
  const getProductCount = (productId: number): number => {
    const item = cartItems.find(item => item.product.id === productId);
    return item ? item.itemQty : 0;
  };

    // Function to get the quantity all products in the cart
  const getCartSize = (): number => {
    let totalQty = 0;
    cartItems.forEach(item => totalQty += item.itemQty);
    return totalQty;
  };

  return (
    <CartContext.Provider value={{ cartItems, loading, addToCart, removeFromCart, getProductCount, getCartSize }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
