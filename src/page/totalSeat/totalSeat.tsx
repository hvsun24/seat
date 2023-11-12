import { useEffect, useState } from 'react';
import * as S from '../styled';
import { ERoleType, ESize, ISeat } from '../interface';
import EmptyImage from '../../assets/images/basic.png';

function SeatController({ member }: { member: ISeat }) {
	if (member.part === ERoleType.Other) {
		return (
			<S.SeatBox size={ESize.Small} role={member.part}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else if (member.part === ERoleType.Empty) {
		return (
			<S.SeatBox size={ESize.Small} role={member.part}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else {
		return (
			<S.SeatBox
				size={ESize.Small}
				isNew={member.imageUrl.length === 0}
				onClick={() => window.open(member.page)}
			>
				<S.Image size={ESize.Small} isNew={member.imageUrl.length === 0}>
					<img src={member.imageUrl.length === 0 ? EmptyImage : member.imageUrl} />
				</S.Image>
				<S.Info>
					<S.Role size={ESize.Small} role={member.part}>
						{member.label}
					</S.Role>
					<S.Name size={ESize.Small} className="name">
						{member.name} <span>{member.position}</span>
					</S.Name>
				</S.Info>
			</S.SeatBox>
		);
	}
}

function TotalSeat() {
	const [seats, setSeats] = useState<{ [key: string]: ISeat[] }>({ 1: [] });
	const [role, setRole] = useState(null);

	useEffect(() => {
		void seatInfoDownload();
	}, []);

	const seatInfoDownload = async () => {
		const res = await fetch('https://image.snack24h.com/static/files/seat.json');
		const blob = await res.blob();
		const reader = new FileReader();
		reader.readAsText(blob, 'UTF-8');
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				const data = JSON.parse(reader.result);
				setSeats(data.seat);
				setRole(data.role);
			} // 결과 저장
		};
	};

	return (
		<S.Seats>
			{Object.values(seats).map((obj, index) => {
				return (
					<S.SeatBoxWrap addMargin={index % 2 === 0}>
						{obj.map(member => {
							return <SeatController member={member} />;
						})}
					</S.SeatBoxWrap>
				);
			})}
		</S.Seats>
	);
}

export default TotalSeat;
