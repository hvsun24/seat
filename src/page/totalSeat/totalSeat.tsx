import { useEffect, useState } from 'react';
import * as S from './styled';
import { ESize, ETotalRoleType, ITotalSeat } from '../interface';
import EmptyImage from '../../assets/images/basic.png';

export let RoleTheme = {} as {
	[key in ETotalRoleType]: { color: string; backgroundColor: string };
};

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
					<img src={member.imageUrl.length === 0 ? EmptyImage : member.imageUrl} />
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
					<S.Room bottomGap={7}>
						<span>대표이사실</span>
					</S.Room>
					<S.Room bottomGap={7}>
						<span>1번 회의실</span>
					</S.Room>
					<S.Room bottomGap={7}>
						<span>2번 회의실</span>
					</S.Room>
					<S.Room>
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
				<S.Room>
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
						<S.Room bottomGap={7}>
							<span>펫룸</span>
						</S.Room>
						<S.Room bottomGap={7}>
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
					width={220}
					height={105}
					absolute={true}
					coordinate={{ top: 'unset', left: 0, right: 'unset', bottom: 0 }}
				>
					<span>4번 회의실</span>
				</S.Room>

				<S.Room
					width={275}
					height={156}
					absolute={true}
					coordinate={{ top: 397, left: 230, right: 'unset', bottom: 0 }}
				>
					<span>5번 회의실</span>
				</S.Room>
				<S.Room
					width={275}
					height={156}
					absolute={true}
					coordinate={{ top: 397, left: 513, right: 'unset', bottom: 0 }}
				>
					<span>6번 회의실</span>
				</S.Room>
				<S.Room
					width={558}
					height={48}
					absolute={true}
					coordinate={{ top: 560, left: 230, right: 'unset', bottom: 0 }}
				>
					<span>창고</span>
				</S.Room>
			</S.RightSeats>
		</S.SeatsWrap>
	);
}

export default TotalSeat;
