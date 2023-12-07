"use client";
import { Avatar, Card, CardHeader } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import Image from 'next/image';



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
		</Card>
		</>
	);
}


export default Site;