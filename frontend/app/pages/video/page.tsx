import React, { useState } from "react";
import VideoIndex from "../../components/video/VideoIndex";
import CommentForm from "../../components/video/CommentForm";
import { MetaMaskProvider } from "@/app/context/MetaMaskContextProvider";
import "../../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <MetaMaskProvider>
        <VideoIndex />
        <CommentForm />
      </MetaMaskProvider>
    </div>
  );
}
