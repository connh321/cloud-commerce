import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => {
    const products: Product[] = [
      {
        id: 1,
        name: "Product 1",
        description: "This is product 1",
        price: 19.99,
        stockQty: 10,
        lastUpdated: "2022-01-01",
        categoryId: 1,
        discount: 0,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 2,
        name: "Product 2",
        description: "This is product 2",
        price: 29.99,
        stockQty: 20,
        lastUpdated: "2022-01-02",
        categoryId: 2,
        discount: 10,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 3,
        name: "Product 3",
        description: "This is product 3",
        price: 39.99,
        stockQty: 30,
        lastUpdated: "2022-01-03",
        categoryId: 3,
        discount: 20,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 4,
        name: "Product 4",
        description: "This is product 4",
        price: 49.99,
        stockQty: 40,
        lastUpdated: "2022-01-04",
        categoryId: 4,
        discount: 30,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 5,
        name: "Product 5",
        description: "This is product 5",
        price: 19.99,
        stockQty: 10,
        lastUpdated: "2022-01-01",
        categoryId: 1,
        discount: 0,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 6,
        name: "Product 6",
        description: "This is product 6",
        price: 29.99,
        stockQty: 20,
        lastUpdated: "2022-01-02",
        categoryId: 2,
        discount: 10,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 7,
        name: "Product 7",
        description: "This is product 7",
        price: 39.99,
        stockQty: 30,
        lastUpdated: "2022-01-03",
        categoryId: 3,
        discount: 20,
        imageUrl: "images/test.jpeg",
      },
      {
        id: 8,
        name: "Product 8",
        description: "This is product 8",
        price: 49.99,
        stockQty: 40,
        lastUpdated: "2022-01-04",
        categoryId: 4,
        discount: 30,
        imageUrl: "images/test.jpeg",
      }
    ];
    resolve(products);
  });
};


