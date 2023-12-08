"use client";
import React, { useState } from "react";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ShopIcon from "@mui/icons-material/Shop";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { IconButton } from "@mui/material";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import "../../styles/Menu.css";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
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
  );
};

export default Menu;
