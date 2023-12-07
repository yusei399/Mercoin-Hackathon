"use client";
import {Box, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, Button, Collapse } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
			tite : "EXゲーマーズ5周年記念",
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
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
		{data?.map((item, index) => (
		  <Card key={index} sx={{ maxWidth: 345, flexBasis: 'calc(33.333% - 16px)' }}>
			<CardHeader
			  title={item.title}
			  avatar={
				<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
				  <Image src="/葛葉.png" width={200} height={200} alt={item.title} style={{ borderRadius: '30px' }} />
				</Avatar>
			  }
			/>
			<CardMedia
			  component="img"
			  height="194"
			  image={item.image}
			  alt={item.content}
			/>
			<CardActions disableSpacing>
			  <FavoriteIcon />
			  <Button size="small" >交換</Button>
			</CardActions>
			<Collapse in={true} timeout="auto" unmountOnExit>
			<CardContent>
			  <Typography>
				{item.content}
			  </Typography>
			</CardContent>
			</Collapse>
		  </Card>
		))}
	  </Box>
	);
  }


export default Site;

