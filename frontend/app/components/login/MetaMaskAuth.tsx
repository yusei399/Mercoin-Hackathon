"use client";
import React, { useEffect, useState } from "react";
import { useMetaMask } from "@/app/context/MetaMaskContextProvider";
import Button from "@mui/material/Button";
import { executeMint } from "@/app/api/metamask";

const MetaMaskAuth = () => {
  const { metaMaskAddress, isLoggedIn, loginWithMetaMask, logout } =
    useMetaMask();

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
      {!isLoggedIn ? (
        <Button variant="contained" onClick={loginWithMetaMask}>
          Log in with MetaMask
        </Button>
      ) : (
        <div>
          <p>MetaMask Address: {metaMaskAddress}</p>
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
