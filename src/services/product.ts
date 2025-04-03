import { Product } from '@/interfaces/product';
import '@/_lib/utils/amplifyConfig';
import { Schema } from 'amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { getAuthToken } from './util';

const client = generateClient<Schema>();
export const getProducts = async (): Promise<Product[]> => {
  const authToken = await getAuthToken();
  const { data: items, errors } = await client.models.Product.list({
    selectionSet: [
      'id',
      'name',
      'description',
      'price',
      'stockQty',
      'imageUrl',
    ],
    authMode: 'apiKey',
    authToken: authToken,
  });
  if (errors) {
    console.error('Error fetching products3:', errors);
    throw new Error('Failed to fetch products');
  }
  console.log('items', items)
  return items.map((item) => ({
    id: item.id || '',
    name: item.name || '',
    description: item.description || '',
    price: item.price || 0,
    stockQty: item.stockQty || 0,
    imageUrl: item.imageUrl || '',
  }));
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const authToken = await getAuthToken();

  // Fetch all featured products with their related product details
  const { data: featuredItems, errors } =
    await client.models.FeaturedProduct.list({
      selectionSet: [
        'productId',
        'product.id',
        'product.name',
        'product.description',
        'product.price',
        'product.stockQty',
        'product.imageUrl',
      ],
      authMode: 'apiKey',
      authToken: authToken,
    });

  if (errors) {
    console.error('Error fetching featured products:', errors);
    throw new Error('Failed to fetch featured products');
  }

  // Map the featured items to return the products with the necessary details
  const products = featuredItems.map((item) => ({
    id: item.product?.id || '',
    name: item.product?.name || '',
    description: item.product?.description || '',
    price: item.product?.price || 0,
    stockQty: item.product?.stockQty || 0,
    imageUrl: item.product?.imageUrl || '',
  }));

  return products;
};

export const getProductsBySearch = async (
  search: string | string[] | undefined,
): Promise<Product[]> => {
  const authToken = await getAuthToken();
  if (!search || search === '') {
    return new Promise((resolve) => resolve([])); // Return empty array if no search term is provided
  }

  // If 'search' is an array, we can combine the search terms
  const searchTerm = Array.isArray(search) ? search.join(' ') : search;
  console.log('search, searchTerm', search, searchTerm);

  // Query the backend to fetch products that match the search term
  const { data: products, errors } = await client.models.Product.list({
    filter: {
      // Assuming we are searching for products by name or description
      or: [
        { name: { contains: searchTerm } },
        { description: { contains: searchTerm } },
      ],
    },
    selectionSet: [
      'id',
      'name',
      'description',
      'price',
      'stockQty',
      'imageUrl',
    ],
    authMode: 'apiKey',
    authToken: authToken,
  });

  if (errors) {
    console.error('Error fetching products by search:', errors);
    throw new Error('Failed to fetch products by search');
  }

  return products.map((item) => ({
    id: item?.id || '',
    name: item?.name || '',
    description: item?.description || '',
    price: item?.price || 0,
    stockQty: item?.stockQty || 0,
    imageUrl: item?.imageUrl || '',
  }));
};
