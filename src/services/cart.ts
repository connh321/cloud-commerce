import { CartItem } from '@/interfaces/cartItem';
import '@/_lib/utils/amplifyConfig';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { transformProductImageUrls } from './util';

const client = generateClient<Schema>();

/**
 * Fetches all cart items for a given user
 * @param {string} email User's email
 * @returns {Promise<CartItem[]>} Array of cart items with product details
 */
export const getCartItems = async (email: string): Promise<CartItem[]> => {
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: ['id', 'userEmail', 'itemQty', 'product.*'],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }
  const products = items.map((item) => ({
    id: item.product?.id || '',
    name: item.product?.name || '',
    description: item.product?.description || '',
    price: item.product?.price || 0,
    stockQty: item.product?.stockQty || 0,
    imageUrl: item.product?.imageUrl || '',
  }));

  const transformedProducts = transformProductImageUrls(products);

  // Merge transformed product back into cart items
  const cartItems: CartItem[] = items.map((item, index) => ({
    id: item.id,
    userEmail: item.userEmail,
    itemQty: item.itemQty,
    product: transformedProducts[index],
  }));

  return cartItems;
};

/**
 * Updates or deletes cart item based on quantity change
 * @param {string} id Cart item ID
 * @param {string} email User's email
 * @param {number} currentQty Current quantity
 * @param {number} deltaQty Quantity change
 * @returns {Promise<'updated' | 'deleted'>} Result of operation
 */
const adjustCartItemQuantity = async (
  id: string,
  email: string,
  currentQty: number,
  deltaQty: number,
): Promise<'updated' | 'deleted'> => {
  const newQty = currentQty + deltaQty;

  if (newQty > 0) {
    const { errors } = await client.models.CartItem.update({
      id,
      userEmail: email,
      itemQty: newQty,
    });

    if (errors) {
      console.error('Error updating cart item:', errors);
      throw new Error('Failed to update cart item');
    }

    return 'updated';
  } else {
    const { errors } = await client.models.CartItem.delete({
      id,
    });

    if (errors) {
      console.error('Error deleting cart item:', errors);
      throw new Error('Failed to delete cart item');
    }

    return 'deleted';
  }
};

/**
 * Creates a new cart item
 * @param {string} email User's email
 * @param {string} pId Product ID
 */
const createCartItem = async (email: string, pId: string): Promise<void> => {
  const { errors } = await client.models.CartItem.create({
    userEmail: email,
    itemQty: 1, // Set initial quantity to 1
    pId: pId,
  });
  if (errors) {
    console.error('Error creating new cart item:', errors);
    throw new Error('Failed to create new cart item');
  }
};

/**
 * Adds or increments product quantity in cart
 * @param {string} email User's email
 * @param {string} pId Product ID
 * @returns {Promise<CartItem[]>} Updated cart items
 */
export const addProductToCart = async (
  email: string,
  pId: string,
): Promise<CartItem[]> => {
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: ['id', 'userEmail', 'itemQty', 'product.id'],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }

  // Check if the product already exists in the user's cart
  const existingCartItem = items.find((item) => item?.product?.id === pId);

  if (existingCartItem) {
    await adjustCartItemQuantity(
      existingCartItem.id,
      email,
      existingCartItem.itemQty,
      1,
    );
  } else {
    await createCartItem(email, pId);
  }

  return getCartItems(email);
};

/**
 * Decrements or removes product from cart
 * @param {string} email User's email
 * @param {string} pId Product ID
 * @returns {Promise<CartItem[]>} Updated cart items
 */
export const removeProductFromCart = async (
  email: string,
  pId: string,
): Promise<CartItem[]> => {
  // Fetch user's cart items
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: ['id', 'userEmail', 'itemQty', 'product.id'],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }

  const existingCartItem = items.find((item) => item?.product?.id === pId);

  if (!existingCartItem) {
    return getCartItems(email);
  }

  await adjustCartItemQuantity(
    existingCartItem.id,
    email,
    existingCartItem.itemQty,
    -1,
  );
  return getCartItems(email);
};
