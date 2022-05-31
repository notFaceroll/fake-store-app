import { useContext } from "react";
import type { NextPage } from "next";
import ProductContext from "../store/product-context";

import { Card } from "../components/card";
import { ProductsList } from "../components/products-list";

const Home: NextPage = () => {
  const productCtx = useContext(ProductContext);
  const items = productCtx?.products;

  return (
    <main className="category">
      <div className="category__title">
        <h1 className="category__heading">Popular Items</h1>
      </div>
      <ProductsList>
        {!items ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => <Card key={item.id} item={item} />)
        )}
      </ProductsList>
      <div className="custom-shape-divider-bottom-1653940688">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Home;
