"use client";
import React, { useEffect, useState } from "react";
import { useMetaMask } from "@/app/context/MetaMaskContextProvider";
import Button from "@mui/material/Button";
import { executeMint, getMetaMaskAddress } from "@/app/api/metamask";

const MetaMask = () => {
  const [metaMaskAddress, setMetaMaskAddress] = useState("");

  const fetchMetaMaskAddress = async () => {
    try {
      const address = await getMetaMaskAddress();
      setMetaMaskAddress(address);
    } catch (error) {
      console.error("Error getting MetaMask address:", error);
    }
  };

  const handleMint = async () => {
    try {
      await executeMint(1, metaMaskAddress);
      console.log("Mint executed successfully!");
    } catch (error) {
      console.error("Failed to execute mint: ", error);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={fetchMetaMaskAddress}>
        Log in with MetaMask
      </Button>
      <p>MetaMask Address: {metaMaskAddress}</p>
      <Button variant="contained" onClick={handleMint}>
        Execute Mint
      </Button>
    </div>
  );
};

export default MetaMask;