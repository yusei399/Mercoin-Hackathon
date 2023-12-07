"use client";
import React, { useState } from "react";
import styles from "../styles/video.module.css";

const VideoIndex = () => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/ibZYkjYiADQ?si=0_qXzp5ax3PFyswx"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoIndex;
