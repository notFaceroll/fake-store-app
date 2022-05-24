import type { NextPage } from "next";
import { useContext } from "react";
import ProductContext from "../store/product-context";
import { Card } from "../components/card";

import classes from "./home.module.scss";

const Home: NextPage = () => {
  const productCtx = useContext(ProductContext);
  const items = productCtx?.products;

  return (
    <>
      <h1 className={classes.title}>Today&#39;s Featured Items</h1>
      <div className={classes.main}>
        {!items ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <Card key={item.id}>
              <div>{item.title}</div>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
