import { CartItem } from '@/interfaces/cartItem';
import '@/_lib/utils/amplifyConfig';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export const getCartItems = async (email: string): Promise<CartItem[]> => {
  const { data: items, errors } = await client.models.CartItem.list({
    filter: { userEmail: { eq: email } },
    selectionSet: [
      'userEmail',
      'itemQty',
      'product.id',
      'product.name',
      'product.description',
      'product.price',
      'product.stockQty',
      'product.imageUrl',
      'product.productId',
    ],
  });

  if (errors) {
    console.error('Error fetching cart items:', errors);
    throw new Error('Failed to fetch cart items');
  }

  return items.map((item) => ({
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

export const addProductToCart = async (
  id: string,
  email: string,
  productId: string,
  currQty: number,
): Promise<CartItem[]> => {
  const { errors } = await client.models.CartItem.update({
    id: id,
    userEmail: email,
    itemQty: currQty + 1,
    productId: productId,
  });

  if (errors) {
    console.error('Error adding product to cart:', errors);
    throw new Error('Failed to add product to cart');
  }

  return getCartItems(email);
};

export const removeProductFromCart = async (
  id: string,
  email: string,
  productId: string,
  currQty: number,
): Promise<CartItem[]> => {
  const { errors } = await client.models.CartItem.update(
    {
      id: id,
      userEmail: email,
      itemQty: currQty - 1,
      productId: productId,
    }
  );

  if (errors) {
    console.error('Error removing product from cart:', errors);
    throw new Error('Failed to remove product from cart');
  }

  return getCartItems(email);
};
