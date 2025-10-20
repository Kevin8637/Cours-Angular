export type CategoryOfProduct = 'gaming' | 'clothing' | 'home' | 'sports' | 'electronics';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: CategoryOfProduct;
  inStock: boolean;
  rating: number;
  reviews? : number[];
}

export type Review = {
  productId: number;
  rating: number;
  comment: string;
  date: Date;
}
