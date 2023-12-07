"use client";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';

const data =[
	{
		image : "/葛葉.png",
		title: "EXゲーマーズ5周年記念",
		content: "【EXゲーマーズ5周年記念】マウスパッド",
		price: "0.001token",
	},
	{
		image : "/叶.jpg",
		title: "EXゲーマーズ5周年記念",
		content: "【EXゲーマーズ5周年記念】ステッカーセット",
		price : "0.001token",
	},
	{
		image : "/魔界のりりむ.jpg",
		tite : "EXゲーマーズ5周年記念",
		content: "【EXゲーマーズ5周年記念】ヘアクリップ",
		price: "0.001token",
	},
	{
		image: "/キズナアイ.jpg",
		title: "EXゲーマーズ5周年記念",
		content: "【EXゲーマーズ5周年記念】アクリルスタンド",
		price: "0.001token",
	},
	{
		image : "/宝鐘マリン.jpg",
		title: "EXゲーマーズ5周年記念",
		content: "【EXゲーマーズ5周年記念】ランダムチェキ風カード",
		price : "0.001token",
	},
	{
		image : "/宝鐘マリン.jpg",
		title: "にじフェス2023",
		content: "【Kuzuha Solo Event ”Kaleidoscope”】B6アクリルパネル【にじフェス2023】",
		price : "0.001token",
	}
]

const Site = () => {
	return (
		<>
		<Card sx={{maxWidth: 345}}>
			<CardHeader
				title="test"
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						<Image src="/葛葉.png" width={200} height={200} alt="葛葉" style={{ borderRadius: '30px' }} />
					</Avatar>
				}
			/>
			<CardMedia
				component="img"
				height="194"
				image="/葛葉.png"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography>
					【EXゲーマーズ5周年記念】マウスパッド
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<FavoriteIcon />
			</CardActions>
		</Card>
		</>
	);
}


export default Site;

