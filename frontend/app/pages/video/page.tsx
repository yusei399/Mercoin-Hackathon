import React, { useState } from "react";
import VideoIndex from "../../components/video/VideoIndex";
import CommentForm from "../../components/video/CommentForm";
import Menu from "../../components/menu/Menu";
import MercariItems from "@/app/components/mercari_items/MercariItems";
import { MetaMaskProvider } from "@/app/context/MetaMaskContextProvider";
import "../../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div className="header" >
        <Menu />
      </div>
      <div style={{ display: "flex", width: "90%", margin: "0 auto" }}>
        <MetaMaskProvider>
          <div style={{ flex: "0 0 65%", margin: "10px 20px" }}>
            <VideoIndex />
            <MercariItems />
          </div>
          <div style={{ flex: "0 0 10%", margin: "5px 20px" }}>
            <CommentForm />
          </div>
        </MetaMaskProvider>
      </div>
    </div>
  );
}
