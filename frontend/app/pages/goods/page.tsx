"use client";
import {Box, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, Button, Collapse } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Site = () => {
	const data =[
		{
			image : "/store_batch.png",
			title: "EXゲーマーズ5周年記念",
			content: "【EXゲーマーズ5周年記念】マウスパッド",
			price: "0.001token",
		},
		{
			image : "/ステッカー.png",
			title: "EXゲーマーズ5周年記念",
			content: "【EXゲーマーズ5周年記念】ステッカーセット",
			price : "0.001token",
		},
		{
			image : "/ヘアクリップ.png",
			title : "EXゲーマーズ5周年記念",
			content: "【EXゲーマーズ5周年記念】ヘアクリップ",
			price: "0.001token",
		},
		{
			image: "/アクリルスタンド.png",
			title: "EXゲーマーズ5周年記念",
			content: "【EXゲーマーズ5周年記念】アクリルスタンド",
			price: "0.001token",
		},
		{
			image : "/ランダムチェキ風.png",
			title: "EXゲーマーズ5周年記念",
			content: "【EXゲーマーズ5周年記念】ランダムチェキ風カード",
			price : "0.001token",
		},
		{
			image : "/アクリルパネル.png",
			title: "にじフェス2023",
			content: "【Kuzuha Solo Event ”Kaleidoscope”】B6アクリルパネル【にじフェス2023】",
			price : "0.001token",
		},
		{
			image : "/バッチセット.png",
			title : "にじフェス2023",
			content : "【【Kuzuha Solo Event ”Kaleidoscope”】缶バッジセット【にじフェス2023】",
			price : "0.001token",
		},
		{
			image : "/オルゴール.png",
			title : "ChroNoiR 5th ANNIVERSARY",
			content : "【ChroNoiR 5th ANNIVERSARY】オルゴール",
			price : "0.001token",
		}
		
	]

	const [favorites, setFavorites] = useState(Array(data.length).fill(false));

	// フェイバリットの状態を切り替える関数
	const toggleFavorite = (index) => {
	  setFavorites(favorites.map((fav, i) => (i === index ? !fav : fav)));
	};

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' , p: 3,}}>
		{data?.map((item, index) => (
		  <Card key={index} sx={{ maxWidth: 345, flexBasis: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 16px)' }, m: 2,  boxShadow: 3,}}>
          <CardHeader
            title={item.title}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src="/葛葉.png" alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
              </Avatar>
            }
          />
			<CardMedia
			  component="img"
			  height="194"
			  image={item.image}
			  alt={item.content}
			  sx={{
				transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
				"&:hover": {
				  transform: "scale(1.15) translateY(-5px)", // Enlarges and moves the image up
				  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" // Adds shadow for depth
				}
			  }}
			/>
			<CardActions disableSpacing>
			  <FavoriteIcon
			    style={{color: favorites[index] ? red[500] : 'gray'}}
				onClick={() => toggleFavorite(index)} />
			  <Button size="small" >交換</Button>
			</CardActions>
			<Collapse in={true} timeout="auto" unmountOnExit>
			<CardContent sx={{ 
					bgcolor: 'background.default', 
					p: 2, 
				}}>
				<Typography variant="body2" color="text.secondary">
				{item.content}
				</Typography>
				<Typography variant="body1" color="text.primary">
				{item.price}
				</Typography>
			</CardContent>
			</Collapse>
		  </Card>
		))}
	  </Box>
	);
  }


export default Site;

