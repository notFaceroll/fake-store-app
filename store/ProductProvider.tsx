import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import ProductContext, { Product } from "./product-context";

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const getStoreItems = useCallback(async () => {
    const products = await axios.get<Product[]>(
      "https://fakestoreapi.com/products?limit=5"
    );
    const allCategories = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    setItems(products.data);
    setCategories(allCategories.data);
  }, []);

  useEffect(() => {
    getStoreItems();
  }, []);

  const productCtx = {
    products: items,
    categories,
  };

  const filteredItems = items.filter((item) => {
    return item.category !== "men's clothing";
  });
  // console.log("Filter: ", filteredItems);
  return (
    <ProductContext.Provider value={productCtx}>
      {children}
    </ProductContext.Provider>
  );
};
