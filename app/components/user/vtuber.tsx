import Image from "next/image";
import React from "react";
import Button from '@mui/material/Button';
import Chart from "../chart/chart";

const Vtuber = () => {
    return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '200px' }}>
				<div>
					<Image src="/葛葉.png" width={200} height={200} alt="葛葉" style={{ borderRadius: '30px' }} />
					<div>葛葉</div>
					<div>＊＊人が視聴中</div>
					<div>0.001tokenを保有しています</div>
					<div style={{ width: '5px', display: 'inline-block' }}></div>
					<Button variant="contained"> Tokenを手放す</Button>
					<div style={{ width: '50px', height: '50px' }}>
						<Chart />
					</div>
				</div>
				<div>
					<Image src="/叶.jpg" width={200} height={200} alt="叶" style={{ borderRadius: '30px' }} />
					<div>叶</div>
					<div>＊＊人が視聴中</div>
					<div>0.001tokenを保有しています</div>
					<div style={{ width: '5px', display: 'inline-block' }}></div>
					<Button variant="contained">Tokenを手放す</Button>
					<div style={{ width: '50px', height: '50px' }}>
						<Chart />
					</div>
				</div>
				<div>
					<Image src="/魔界のりりむ.jpg" width={200} height={200} alt="魔界のりりむ" style={{ borderRadius: '30px' }} />
					<div>魔界のりりむ</div>
					<div>＊＊人が視聴中</div>
					<div>0.001tokenを保有しています</div>
					<div style={{ width: '5px', display: 'inline-block' }}></div>
					<Button variant="contained">Tokenを手放す</Button>
					<div style={{ width: '50px', height: '50px' }}>
						<Chart />
					</div>
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
				<div>
					<Image src="/キズナアイ.jpg" width={200} height={200} alt="葛葉" style={{ borderRadius: '30px' }} />
					<div>キズナアイ</div>
					<div>＊＊人が視聴中</div>
					<div>0.001tokenを保有しています</div>
					<div style={{ width: '5px', display: 'inline-block' }}></div>
					<Button variant="contained"> Tokenを手放す</Button>
					<div style={{ width: '50px', height: '50px' }}>
						<Chart />
					</div>
				</div>
				<div>
					<Image src="/宝鐘マリン.jpg" width={200} height={200} alt="叶" style={{ borderRadius: '30px' }} />
					<div>宝鐘マリン</div>
					<div>＊＊人が視聴中</div>
					<div>0.001tokenを保有しています</div>
					<div style={{ width: '5px', display: 'inline-block' }}></div>
					<Button variant="contained">Tokenを手放す</Button>
					<div style={{ width: '50px', height: '50px' }}>
						<Chart />
					</div>
				</div>
				<div>
					<Image src="/Gawr Gura.jpg" width={200} height={200} alt="魔界のりりむ" style={{ borderRadius: '30px' }} />
					<div>Gawr Gura</div>
					<div>＊＊人が視聴中</div>
					<div>0.001tokenを保有しています</div>
					<div style={{ width: '5px', display: 'inline-block' }}></div>
					<Button variant="contained">Tokenを手放す</Button>
					<div style={{ width: '50px', height: '50px' }}>
						<Chart />
					</div>
				</div>
			</div>
		</>
    );
}



export default Vtuber;