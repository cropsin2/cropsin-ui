import { Dispatch, SetStateAction, createContext } from "react";

export type CurrentAccount = string | null;
export type SetCurrentAccountAction = Dispatch<SetStateAction<CurrentAccount>>;
export type Loading = boolean;
export type SetLoading = Dispatch<SetStateAction<Loading>>;

interface EthereumWalletContextType {
  currentAccount: CurrentAccount;
  setCurrentAccount: SetCurrentAccountAction;
  fbUser: any;
  setFbUser: Dispatch<SetStateAction<any>>;
  loading: Loading;
  setLoading: SetLoading;
}

export const EthereumWalletContext = createContext<EthereumWalletContextType>({
  currentAccount: "",
  setCurrentAccount: () => null,
  loading: false,
  setLoading: () => null,
  fbUser: {},
  setFbUser: () => null,
});
