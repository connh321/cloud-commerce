import { Product } from './product';

export type CartItem = {
  userEmail: string;
  itemQty: number;
  product: Product;
}
