"use client";
import React, { useState, useEffect, useRef } from "react";

const MercariItems = () => {
  const items = [
    {
      url: "https://jp.mercari.com/item/m74086400227",
      title: "ストリートファイター6 PS5",
      image: "/item1.png",
      price: 6500,
    },
    {
      url: "https://jp.mercari.com/item/m87026415502",
      title: "[✨包装フィルム未開封 新品✨] PS5 ストリートファイター６",
      image: "/item2.png",
      price: 5900,
    },
    {
      url: "https://jp.mercari.com/item/m84087368841",
      title: "ストリートファイター6 ps5 値段交渉あり!!",
      image: "/item3.png",
      price: 6500,
    },
    {
      url: "https://jp.mercari.com/item/m72935812127",
      title: "Street Fighter 6 PS5",
      image: "/item4.png",
      price: 6000,
    },
  ];

  return (
    <div>
      <h2>商品一覧</h2>
      <div style={{ display: "flex" }}>
        {items.map((item, index) => (
          <div key={index} style={{ margin: "0 10px", position: "relative" }}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={`商品サムネイル ${index + 1}`}
                style={{ width: "150px", height: "150px" }}
              />
            </a>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(255, 255, 255, 0.7)",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: "0px", fontWeight: "bold" }}>{item.price}円</p>
            </div>
            <p style={{ margin: 0 }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MercariItems;
