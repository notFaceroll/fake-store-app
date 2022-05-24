// import "../styles/globals.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { ProductProvider } from "../store/ProductProvider";
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
