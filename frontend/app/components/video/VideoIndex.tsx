"use client";
import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/material/Button";
import "../../styles/VideoIndex.css";

const VideoIndex = () => {
  const videoTitle = "KZHCUP in STREET FIGHTER 6 本配信";
  const videoDescription = `1,692,880 回視聴  2023/11/26 にライブ配信\n【協力】カプコン\n『ストリートファイター6 ©CAPCOM CO., LTD. 2023 ALL RIGHTS RESERVED.`;

  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/83CbLxuFIKM?si=qTfwO4TbAp2pTr7o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div className="footer">
          <div className="video-info">
            <h2>{videoTitle}</h2>
            <div className="left-info">
              <Avatar src="/葛葉.png" size="lg" />
              <p className="liver-name"> 葛葉 </p>
            </div>
            <div className="right-info">
              <Button
                className="register"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: isSubscribed ? "grey" : "black", // 条件による背景色の変更
                  color: isSubscribed ? "black" : "white", // 条件によるテキスト色の変更
                  "&:hover": {
                    backgroundColor: isSubscribed
                      ? "lightgrey"
                      : "primary.dark", // ホバー時の色も反転
                  },
                }}
                onClick={handleSubscribe}
              >
                {isSubscribed ? "登録済み" : "チャンネル登録"}
              </Button>
            </div>
            <p>{videoDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIndex;
