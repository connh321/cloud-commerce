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
      'productId',
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
  const products = items.map((item) => ({
    id: item.id || '',
    productId: item.productId || '',
    name: item.name || '',
    description: item.description || '',
    price: item.price || 0,
    stockQty: item.stockQty || 0,
    imageUrl: item.imageUrl || '',
  }));

  return transformProductImageUrls(products);
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const authToken = await getAuthToken();

  // Fetch all featured products with their related product details
  const { data: featuredItems, errors } =
    await client.models.FeaturedProduct.list({
      selectionSet: [
        'featuredId',
        'productId',
        'product.id',
        'product.name',
        'product.description',
        'product.price',
        'product.stockQty',
        'product.imageUrl',
        'product.productId',
      ],
      authMode: 'apiKey',
      authToken: authToken,
    });

  if (errors) {
    console.error('Error fetching featured products:', errors);
    throw new Error('Failed to fetch featured products');
  }

  // Map the featured items to return the products with the necessary details
  const products = featuredItems
    .sort((a, b) => a.featuredId.localeCompare(b.featuredId))
    .map((item) => ({
      id: item.product?.id || '',
      productId: item.productId || '',
      name: item.product?.name || '',
      description: item.product?.description || '',
      price: item.product?.price || 0,
      stockQty: item.product?.stockQty || 0,
      imageUrl: item.product?.imageUrl || '',
    }));

  return transformProductImageUrls(products);
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
  const lowerSearchTerm = searchTerm.toLowerCase();
  const { data: items, errors } = await client.models.Product.list({
    filter: {
      or: [
        { name: { contains: lowerSearchTerm } },
        { description: { contains: lowerSearchTerm } },
      ],
    },
    selectionSet: [
      'id',
      'productId',
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

  const products = items.map((item) => ({
    id: item.id || '',
    productId: item.productId || '',
    name: item.name || '',
    description: item.description || '',
    price: item.price || 0,
    stockQty: item.stockQty || 0,
    imageUrl: item.imageUrl || '',
  }));

  return transformProductImageUrls(products);
};

const getImageUrl = (imageKey: string) =>
  `https://cloud-commerce-production-images.s3.us-east-2.amazonaws.com/${imageKey}`;

const transformProductImageUrls = (products: Product[]) => {
  return products.map((product) => ({
    ...product,
    imageUrl: getImageUrl(product.imageUrl),
  }));
};
