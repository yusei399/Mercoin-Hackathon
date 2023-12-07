import React, { useState } from "react";
import VideoIndex from "../components/VideoIndex";
import CommentForm from "../components/CommentForm";

export default function Home() {
  return (
    <div>
      <VideoIndex />
      <CommentForm />
    </div>
  );
}
