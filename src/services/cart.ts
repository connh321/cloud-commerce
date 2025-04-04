import { CartItem } from '@/interfaces/cartItem';
import '@/_lib/utils/amplifyConfig';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export const getCartItems = async (email: string): Promise<CartItem[]> => {
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: [
      'id',
      'userEmail',
      'itemQty',
      'product.*'
    ],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }

  return items.map((item) => ({
    id: item.id,
    userEmail: item.userEmail,
    itemQty: item.itemQty,
    product: {
      id: item.product?.id || '',
      productId: item.product?.productId || '',
      name: item.product?.name || '',
      description: item.product?.description || '',
      price: item.product?.price || 0,
      stockQty: item.product?.stockQty || 0,
      imageUrl: item.product?.imageUrl || '',
    },
  }));
};

const adjustCartItemQuantity = async (
  id: string,
  email: string,
  currentQty: number,
  deltaQty: number,
): Promise<'updated' | 'deleted'> => {
  const newQty = currentQty + deltaQty;

  if (newQty > 0) {
    console.log(`Updating cart item with id: ${id}, newQty: ${newQty}`);
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
    console.log(`Deleting cart item with id: ${id} (quantity would be 0)`);
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
const createCartItem = async (
  email: string,
  productId: string,
): Promise<void> => {
  console.log(
    `Creating new cart item with email: ${email}, productId: ${productId}`,
  );
  const { errors } = await client.models.CartItem.create({
    userEmail: email,
    itemQty: 1, // Set initial quantity to 1
    productId: productId.toString(),
  });
  console.log('Create cart item response:', { errors });
  if (errors) {
    console.error('Error creating new cart item:', errors);
    throw new Error('Failed to create new cart item');
  }
};

// Main function to add a product to the cart
export const addProductToCart = async (
  email: string,
  productId: string
): Promise<CartItem[]> => {
  console.log(
    `Adding product to cart with email: ${email}, productId: ${productId}`,
  );
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: [
      'id',
      'userEmail',
      'itemQty',
      'product.*'
    ],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }

  // Check if the product already exists in the user's cart
  console.log('items', items)

  const existingCartItem = items.find(
    (item) => item?.product?.productId === productId,
  );
  console.log('existingCartItem', existingCartItem)

  if (existingCartItem) {
    console.log('Updating existing cart item...');
    await adjustCartItemQuantity(existingCartItem.id, email, existingCartItem.itemQty, 1);
  } else {
    console.log('Creating new cart item...');
    await createCartItem(email, productId);
  }

  console.log('Getting updated cart items...');
  return getCartItems(email);
};
export const removeProductFromCart = async (
  email: string,
  productId: string,
): Promise<CartItem[]> => {
  console.log(
    `Removing one quantity of product from cart for email: ${email}, productId: ${productId}`,
  );

  // Fetch user's cart items
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: [
      'id',
      'userEmail',
      'itemQty',
      'product.*'
    ],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }

  // Find the cart item matching the productId
  console.log('items', items)
  const existingCartItem = items.find(
    (item) => item?.product?.productId === productId,
  );
  console.log('existingCartItem', existingCartItem)


  if (!existingCartItem) {
    console.log('Product not found in cart, nothing to remove.');
    return getCartItems(email);
  }

  // Use the adjustCartItemQuantity function to either update or delete the cart item
  const result = await adjustCartItemQuantity(
    existingCartItem.id,
    email,
    existingCartItem.itemQty,
    -1,
  );

  if (result === 'updated') {
    console.log('Cart item updated successfully.');
  } else {
    console.log('Cart item deleted successfully.');
  }

  console.log('Getting updated cart items...');
  return getCartItems(email);
};
