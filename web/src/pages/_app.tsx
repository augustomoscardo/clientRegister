import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { FooterComponent } from "../components/Footer";
import { Header } from "../components/Header";
import { ClientsProvider } from "../hooks/useClients";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClientsProvider>
      <Header />
      <Component {...pageProps} />
      <FooterComponent />
      <Toaster />
      <GlobalStyle />
    </ClientsProvider>
  );
}

export default MyApp;
