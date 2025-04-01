import { Product } from "./product";

export interface CartItem {
  userEmail: string;
  itemQty: number;
  product: Product;
}
