"use client";
import React from "react";
import { useMetaMask } from "@/app/context/MetaMaskContextProvider";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
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
    <div style={{ textAlign: 'center', marginTop: '20px' }}> 
    {!isLoggedIn ? (
      <Button variant="contained" onClick={loginWithMetaMask}>
        Log in with MetaMask
      </Button>
    ) : (
      <div>
        <Button variant="contained" onClick={handleMint} style={{ marginRight: '10px' }}> 
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
