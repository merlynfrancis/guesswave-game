import type { AppProps } from "next/app";
import "../styles/globals.scss";
import MainLayout from "../Layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    
  );
}

export default MyApp;
