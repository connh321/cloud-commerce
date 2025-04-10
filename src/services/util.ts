import { Product } from '@interfaces/product';
import { fetchAuthSession } from 'aws-amplify/auth';

/**
 * Retrieves authentication token from current session
 * @returns {Promise<string>} Session token for API requests
 * @throws {Error} If no token found or user not authenticated
 */
export const getAuthToken = async (): Promise<string> => {
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

/**
 * Constructs full S3 URL for product images
 * @param {string} imageKey Image key stored in database
 * @returns {string} Complete S3 URL for image
 */
const getImageUrl = (imageKey: string): string =>
  `https://cloud-commerce-production-images.s3.us-east-2.amazonaws.com/${imageKey}`;

export const transformProductImageUrls = (products: Product[]) => {
  return products.map((product) => ({
    ...product,
    imageUrl: getImageUrl(product.imageUrl),
  }));
};
