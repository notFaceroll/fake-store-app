import type { NextPage } from "next";
import { useContext } from "react";
import ProductContext from "../store/product-context";
import { Card } from "../components/card";

const Home: NextPage = () => {
  const productCtx = useContext(ProductContext);
  const items = productCtx?.products;

  return (
    <main className="category">
      <div className="category__title">
        <h1 className="category__heading">On Fucking Sale</h1>
      </div>
      <ul className="main__list">
        {!items ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => <Card key={item.id} item={item} />)
        )}
      </ul>
    </main>
  );
};

export default Home;
