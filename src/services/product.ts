import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => {
    const products: Product[] = [
      { id: 1, name: "Product 1", description: "This is product 1", price: 19.99, stockQty: 10, lastUpdated: "2022-01-01", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 2, name: "Product 2", description: "This is product 2", price: 29.99, stockQty: 20, lastUpdated: "2022-01-02", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 3, name: "Product 3", description: "This is product 3", price: 39.99, stockQty: 30, lastUpdated: "2022-01-03", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 4, name: "Product 4", description: "This is product 4", price: 49.99, stockQty: 40, lastUpdated: "2022-01-04", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 5, name: "Product 5", description: "This is product 5", price: 19.99, stockQty: 10, lastUpdated: "2022-01-01", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 6, name: "Product 6", description: "This is product 6", price: 29.99, stockQty: 20, lastUpdated: "2022-01-02", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 7, name: "Product 7", description: "This is product 7", price: 39.99, stockQty: 30, lastUpdated: "2022-01-03", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 8, name: "Product 8", description: "This is product 8", price: 49.99, stockQty: 40, lastUpdated: "2022-01-04", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 9, name: "Product 9", description: "This is product 9", price: 59.99, stockQty: 50, lastUpdated: "2022-01-05", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 10, name: "Product 10", description: "This is product 10", price: 69.99, stockQty: 60, lastUpdated: "2022-01-06", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 11, name: "Product 11", description: "This is product 11", price: 19.99, stockQty: 10, lastUpdated: "2022-01-07", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 12, name: "Product 12", description: "This is product 12", price: 29.99, stockQty: 20, lastUpdated: "2022-01-08", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 13, name: "Product 13", description: "This is product 13", price: 39.99, stockQty: 30, lastUpdated: "2022-01-09", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 14, name: "Product 14", description: "This is product 14", price: 49.99, stockQty: 40, lastUpdated: "2022-01-10", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 15, name: "Product 15", description: "This is product 15", price: 59.99, stockQty: 50, lastUpdated: "2022-01-11", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 16, name: "Product 16", description: "This is product 16", price: 69.99, stockQty: 60, lastUpdated: "2022-01-12", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 17, name: "Product 17", description: "This is product 17", price: 19.99, stockQty: 10, lastUpdated: "2022-01-13", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 18, name: "Product 18", description: "This is product 18", price: 29.99, stockQty: 20, lastUpdated: "2022-01-14", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 19, name: "Product 19", description: "This is product 19", price: 39.99, stockQty: 30, lastUpdated: "2022-01-15", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 20, name: "Product 20", description: "This is product 20", price: 49.99, stockQty: 40, lastUpdated: "2022-01-16", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 21, name: "Product 21", description: "This is product 21", price: 59.99, stockQty: 50, lastUpdated: "2022-01-17", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 22, name: "Product 22", description: "This is product 22", price: 69.99, stockQty: 60, lastUpdated: "2022-01-18", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 23, name: "Product 23", description: "This is product 23", price: 19.99, stockQty: 10, lastUpdated: "2022-01-19", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 24, name: "Product 24", description: "This is product 24", price: 29.99, stockQty: 20, lastUpdated: "2022-01-20", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 25, name: "Product 25", description: "This is product 25", price: 39.99, stockQty: 30, lastUpdated: "2022-01-21", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 26, name: "Product 26", description: "This is product 26", price: 49.99, stockQty: 40, lastUpdated: "2022-01-22", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 27, name: "Product 27", description: "This is product 27", price: 59.99, stockQty: 50, lastUpdated: "2022-01-23", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 28, name: "Product 28", description: "This is product 28", price: 69.99, stockQty: 60, lastUpdated: "2022-01-24", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 29, name: "Product 29", description: "This is product 29", price: 19.99, stockQty: 10, lastUpdated: "2022-01-25", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 30, name: "Product 30", description: "This is product 30", price: 29.99, stockQty: 20, lastUpdated: "2022-01-26", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 31, name: "Product 31", description: "This is product 31", price: 39.99, stockQty: 30, lastUpdated: "2022-01-27", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 32, name: "Product 32", description: "This is product 32", price: 49.99, stockQty: 40, lastUpdated: "2022-01-28", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 33, name: "Product 33", description: "This is product 33", price: 59.99, stockQty: 50, lastUpdated: "2022-01-29", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 34, name: "Product 34", description: "This is product 34", price: 69.99, stockQty: 60, lastUpdated: "2022-01-30", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 35, name: "Product 35", description: "This is product 35", price: 19.99, stockQty: 10, lastUpdated: "2022-01-31", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 36, name: "Product 36", description: "This is product 36", price: 29.99, stockQty: 20, lastUpdated: "2022-02-01", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 37, name: "Product 37", description: "This is product 37", price: 39.99, stockQty: 30, lastUpdated: "2022-02-02", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 38, name: "Product 38", description: "This is product 38", price: 49.99, stockQty: 40, lastUpdated: "2022-02-03", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 39, name: "Product 39", description: "This is product 39", price: 59.99, stockQty: 50, lastUpdated: "2022-02-04", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 40, name: "Product 40", description: "This is product 40", price: 69.99, stockQty: 60, lastUpdated: "2022-02-05", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 41, name: "Product 41", description: "This is product 41", price: 19.99, stockQty: 10, lastUpdated: "2022-02-06", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 42, name: "Product 42", description: "This is product 42", price: 29.99, stockQty: 20, lastUpdated: "2022-02-07", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 43, name: "Product 43", description: "This is product 43", price: 39.99, stockQty: 30, lastUpdated: "2022-02-08", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 44, name: "Product 44", description: "This is product 44", price: 49.99, stockQty: 40, lastUpdated: "2022-02-09", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 45, name: "Product 45", description: "This is product 45", price: 59.99, stockQty: 50, lastUpdated: "2022-02-10", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 46, name: "Product 46", description: "This is product 46", price: 69.99, stockQty: 60, lastUpdated: "2022-02-11", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 47, name: "Product 47", description: "This is product 47", price: 19.99, stockQty: 10, lastUpdated: "2022-02-12", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 48, name: "Product 48", description: "This is product 48", price: 29.99, stockQty: 20, lastUpdated: "2022-02-13", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 49, name: "Product 49", description: "This is product 49", price: 39.99, stockQty: 30, lastUpdated: "2022-02-14", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 50, name: "Product 50", description: "This is product 50", price: 49.99, stockQty: 40, lastUpdated: "2022-02-15", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
    ];
    resolve(products);
  });
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => {
    const products: Product[] = [
      { id: 1, name: "Product 1", description: "This is product 1", price: 19.99, stockQty: 10, lastUpdated: "2022-01-01", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 2, name: "Product 2", description: "This is product 2", price: 29.99, stockQty: 20, lastUpdated: "2022-01-02", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 3, name: "Product 3", description: "This is product 3", price: 39.99, stockQty: 30, lastUpdated: "2022-01-03", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 4, name: "Product 4", description: "This is product 4", price: 49.99, stockQty: 40, lastUpdated: "2022-01-04", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 5, name: "Product 5", description: "This is product 5", price: 19.99, stockQty: 10, lastUpdated: "2022-01-01", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 6, name: "Product 6", description: "This is product 6", price: 29.99, stockQty: 20, lastUpdated: "2022-01-02", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 7, name: "Product 7", description: "This is product 7", price: 39.99, stockQty: 30, lastUpdated: "2022-01-03", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 8, name: "Product 8", description: "This is product 8", price: 49.99, stockQty: 40, lastUpdated: "2022-01-04", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 9, name: "Product 9", description: "This is product 9", price: 59.99, stockQty: 50, lastUpdated: "2022-01-05", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 10, name: "Product 10", description: "This is product 10", price: 69.99, stockQty: 60, lastUpdated: "2022-01-06", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 11, name: "Product 11", description: "This is product 11", price: 19.99, stockQty: 10, lastUpdated: "2022-01-07", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
    ];
    resolve(products);
  });
};

export const getProductsBySearch = async (search: string | string[] | undefined): Promise<Product[]> => {
  if (!search) {
    return new Promise(resolve => resolve([]));
  }
  console.log(search);
  return new Promise(resolve => {
    const products: Product[] = [
      { id: 1, name: "Product 1", description: "This is product 1", price: 19.99, stockQty: 10, lastUpdated: "2022-01-01", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 2, name: "Product 2", description: "This is product 2", price: 29.99, stockQty: 20, lastUpdated: "2022-01-02", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 3, name: "Product 3", description: "This is product 3", price: 39.99, stockQty: 30, lastUpdated: "2022-01-03", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 4, name: "Product 4", description: "This is product 4", price: 49.99, stockQty: 40, lastUpdated: "2022-01-04", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 5, name: "Product 5", description: "This is product 5", price: 19.99, stockQty: 10, lastUpdated: "2022-01-01", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
      { id: 6, name: "Product 6", description: "This is product 6", price: 29.99, stockQty: 20, lastUpdated: "2022-01-02", categoryId: 2, discount: 10, imageUrl: "images/test.jpeg" },
      { id: 7, name: "Product 7", description: "This is product 7", price: 39.99, stockQty: 30, lastUpdated: "2022-01-03", categoryId: 3, discount: 20, imageUrl: "images/test.jpeg" },
      { id: 8, name: "Product 8", description: "This is product 8", price: 49.99, stockQty: 40, lastUpdated: "2022-01-04", categoryId: 4, discount: 30, imageUrl: "images/test.jpeg" },
      { id: 9, name: "Product 9", description: "This is product 9", price: 59.99, stockQty: 50, lastUpdated: "2022-01-05", categoryId: 5, discount: 40, imageUrl: "images/test.jpeg" },
      { id: 10, name: "Product 10", description: "This is product 10", price: 69.99, stockQty: 60, lastUpdated: "2022-01-06", categoryId: 6, discount: 50, imageUrl: "images/test.jpeg" },
      { id: 11, name: "Product 11", description: "This is product 11", price: 19.99, stockQty: 10, lastUpdated: "2022-01-07", categoryId: 1, discount: 0, imageUrl: "images/test.jpeg" },
    ];
    resolve(products);
  });
};


