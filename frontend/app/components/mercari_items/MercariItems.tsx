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
    <div
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        padding: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          margin: "5px 10px",
          fontSize: "18px",
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        関連商品
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 150px",
              margin: "0 10px",
              position: "relative",
            }}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={`商品サムネイル ${index + 1}`}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </a>
            <p
              style={{
                margin: "0px",
                fontWeight: "bold",
                marginBottom: "10px",
                marginLeft: "5px",
              }}
            >
              {item.price}円
            </p>
            <p style={{ margin: 0 }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MercariItems;
