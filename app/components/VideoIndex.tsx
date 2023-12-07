"use client";
import React, { useState } from "react";
import "../styles/VideoIndex.css";

const VideoIndex = () => {
  const videoTitle = "動画タイトル";
  const videoDescription = "とってもおもしろい動画 \n ぜったいに見てね";

  return (
    <div className="video-container">
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/ibZYkjYiADQ?si=0_qXzp5ax3PFyswx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="video-info">
        <h2>{videoTitle}</h2>
        <p>{videoDescription}</p>
      </div>
    </div>
  );
};

export default VideoIndex;
