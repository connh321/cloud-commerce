import { Product } from '@interfaces/product';
import { fetchAuthSession } from 'aws-amplify/auth';

export const getAuthToken = async () => {
  try {
    const session = await fetchAuthSession();
    const idToken = session.credentials?.sessionToken?.toString(); // Fetch ID token
    if (!idToken) {
      throw new Error('No ID token found');
    }
    return idToken;
  } catch (error) {
    console.error('Error getting authentication token:', error);
    throw new Error('User is not authenticated');
  }
};

const getImageUrl = (imageKey: string) =>
  `https://cloud-commerce-production-images.s3.us-east-2.amazonaws.com/${imageKey}`;

export const transformProductImageUrls = (products: Product[]) => {
  return products.map((product) => ({
    ...product,
    imageUrl: getImageUrl(product.imageUrl),
  }));
};