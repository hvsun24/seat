import { useEffect, useState } from 'react';
import * as S from './styled';
import { ESize, ETotalRoleType, ITotalSeat } from '../interface';

import img_01 from '../../assets/images/empty_01.png';
import img_02 from '../../assets/images/empty_02.png';
import img_03 from '../../assets/images/empty_03.png';
import img_04 from '../../assets/images/empty_04.png';
import img_05 from '../../assets/images/empty_05.png';
import img_06 from '../../assets/images/empty_06.png';
import img_07 from '../../assets/images/empty_07.png';
import img_08 from '../../assets/images/empty_08.png';
import img_09 from '../../assets/images/empty_09.png';
import img_10 from '../../assets/images/empty_10.png';

export let RoleTheme = {} as {
	[key in ETotalRoleType]: { color: string; backgroundColor: string };
};

const emptyImages = [
	img_01,
	img_02,
	img_03,
	img_04,
	img_05,
	img_06,
	img_07,
	img_08,
	img_09,
	img_10,
];

function SeatController({
	type,
	member,
	index,
}: {
	type: string;
	member: ITotalSeat;
	index: number;
}) {
	const adjustGapIndex =
		type === 'center' ? [1, 3, 5, 7, 8, 10, 12, 14] : type === 'right' ? [4] : [];
	if (member.part === ETotalRoleType.공석) {
		return (
			<S.SeatBox size={ESize.Small} role={member.part} addMargin={adjustGapIndex.includes(index)}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else {
		return (
			<S.SeatBox
				role={member.part}
				size={ESize.Small}
				isNew={member.imageUrl.length === 0}
				onClick={() => window.open(member.page)}
				addMargin={adjustGapIndex.includes(index)}
			>
				<S.Image size={ESize.Small} isNew={member.imageUrl.length === 0}>
					<img
						src={member.imageUrl.length === 0 ? emptyImages[getRandomInt(0, 10)] : member.imageUrl}
					/>
				</S.Image>
				<S.Info>
					{/*<S.Role size={ESize.Small} role={member.part}>*/}
					{/*	{member.label}*/}
					{/*</S.Role>*/}
					<S.Name role={member.part} size={ESize.Small} className="name">
						{member.name}
						<span>{member.position}</span>
					</S.Name>
				</S.Info>
			</S.SeatBox>
		);
	}
}

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function TotalSeat() {
	const [centerSeats, setCenterSeats] = useState<{ [key: string]: ITotalSeat[] }>(
		{} as { [key: string]: ITotalSeat[] },
	);
	const [leftSeats, setLeftSeats] = useState<{ [key: string]: ITotalSeat[] }>(
		{} as { [key: string]: ITotalSeat[] },
	);
	const [rightSeats, setRightSeats] = useState<{ [key: string]: ITotalSeat[] }>(
		{} as { [key: string]: ITotalSeat[] },
	);

	useEffect(() => {
		void seatInfoDownload();
	}, []);

	const seatInfoDownload = async () => {
		const res = await fetch(`https://image.snack24h.com/static/files/seat.json?date=${Date.now()}`);
		const blob = await res.blob();
		const reader = new FileReader();
		reader.readAsText(blob, 'UTF-8');
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				const data = JSON.parse(reader.result);
				console.log('[data] result >>> ', data);

				setCenterSeats(data.seat.center);
				setRightSeats(data.seat.right);
				setLeftSeats(data.seat.left);
				RoleTheme = data.role;
			} // 결과 저장
		};
	};

	return (
		<S.SeatsWrap>
			<S.Seats type="left">
				<S.RoomWrap vertical={true}>
					<S.Room margin="0 0 -3px 0">
						<span>대표이사실</span>
					</S.Room>
					<S.Room margin="0 0 -3px 0">
						<span>1번 회의실</span>
					</S.Room>
					<S.Room margin="0 0 -3px 0">
						<span>2번 회의실</span>
					</S.Room>
					<S.Room margin="0 0 13px 0">
						<span>3번 회의실</span>
					</S.Room>
				</S.RoomWrap>
				<div>
					{Object.values(leftSeats).map(obj => {
						return (
							<S.SeatBoxWrap>
								{obj.map((member, index) => {
									return <SeatController type="left" member={member} index={index} />;
								})}
							</S.SeatBoxWrap>
						);
					})}
				</div>
				<S.Room margin="13px 0 0 0">
					<span>휴게실</span>
				</S.Room>
			</S.Seats>

			<S.Seats>
				{Object.values(centerSeats).map(obj => {
					return (
						<S.SeatBoxWrap>
							{obj.map((member, index) => {
								return <SeatController type="center" member={member} index={index} />;
							})}
						</S.SeatBoxWrap>
					);
				})}
			</S.Seats>

			<S.RightSeats>
				<div>
					<S.RoomWrap width={400}>
						<S.Room margin="0 0 -3px 0">
							<span>펫룸</span>
						</S.Room>
						<S.Room margin="0 0 -3px -3px">
							<span>창고</span>
						</S.Room>
					</S.RoomWrap>
					<S.RoomWrap width={400}>
						<S.Room>
							<span>컨퍼런스룸</span>
						</S.Room>
					</S.RoomWrap>
				</div>
				<S.legendWrap>
					{Object.entries(RoleTheme).map(([name, colorInfo]) => {
						return (
							<S.legend color={colorInfo.backgroundColor} borderColor={colorInfo.color}>
								<span>
									<span />
									{name}
								</span>
							</S.legend>
						);
					})}
				</S.legendWrap>

				<S.Seats>
					{Object.values(rightSeats).map((obj, index) => {
						return (
							<S.SeatBoxWrap>
								{obj.map((member, index) => {
									return <SeatController type="right" member={member} index={index} />;
								})}
								{(index === 0 || index === 1) && <S.Empty />}
							</S.SeatBoxWrap>
						);
					})}
				</S.Seats>

				<S.Room
					width={201}
					height={101}
					absolute={true}
					coordinate={{ top: 'unset', left: 0, right: 'unset', bottom: 0 }}
				>
					<span>4번 회의실</span>
				</S.Room>

				<S.Room
					width={247}
					height={148}
					absolute={true}
					coordinate={{ top: 375, left: 215, right: 'unset', bottom: 0 }}
				>
					<span>5번 회의실</span>
				</S.Room>
				<S.Room
					width={247}
					height={148}
					absolute={true}
					coordinate={{ top: 375, left: 459, right: 'unset', bottom: 0 }}
				>
					<span>6번 회의실</span>
				</S.Room>
				<S.Room
					width={491}
					height={58}
					absolute={true}
					coordinate={{ top: 520, left: 215, right: 'unset', bottom: 0 }}
				>
					<span>창고</span>
				</S.Room>
			</S.RightSeats>
		</S.SeatsWrap>
	);
}

export default TotalSeat;
