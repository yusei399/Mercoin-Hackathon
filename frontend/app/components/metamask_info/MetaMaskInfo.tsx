"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useMetaMask } from "@/app/context/MetaMaskContextProvider";
import { getMetaMaskBalance } from "@/app/api/metamask";
import Link from "next/link";

const MetaMaskInfo = () => {
  const { metaMaskAddress, isLoggedIn } = useMetaMask();
  const [metaMaskBalance, setMetaMaskBalance] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balance = await getMetaMaskBalance(metaMaskAddress);
        setMetaMaskBalance(balance);
      } catch (error) {
        console.error("Failed to fetch MetaMask data: ", error);
      }
    };
    fetchData();
  }, [metaMaskAddress]);
  return (
    <div
      className="metamask-info"
      style={{
        backgroundColor: "#f0f0f0",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "320px",
        margin: "20px",
      }}
    >
      <p
        style={{
          margin: "5px 0",
          fontSize: "18px",
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
          paddingBottom: "5px",
        }}
      >
        Wallet
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p style={{ margin: "10px 0 5px 0", fontSize: "16px", color: "#333" }}>
          トークン残高: {metaMaskBalance.toFixed(5)}
        </p>
        <Link href="/pages/user" style={{ textDecoration: "none" }}>
          <Button variant="contained" style={{ marginTop: "5px", marginLeft: "15px" }}>
            Tokenを管理
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MetaMaskInfo;
