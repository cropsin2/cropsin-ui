import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCheckIfWalletIsConnected } from "../components/hooks";
import "../styles/globals.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useCheckIfWalletIsConnected();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
