"use client";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchMetaMaskAddress();
  }, []);

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
      <p>MetaMask Address: {metaMaskAddress}</p>
      <Button variant="contained" onClick={handleMint}>
        Execute Mint
      </Button>
    </div>
  );
};

export default MetaMask;
