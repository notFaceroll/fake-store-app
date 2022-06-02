import type { GetStaticProps, NextPage } from "next";
import { Product } from "../store/product-context";
import axios from "axios";

import { Card } from "../components/card";
import { ProductsList } from "../components/products-list";

interface HomeProps {
  featuredProducts: Product[];
}

const Home: NextPage<HomeProps> = ({ featuredProducts }) => {
  return (
    <main className="category">
      {/* this can be a component */}
      <div className="category__title">
        <h1 className="category__heading">Popular Items</h1>
      </div>
      <ProductsList>
        {featuredProducts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ProductsList>

      {/* this also can be a component */}
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

export const getStaticProps: GetStaticProps = async () => {
  const featuredProducts = await axios.get<Product[]>(
    "https://fakestoreapi.com/products?limit=6"
  );
  return {
    props: {
      featuredProducts: featuredProducts.data,
    },
  };
};
