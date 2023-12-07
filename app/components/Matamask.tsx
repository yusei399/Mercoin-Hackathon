"use client";
import { useState, useEffect } from "react";

const Matamask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [metaMaskFlag, setMetaMaskFlag] = useState<boolean>(false);

  useEffect(() => {
    const tmpFlag = (window as any).ethereum && (window as any).ethereum.isMetaMask;
    setMetaMaskFlag(tmpFlag);

    if (tmpFlag) {
      // Request account access from MetaMask when the component mounts
      (window as any).ethereum
        .enable()
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        })
        .catch((error: Error) => {
          setErrorMessage(error.message);
        });
    }
  }, []);

  return (
    <div>
      <div>{account}</div>
      <div>
        {account ? (
          <button>Connected</button>
        ) : (
          <div>Connecting to MetaMask...</div>
        )}
      </div>
    </div>
  );
};

export default Matamask;


