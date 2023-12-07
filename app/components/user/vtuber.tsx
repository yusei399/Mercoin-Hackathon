import Image from "next/image";
import React from "react";
import Button from '@mui/material/Button';

const Vtuber = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <div>
                <Image src="/葛葉.png" width={200} height={200} alt="葛葉" style={{ borderRadius: '30px' }} />
                <div>葛葉</div>
				<div>＊＊人が視聴中</div>
				<div>0.001tokenを保有しています</div>
				<Button variant="contained">Tokenを購入</Button>
				<div style={{ width: '5px', display: 'inline-block' }}></div>
				<Button variant="contained"> Tokenを手放す</Button>
            </div>
            <div>
                <Image src="/叶.jpg" width={200} height={200} alt="叶" style={{ borderRadius: '30px' }} />
                <div>叶</div>
				<div>＊＊人が視聴中</div>
				<div>0.001tokenを保有しています</div>
				<Button variant="contained" >Tokenを購入</Button>
				<div style={{ width: '5px', display: 'inline-block' }}></div>
				<Button variant="contained">Tokenを手放す</Button>
            </div>
            <div>
                <Image src="/魔界のりりむ.jpg" width={200} height={200} alt="魔界のりりむ" style={{ borderRadius: '30px' }} />
                <div>魔界のりりむ</div>
				<div>＊＊人が視聴中</div>
				<div>0.001tokenを保有しています</div>
				<Button variant="contained" >Tokenを購入</Button>
				<div style={{ width: '5px', display: 'inline-block' }}></div>
				<Button variant="contained">Tokenを手放す</Button>
            </div>
        </div>
    );
}



export default Vtuber;