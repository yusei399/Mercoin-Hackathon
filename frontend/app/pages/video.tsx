import React, { useState } from "react";
import VideoIndex from "../components/video/VideoIndex";
import CommentForm from "../components/video/CommentForm";

export default function VideoPage() {
  return (
    <div className="home-container">
      <VideoIndex />
      <CommentForm />
    </div>
  );
}

