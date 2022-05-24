import { createContext } from "react";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export type ProductList = {
  products: Product[];
  categories: string[];
};



const ProductContext = createContext<ProductList | null>(null);

export default ProductContext;
