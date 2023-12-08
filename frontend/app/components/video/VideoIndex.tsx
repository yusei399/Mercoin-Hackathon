"use client";
import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/material/Button";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ShopIcon from "@mui/icons-material/Shop";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import "../../styles/VideoIndex.css";
import Chart from "../chart/chart";
import { IconButton } from "@mui/material";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const VideoIndex = () => {
  const videoTitle = "動画タイトル";
  const videoDescription = "とってもおもしろい動画 \n ぜったいに見てね";

  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="icon-buttons-container">
        <IconButton onClick={toggleSidebar}>
          <FormatAlignJustifyIcon className="menu-icon" />
        </IconButton>
        <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <FormatAlignJustifyIcon
            className="menu-item-close-icon"
            onClick={toggleSidebar}
          />
          <Link href="/pages/user" className="menu-item">
            <PersonIcon />
            <span>マイページ</span>
          </Link>
          <Link href="/pages/goods" className="menu-item">
            <ShopIcon />
            <span>ショップ</span>
          </Link>
          <Link href="/pages/video" className="menu-item">
            <VideoCameraBackIcon />
            <span>動画一覧</span>
          </Link>
        </div>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xVPXzp99a-k?si=nc87v6d0wlRqgZZw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
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
          <Chart />
        </div>
      </div>
    </>
  );
};

export default VideoIndex;
