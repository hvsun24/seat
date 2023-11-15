import { useEffect, useState } from 'react';
import * as S from './styled';
import { ESize, ETotalRoleType, ITotalSeat } from '../interface';
import EmptyImage from '../../assets/images/basic.png';
import seatInfo from '../../assets/seat.json';

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
		seatInfo.seat.center as { [key: string]: ITotalSeat[] },
	);
	const [leftSeats, setLeftSeats] = useState<{ [key: string]: ITotalSeat[] }>(
		seatInfo.seat.side.left as { [key: string]: ITotalSeat[] },
	);
	const [rightSeats, setRightSeats] = useState<{ [key: string]: ITotalSeat[] }>(
		seatInfo.seat.side.right as { [key: string]: ITotalSeat[] },
	);
	const [role, setRole] = useState(null);

	useEffect(() => {
		// void seatInfoDownload();
	}, []);

	const seatInfoDownload = async () => {
		const res = await fetch('https://image.snack24h.com/static/files/seat.json');
		const blob = await res.blob();
		const reader = new FileReader();
		reader.readAsText(blob, 'UTF-8');
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				const data = JSON.parse(reader.result);
				setCenterSeats(data.seat.center);
				setRightSeats(data.seat.side.right);
				setLeftSeats(data.seat.side.left);
				setRole(data.role);
			} // 결과 저장
		};
	};

	return (
		<S.SeatsWrap>
			<S.Seats type="left">
				<S.Room>
					<span>대표이사실</span>
				</S.Room>
				<S.Room>
					<span>1번 회의실</span>
				</S.Room>
				<S.Room>
					<span>2번 회의실</span>
				</S.Room>
				<S.Room>
					<span>3번 회의실</span>
				</S.Room>
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
					<S.RoomWrap>
						<S.Room>
							<span>펫룸</span>
						</S.Room>
						<S.Room>
							<span>창고</span>
						</S.Room>
					</S.RoomWrap>
					<S.RoomWrap>
						<S.Room>
							<span>컨퍼런스룸</span>
						</S.Room>
					</S.RoomWrap>
				</div>

				<S.Seats>
					{Object.values(rightSeats).map((obj, index) => {
						return (
							<S.SeatBoxWrap>
								{(index === 2 || index === 3) && (
									<S.RoomWrap>
										<S.Room height={105}>
											<span>방1</span>
										</S.Room>
									</S.RoomWrap>
								)}

								{obj.map((member, index) => {
									return <SeatController type="right" member={member} index={index} />;
								})}

								{(index === 0 || index === 1) && (
									<S.Room height={105}>
										<span>R&D옆 회의실</span>
									</S.Room>
								)}
							</S.SeatBoxWrap>
						);
					})}
				</S.Seats>
			</S.RightSeats>
		</S.SeatsWrap>
	);
}

export default TotalSeat;
