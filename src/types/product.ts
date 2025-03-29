export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQty: number;
  lastUpdated: string; 
  categoryId: number;
  discount: number;
  imageUrl: string;
}