import { CartItem } from '@/interfaces/cartItem';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

// Function to get cart items
export const getCartItems = async (email: string): Promise<CartItem[]> => {
  // const { data: items, errors } = await client.models.CartItem.list({
  //   filter: {
  //     userEmail: { eq: email },
  //   },
  // });
  
  // console.log(items)
  return new Promise((resolve) => { 
    const cartItems: CartItem[] = [];
    resolve(cartItems);
  });
};

// Function to add a product to the cart
export const addProductToCart = async (
  email: string,
  productId: number,
): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    const cartItems: CartItem[] = [];
    resolve(cartItems);
  });
};

// Function to remove a product from the cart
export const removeProductFromCart = async (
  email: string,
  productId: number,
): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    const cartItems: CartItem[] = [];
    console.log(productId);
    resolve(cartItems);
  });
};
