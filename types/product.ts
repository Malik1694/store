// types/product.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number; // This will now represent the sale price
  originalPrice?: number; // The price before discount
  description: string;
  imageUrl: string;
  category: string;
}
