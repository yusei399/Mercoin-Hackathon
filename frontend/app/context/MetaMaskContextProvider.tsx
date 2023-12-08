"use client";
import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from "react";
import { getMetaMaskAddress } from "../api/metamask";

interface MetaMaskContextProps {
  metaMaskAddress: string;
  isLoggedIn: boolean;
  loginWithMetaMask: () => void;
  logout: () => void;
}

interface MetaMaskProviderProps {
  children: ReactNode;
}

const MetaMaskContext = createContext<MetaMaskContextProps | undefined>(
  undefined
);

export const MetaMaskProvider: React.FC<MetaMaskProviderProps> = ({
  children,
}) => {
  const [metaMaskAddress, setMetaMaskAddress] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const address = localStorage.getItem('metaMaskAddress') || '';
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setMetaMaskAddress(address);
    setIsLoggedIn(loggedIn);
  }, []);

  const loginWithMetaMask = async () => {
    try {
      const address = await getMetaMaskAddress();
      setMetaMaskAddress(address);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in with MetaMask:", error);
      setIsLoggedIn(false);
    }
  };
  const logout = () => {
    setMetaMaskAddress("");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.setItem("metaMaskAddress", metaMaskAddress);
    localStorage.setItem("isLoggedIn", String(isLoggedIn));
  }, [metaMaskAddress, isLoggedIn]);

  return (
    <MetaMaskContext.Provider
      value={{
        metaMaskAddress,
        isLoggedIn,
        loginWithMetaMask,
        logout,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (!context) {
    throw new Error("useMetaMask must be used within a MetaMaskProvider");
  }
  return context;
};
