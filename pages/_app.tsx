import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  CurrentAccount,
  EthereumWalletContext,
  Loading,
} from "../components/context";
import "../styles/globals.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [currentAccount, setCurrentAccount] = useState<CurrentAccount>(null);
  const [loading, setLoading] = useState<Loading>(false);
  const [fbUser, setFbUser] = useState<any>(false);

  return (
    <EthereumWalletContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        loading,
        setLoading,
        fbUser,
        setFbUser,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </EthereumWalletContext.Provider>
  );
}

export default MyApp;
