"use client";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';



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
				image=""
				alt="Paella dish"
			/>
			<CardContent>
				<Typography>
					test content
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