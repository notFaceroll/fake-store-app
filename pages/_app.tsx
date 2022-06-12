import "../styles/app.scss";
import type { AppProps } from "next/app";
import { ProductProvider } from "../store/ProductProvider";
import { Layout } from "../components/layout";
import { CartProvider } from "../store/CartProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Head>
        <title>Not Faceroll&#39;s Awesome Store</title>
        <meta name="description" content="An e-commerce study project made with the fakestoreapi" />
      </Head>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ProductProvider>
  );
}

export default MyApp;
