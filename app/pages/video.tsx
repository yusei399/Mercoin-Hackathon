import React, { useState } from "react";
import VideoIndex from "../components/VideoIndex";
import CommentForm from "../components/CommentForm";

export default function VideoPage() {
  return (
    <div className="home-container">
      <VideoIndex />
      <CommentForm />
    </div>
  );
}

