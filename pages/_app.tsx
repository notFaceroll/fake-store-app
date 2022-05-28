// import "../styles/globals.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { ProductProvider } from "../store/ProductProvider";
import { Layout } from "../components/layout";
import { CartProvider } from "../store/CartProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ProductProvider>
  );
}

export default MyApp;
