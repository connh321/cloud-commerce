import { CartItem } from '@/interfaces/cartItem';

// Function to get cart items
export const getCartItems = async (email: string): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    const cartItems: CartItem[] = [
      {
        userEmail: email,
        itemQty: 2,
        product: {
          id: 1,
          name: 'Product 1',
          description: 'This is product 1',
          price: 19.99,
          stockQty: 10,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 3,
        product: {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3',
          price: 39.99,
          stockQty: 30,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 4,
        product: {
          id: 4,
          name: 'Product 4',
          description: 'This is product 4',
          price: 49.99,
          stockQty: 40,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 2,
        product: {
          id: 5,
          name: 'Product 5',
          description: 'This is product 5',
          price: 19.99,
          stockQty: 10,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 6,
          name: 'Product 6',
          description: 'This is product 6',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 7,
          name: 'Product 7',
          description: 'This is product 7',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
    ];
    resolve(cartItems);
  });
};

// Function to add a product to the cart
export const addProductToCart = async (
  email: string,
  productId: number,
): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    const cartItems: CartItem[] = [
      {
        userEmail: email,
        itemQty: 2,
        product: {
          id: 1,
          name: 'Product 1',
          description: 'This is product 1',
          price: 19.99,
          stockQty: 10,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 3,
        product: {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3',
          price: 39.99,
          stockQty: 30,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 4,
        product: {
          id: 4,
          name: 'Product 4',
          description: 'This is product 4',
          price: 49.99,
          stockQty: 40,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 2,
        product: {
          id: 5,
          name: 'Product 5',
          description: 'This is product 5',
          price: 19.99,
          stockQty: 10,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 6,
          name: 'Product 6',
          description: 'This is product 6',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: productId,
          name: `Product ${productId}`,
          description: `This is product ${productId}`,
          price: 19.99,
          stockQty: 10,
          imageUrl: 'images/test.jpeg',
        },
      },
    ];
    resolve(cartItems);
  });
};

// Function to remove a product from the cart
export const removeProductFromCart = async (
  email: string,
  productId: number,
): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    const cartItems: CartItem[] = [
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 3,
        product: {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3',
          price: 39.99,
          stockQty: 30,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 4,
        product: {
          id: 4,
          name: 'Product 4',
          description: 'This is product 4',
          price: 49.99,
          stockQty: 40,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 2,
        product: {
          id: 5,
          name: 'Product 5',
          description: 'This is product 5',
          price: 19.99,
          stockQty: 10,
          imageUrl: 'images/test.jpeg',
        },
      },
      {
        userEmail: email,
        itemQty: 1,
        product: {
          id: 6,
          name: 'Product 6',
          description: 'This is product 6',
          price: 29.99,
          stockQty: 20,
          imageUrl: 'images/test.jpeg',
        },
      },
    ];
    resolve(cartItems);
  });
};
