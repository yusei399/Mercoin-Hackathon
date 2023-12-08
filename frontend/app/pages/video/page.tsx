import React, { useState } from "react";
import VideoIndex from "../../components/video/VideoIndex";
import CommentForm from "../../components/video/CommentForm";
import MetaMaskInfo from "@/app/components/metamask_info/MetaMaskInfo";
import { MetaMaskProvider } from "@/app/context/MetaMaskContextProvider";
import "../../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <MetaMaskProvider>
        <VideoIndex />
        <CommentForm />
        <MetaMaskInfo />
      </MetaMaskProvider>
    </div>
  );
}
