import { Product } from '@/interfaces/product';

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    const products: Product[] = [];
    resolve(products);
  });
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    const products: Product[] = [];
    resolve(products);
  });
};

export const getProductsBySearch = async (
  search: string | string[] | undefined,
): Promise<Product[]> => {
  if (!search) {
    return new Promise((resolve) => resolve([]));
  }
  return new Promise((resolve) => {
    const products: Product[] = [];
    resolve(products);
  });
};
