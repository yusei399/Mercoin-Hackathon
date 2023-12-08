"use client";
import React, { useEffect, useState } from "react";
import { useMetaMask } from "@/app/context/MetaMaskContextProvider";
import Button from "@mui/material/Button";
import {
  executeMint,
  getMetaMaskBalance,
  getMetaMaskTransactions,
} from "@/app/api/metamask";

const MetaMaskAuth = () => {
  const { metaMaskAddress, isLoggedIn, loginWithMetaMask, logout } =
    useMetaMask();
  const [metaMaskBalance, setMetaMaskBalance] = useState<number | null>(null);
  const [metaMaskTransactions, setMetaMaskTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balance = await getMetaMaskBalance(metaMaskAddress);
        setMetaMaskBalance(balance);

        const transactions = await getMetaMaskTransactions(metaMaskAddress);
        setMetaMaskTransactions(transactions);
      } catch (error) {
        console.error("Failed to fetch MetaMask data: ", error);
      }
    };
    fetchData();
  }, [metaMaskAddress]);

  const sortedTransactions = metaMaskTransactions.sort(
    (a, b) => a.blockNumber - b.blockNumber
  );

  const handleMint = async () => {
    try {
      await executeMint(1, "0x3F47b2860BD3AA708F5f8A5e24319c71602E4de8");
      console.log("Mint executed successfully!");
    } catch (error) {
      console.error("Failed to execute mint: ", error);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Button variant="contained" onClick={loginWithMetaMask}>
          Log in with MetaMask
        </Button>
      ) : (
        <div>
          <p>MetaMask Address: {metaMaskAddress}</p>
          <p>残高: {metaMaskBalance}</p>
          <p>
            トランザクション:{" "}
            {sortedTransactions.map((transaction, index) => (
              <div key={index}>
                Block: {transaction.blockNumber}, Value: {transaction.value}
              </div>
            ))}
          </p>
          <Button variant="contained" onClick={handleMint}>
            Execute Mint
          </Button>
          <Button variant="contained" onClick={logout}>
            Log out
          </Button>
        </div>
      )}
    </div>
  );
};

export default MetaMaskAuth;
