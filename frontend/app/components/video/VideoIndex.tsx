"use client";
import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/material/Button";

import "../../styles/VideoIndex.css";
import Chart from "../chart/chart";

const VideoIndex = () => {
  const videoTitle = "動画タイトル";
  const videoDescription = "とってもおもしろい動画 \n ぜったいに見てね";


  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  }

  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/ibZYkjYiADQ?si=0_qXzp5ax3PFyswx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

        <div className="footer">
          <div className="video-info" >
            <h2>{videoTitle}</h2>
            <div className="left-info">
              <Avatar src="/葛葉.png" size="lg" />
              <p className="liver-name"> 葛葉 </p>
            </div>
            <div className="right-info">
              <Button className="register" variant="contained" color="primary"sx={{ 
                borderRadius: '20px', 
                backgroundColor: isSubscribed ? 'grey' : 'black', // 条件による背景色の変更
                color: isSubscribed ? 'black' : 'white', // 条件によるテキスト色の変更
                '&:hover': {
                  backgroundColor: isSubscribed ? 'lightgrey' : 'primary.dark', // ホバー時の色も反転
                }
              }} 
              onClick={handleSubscribe}>
                {isSubscribed ? '登録済み' : 'チャンネル登録'}
              </Button>
            </div>
            <p>{videoDescription}</p>
          </div>
          <Chart />
        </div>
    </div>
  );
};

export default VideoIndex;

