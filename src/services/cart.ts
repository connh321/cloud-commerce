import { CartItem } from '@/interfaces/cartItem';
import '@/_lib/utils/amplifyConfig';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { transformProductImageUrls } from './util';

const client = generateClient<Schema>();

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

// Function to create a new cart item
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

// Main function to add a product to the cart
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
