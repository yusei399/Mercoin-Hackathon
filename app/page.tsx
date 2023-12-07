import React, { useState } from "react";
import VideoIndex from "./components/VideoIndex";
import CommentForm from "./components/CommentForm";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <VideoIndex />
      <CommentForm />
    </div>
  );
}
