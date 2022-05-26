import type { NextPage } from "next";
import { useContext } from "react";
import ProductContext from "../store/product-context";
import { Card } from "../components/card";

const Home: NextPage = () => {
  const productCtx = useContext(ProductContext);
  const items = productCtx?.products;

  return (
    <main className="main">
      <h1 className="title">Popular Items</h1>
      <ul className="main__list">
        {!items ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <Card key={item.id}>
              <div>{item.title}</div>
            </Card>
          ))
        )}
      </ul>
    </main>
  );
};

export default Home;
