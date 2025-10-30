export type CategoryOfProduct =
  | "High-Tech"
  | "Mode"
  | "Maison"
  | "Sport"
  | "Informatique"
  | "Cuisine"
  | "Beauté"
  | "Loisirs"
  | "Bureau"
  | "Accessoires";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: CategoryOfProduct;
  stock: number;
  rating: number;
  active : boolean;
  reviews? : number[];
}
