import { Product } from './product';

export interface CartItem {
  id: string;
  userEmail: string;
  itemQty: number;
  product: Product;
}
