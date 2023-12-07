"use client";
import React, { useState, useEffect, useRef } from "react";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/material/Button";
import "../styles/VideoIndex.css";

const VideoIndex = () => {
  const [videoTitle] = useState("動画タイトル");
  const [videoDescription] = useState("とってもおもしろい動画 \n ぜったいに見てね");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() =>
   {
    // カメラストリームを取得
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("カメラアクセスエラー:", err);
      }
    };

    getVideo();

    // コンポーネントアンマウント時にストリームをリリース
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} width="800" height="450" autoPlay playsInline></video>

      <div className="video-info">
        <h2>{videoTitle}</h2>
        <div className="left-info">
          <Avatar src="" size="lg" />
          <p className="liver-name">葛葉</p>
        </div>
        <div className="right-info">
          <Button className="register" variant="contained" color="primary">
            チャンネル登録
          </Button>
        </div>
        <p>{videoDescription}</p>
      </div>
    </div>
  );
};

export default VideoIndex;

